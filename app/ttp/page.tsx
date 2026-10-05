import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, GitBranch, Heart, Mail, ShieldCheck } from 'lucide-react';
import TtpCapabilityShowcase from '@/app/components/marketing/TtpCapabilityShowcase';
import TtpSignupForm from '@/app/components/marketing/TtpSignupForm';
import LandingNav from '@/app/components/marketing/LandingNav';
import LandingFooter from '@/app/components/marketing/LandingFooter';
import { TogoIcon } from '@/app/components/icons/TogoIcon';
import { CRITTER_TRIAL_DAYS, CRM_OFFERS, SIGNUP_CTA, TRIAL_LENGTH, TTP_INSIGHTS_COPY, formatAllowance } from '@/lib/marketing-offers';

export const metadata: Metadata = {
  title: 'Time To Pet + Critter | Turn your booking data into next steps',
  description: `Connect Time To Pet to Critter for a clearer business snapshot, a customer journey, and follow-ups you review before turning on. Start a ${TRIAL_LENGTH} Critter trial.`,
  alternates: { canonical: 'https://critter.pet/ttp' },
  openGraph: { title: 'Your Time To Pet data. A clearer plan for what comes next.', description: `Meet your business snapshot, customer journey, and next useful follow-up. Start a ${TRIAL_LENGTH} Critter trial.`, url: 'https://critter.pet/ttp' },
};

const steps = [
  { number: '01', title: 'Bring your business into view', text: 'Connect Time To Pet. Start with the last 12 months of appointments and upcoming visits, alongside your clients, pets, and services.' },
  { number: '02', title: 'Find your way around', text: 'Get familiar with your clients, journey, and marketing tools while your data loads.' },
  { number: '03', title: 'Make the setup yours', text: 'Explore your own snapshot, then review your customer journey, rules, and drafted follow-ups. You decide what to change and what to turn on.' },
];
const questions = [
  ['Does this replace Time To Pet?', 'No. Keep Time To Pet for scheduling and operations. Critter connects your data to customer insights, relationship management, and marketing tools.'],
  ['Will Critter start sending messages when I connect?', 'Connecting and building your setup does not activate its drafts. Review your copy, audience, and settings before turning on a follow-up.'],
  ['Do I need a credit card?', `No. New CRM businesses start with a ${TRIAL_LENGTH} Critter trial without a credit card. Texting is not included during the trial.`],
  ['What happens after my trial?', TTP_INSIGHTS_COPY],
];

const heroPoints = [
  ['Connects in minutes.', 'Bring in the last 12 months of appointments, plus your clients, pets, and services.'],
  ['Nothing sends without you.', 'Every follow-up waits for your review before it goes live.'],
  ['Keep Time To Pet for scheduling.', 'Critter adds insight and marketing on top. No switching.'],
];

/** The sign-up form lives in the hero; other CTAs on the page scroll to it. */
function TrialLink() {
  return <a href="#signup" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-critter-orange px-7 py-3 font-subtitle text-base text-white transition-colors hover:bg-critter-orange/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
    {SIGNUP_CTA} <ArrowRight aria-hidden className="h-4 w-4 shrink-0" />
  </a>;
}

