'use client';

import { useState, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { getHubLinks } from '@/lib/marketing-links';

type Status = { kind: 'idle' | 'submitting' } | { kind: 'error'; message: string; signIn?: boolean } | { kind: 'sent'; email: string };

const field = 'mt-1.5 block w-full rounded-xl border border-critter-gray/40 bg-white px-4 py-3 font-body text-base text-critter-maroon outline-none transition focus:border-critter-orange focus:ring-2 focus:ring-critter-orange/20';
const label = 'font-subtitle text-sm';

/**
 * BL-403: the /ttp page is the sign-up page. Posts to Hub's public sign-up API (the same
 * one Hub's own form uses: server-side validation, rate limit, honeypot, terms record).
 * `source: 'ttp'` makes the verification email continue into the Time To Pet connect step.
 */
export default function TtpSignupForm() {
  const links = getHubLinks('ttp');
  const [status, setStatus] = useState<Status>({ kind: 'idle' });
  const [showPassword, setShowPassword] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const value = (name: string) => String(form.get(name) || '').trim();
    const email = value('email');
    if (String(form.get('password') || '').length < 8) return setStatus({ kind: 'error', message: 'Password must be at least 8 characters.' });
    setStatus({ kind: 'submitting' });
    try {
      const response = await fetch(links.signupApi, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: value('firstName'),
          lastName: value('lastName'),
          businessName: value('businessName'),
          email,
          password: String(form.get('password') || ''),
          website: value('website') || undefined,
          acceptedTerms: form.get('acceptedTerms') === 'on',
          source: 'ttp',
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        return setStatus({ kind: 'error', message: data.error || 'We could not create your account. Please try again.', signIn: response.status === 409 });
      }
      setStatus({ kind: 'sent', email });
    } catch {
      setStatus({ kind: 'error', message: 'We could not reach Critter. Check your connection and try again.' });
    }
  }

  if (status.kind === 'sent') {
    return <div id="signup" className="scroll-mt-28 rounded-[28px] border border-critter-cream bg-white p-7 text-center shadow-sm sm:p-9" role="status">
      <CheckCircle2 aria-hidden className="mx-auto h-12 w-12 text-critter-orange" />
      <h2 className="mt-5 font-title text-3xl">Check your email</h2>
      <p className="mt-4 font-body leading-relaxed text-critter-gray">We sent a verification link to <strong className="text-critter-maroon">{status.email}</strong>. Open it to start your 7-day trial. It brings you straight to connecting Time To Pet.</p>
      <p className="mt-5 font-body text-sm text-critter-gray">Nothing after a few minutes? Check your spam folder, or <a href="/contact-us" className="underline underline-offset-4">contact us</a>.</p>
    </div>;
  }

  const submitting = status.kind === 'submitting';
  return <div id="signup" className="scroll-mt-28 rounded-[28px] border border-critter-cream bg-white p-6 shadow-sm sm:p-9">
    <h2 className="font-title text-2xl sm:text-3xl">Create your Critter account</h2>
    <p className="mt-2 font-body text-critter-gray">Start your 7-day free trial. After you verify your email, you&apos;ll connect Time To Pet.</p>
    <form onSubmit={submit} className="mt-6 space-y-4" aria-label="Create your Critter account">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={label}>First name<input name="firstName" autoComplete="given-name" required className={field} /></label>
        <label className={label}>Last name<input name="lastName" autoComplete="family-name" required className={field} /></label>
      </div>
      <label className={`${label} block`}>Business name<input name="businessName" autoComplete="organization" required className={field} /></label>
      <label className={`${label} block`}>Work email<input name="email" type="email" autoComplete="email" required className={field} /></label>
      <div>
        <label htmlFor="ttp-signup-password" className={label}>Password</label>
        <div className="relative">
          <input id="ttp-signup-password" name="password" type={showPassword ? 'text' : 'password'} autoComplete="new-password" required minLength={8} aria-describedby="ttp-signup-password-hint" className={`${field} pr-20`} />
          <button type="button" onClick={() => setShowPassword(shown => !shown)} aria-pressed={showPassword} className="absolute right-2 top-1/2 mt-[3px] -translate-y-1/2 rounded-lg px-3 py-1.5 font-subtitle text-sm text-critter-orange hover:bg-critter-beige">{showPassword ? 'Hide' : 'Show'}</button>
        </div>
        <p id="ttp-signup-password-hint" className="mt-1.5 font-body text-xs text-critter-gray">At least 8 characters.</p>
      </div>
      {/* Honeypot: hidden from people and assistive tech; bots fill it and Hub discards the request. */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-px w-px opacity-0" />
      <label className="flex items-start gap-3 font-body text-sm text-critter-gray">
        <input name="acceptedTerms" type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0 accent-critter-orange" />
        <span>I agree to Critter&apos;s <a href="/terms-of-use" target="_blank" className="underline underline-offset-4">Terms of Service</a> and <a href="/privacy" target="_blank" className="underline underline-offset-4">Privacy Policy</a>.</span>
      </label>
      {status.kind === 'error' && <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 font-body text-sm text-red-800">
        {status.message}{status.signIn && <> <a href={links.signin} className="font-subtitle underline underline-offset-4">Sign in instead</a></>}
      </p>}
      <button type="submit" disabled={submitting} className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-critter-orange px-7 py-3 font-subtitle text-base text-white transition-colors hover:bg-critter-orange/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 disabled:opacity-70">
        {submitting ? <><Loader2 aria-hidden className="h-4 w-4 animate-spin" /> Creating your account…</> : <>Start my 7-day free trial <ArrowRight aria-hidden className="h-4 w-4 shrink-0" /></>}
      </button>
    </form>
    <p className="mt-5 text-center font-body text-sm text-critter-gray">No credit card required. Prefer Google? <a href={links.signup} className="underline underline-offset-4">Sign up with Google</a></p>
  </div>;
}