export default function TtpPage() {
  return <div className="min-h-screen bg-critter-beige text-critter-maroon">
    <LandingNav acquisitionSource="ttp" />
    <main className="pt-20">
      <section className="px-6 pb-16 pt-10 sm:pt-16 lg:py-20">
        {/* Phones: headline, form, then the points. Desktop: copy left, form right. */}
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-x-16 lg:gap-y-0">
          <div className="lg:col-start-1 lg:pt-6">
            <div className="mb-9 flex items-center gap-3 sm:gap-4" aria-label="Critter and Time To Pet">
              <Image src="/images/critter-logo.png" alt="Critter" width={120} height={40} className="h-7 w-auto sm:h-9" priority />
              <span className="font-body text-xl text-critter-gray" aria-hidden>×</span>
              <img src="https://www.timetopet.com/images/logo-ttp-color.svg" alt="Time To Pet" width="150" height="40" className="h-7 w-auto max-w-[120px] sm:h-9 sm:max-w-[150px]" />
            </div>
            <h1 className="font-title text-4xl leading-[1.12] sm:text-5xl lg:text-6xl">Your Time To Pet data.<br /><span className="text-critter-orange">A clearer plan for what comes next.</span></h1>
            <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-critter-gray">You already know your clients. Critter helps you see the patterns behind their visits, organize your customer journey, and choose the next useful follow-up.</p>
          </div>
          <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1"><TtpSignupForm /></div>
          <div className="lg:col-start-1">
            <ul className="lg:mt-8 max-w-xl space-y-4">{heroPoints.map(([title, text]) => <li key={title} className="flex items-start gap-3 font-body leading-relaxed text-critter-gray"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-critter-orange/15"><Check aria-hidden className="h-3.5 w-3.5 text-critter-orange" /></span><span><strong className="font-subtitle font-normal text-critter-maroon">{title}</strong> {text}</span></li>)}</ul>
            <p className="mt-8 border-t border-critter-cream pt-5 font-body text-sm text-critter-gray">{TRIAL_LENGTH} free trial · No credit card · Cancel anytime</p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl"><TtpCapabilityShowcase /></div>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-24 bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="font-subtitle text-xs uppercase tracking-widest text-critter-orange">From connected to confident</p>
          <h2 className="mt-3 max-w-2xl font-title text-3xl sm:text-4xl">A setup you can understand.<br />A pace you can choose.</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">{steps.map(step => <article key={step.number} className="border-t border-critter-orange/30 pt-6"><span className="font-title text-3xl text-critter-orange">{step.number}</span><h3 className="mt-4 font-subtitle text-xl">{step.title}</h3><p className="mt-3 font-body leading-relaxed text-critter-gray">{step.text}</p></article>)}</div>
          <div className="mt-10 flex items-start gap-3 rounded-2xl bg-critter-beige p-5 font-body text-sm text-critter-gray"><ShieldCheck aria-hidden className="h-5 w-5 shrink-0 text-critter-orange" /><p>Import time varies with your data and connection. Your setup checklist keeps the next steps in one place, so you can come back when you are ready.</p></div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-2xl font-title text-3xl sm:text-4xl">The bigger picture is useful.<br />Knowing what to do next is better.</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {[
              { icon: Heart, title: 'See the relationships behind the bookings', text: 'Explore repeat visits, service mix, and clients who may need a check-in. Move from a finding to the relevant customer group.' },
              { icon: GitBranch, title: 'Make your journey make sense', text: 'See how clients are grouped and why a rule moves them. Review proposed changes before applying them to existing customers.' },
              { icon: Mail, title: 'Start from a draft, not a blank page', text: 'Review follow-ups for your setup. Tailor the words, check the audience, and choose when to activate them.' },
              { icon: TogoIcon, title: 'Talk through the next step with Togo', text: 'Ask what a finding means or how a rule works. Togo uses available business context to help you understand your options.' },
            ].map(item => <article key={item.title} className="rounded-2xl border border-critter-cream bg-white p-7"><item.icon aria-hidden className="h-6 w-6 text-critter-orange" /><h3 className="mt-5 font-subtitle text-xl">{item.title}</h3><p className="mt-3 font-body leading-relaxed text-critter-gray">{item.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-critter-maroon px-6 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-16">
          <div><p className="font-subtitle text-xs uppercase tracking-widest text-white/70">After your trial</p><h2 className="mt-4 font-title text-3xl sm:text-4xl">Keep the insight.<br />Choose when to do more.</h2><p className="mt-5 font-body leading-relaxed text-white/80">{TTP_INSIGHTS_COPY}</p><p className="mt-4 font-body text-sm text-white/70">Insights is not a free sending or automation plan. Your eligibility depends on the connection and account status.</p></div>
          <div className="rounded-2xl border border-white/20 p-7"><p className="font-subtitle text-sm">Ready for the full CRM?</p><h3 className="mt-3 font-title text-3xl">Starter · ${CRM_OFFERS.starter.monthlyUsd}<span className="font-body text-sm text-white/70"> USD/month</span></h3><p className="mt-4 font-body leading-relaxed text-white/80">Grow features, sized for one owner.</p><ul className="mt-5 space-y-3 font-body text-sm">{[`${formatAllowance(CRM_OFFERS.starter.emails)} base emails per month`, 'Owner-only access · no additional seats', 'Journey automation, task lists, and reporting', 'No Togo or SMS on Starter (both start on Grow)'].map(item => <li key={item} className="flex items-start gap-2"><Check aria-hidden className="h-4 w-4 shrink-0" />{item}</li>)}</ul><Link href="/pricing" className="mt-6 inline-flex items-center gap-2 font-subtitle text-sm underline underline-offset-4">Compare paid plans <ArrowRight aria-hidden className="h-4 w-4" /></Link></div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20"><div className="mx-auto max-w-3xl"><h2 className="mb-8 font-title text-3xl sm:text-4xl">A few things you might be wondering</h2><div className="space-y-3">{questions.map(([question, answer]) => <details key={question} className="rounded-xl border border-critter-cream bg-white"><summary className="cursor-pointer p-5 font-subtitle focus-visible:outline-critter-orange">{question}</summary><p className="px-5 pb-5 font-body leading-relaxed text-critter-gray">{answer}</p></details>)}</div></div></section>
      <section className="px-6 pb-20"><div className="mx-auto max-w-6xl rounded-[28px] bg-[#FBEBDD] p-8 text-center sm:p-14"><h2 className="font-title text-3xl sm:text-4xl">Let’s see what your data can tell you.</h2><p className="mx-auto mb-7 mt-4 max-w-xl font-body text-critter-gray">Connect Time To Pet, get your bearings, and build from there.</p><TrialLink /><p className="mt-4 font-body text-sm text-critter-gray">{CRITTER_TRIAL_DAYS} days to explore. No credit card required.</p></div></section>
    </main>
    <LandingFooter acquisitionSource="ttp" />
  </div>;
}
