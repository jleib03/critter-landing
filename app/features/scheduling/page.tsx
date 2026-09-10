import LandingNav from "@/app/components/marketing/LandingNav";
import LandingFooter from "@/app/components/marketing/LandingFooter";
import Link from "next/link";
import { ArrowRight, Calendar, Database } from "lucide-react";

export const metadata = {
  title: "Critter Ops | Scheduling & Operations for Pet Care",
  description: "Critter Ops is the scheduling and operations product. Explore Critter Hub separately for CRM, customer insights, and marketing.",
  alternates: { canonical: "https://critter.pet/features/scheduling" },
};

export default function SchedulingPage() {
  const opsUrl = process.env.NEXT_PUBLIC_OPS_URL || "https://app.critter.pet";
  return <div className="min-h-screen bg-critter-beige">
    <LandingNav />
    <main className="mx-auto max-w-5xl px-6 pb-20 pt-36">
      <p className="font-subtitle text-sm uppercase tracking-widest text-critter-orange">Two products, different jobs</p>
      <h1 className="mt-4 max-w-3xl font-title text-4xl leading-tight text-critter-maroon sm:text-5xl">Scheduling and operations.<br />Customer relationships and marketing.</h1>
      <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-critter-gray">Choose the product you need. Critter Ops handles scheduling and operations; Critter Hub is the CRM and marketing platform featured on this site.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border border-critter-cream bg-white p-8">
          <Calendar className="h-7 w-7 text-critter-blue" />
          <h2 className="mt-5 font-title text-3xl text-critter-maroon">Critter Ops</h2>
          <p className="mt-4 font-body leading-relaxed text-critter-gray">For scheduling and day-to-day pet care operations. Visit Critter Ops for its product details and account access.</p>
          <a href={opsUrl} className="mt-6 inline-flex items-center gap-2 font-subtitle text-critter-orange">Explore Critter Ops <ArrowRight className="h-4 w-4" /></a>
        </section>
        <section className="rounded-2xl border border-critter-cream bg-white p-8">
          <Database className="h-7 w-7 text-critter-orange" />
          <h2 className="mt-5 font-title text-3xl text-critter-maroon">Critter Hub CRM</h2>
          <p className="mt-4 font-body leading-relaxed text-critter-gray">For understanding your clients, building a customer journey, and reviewing marketing follow-ups. The CRM plans and 7-day Critter trial on this site apply to Hub.</p>
          <Link href="/features/crm" className="mt-6 inline-flex items-center gap-2 font-subtitle text-critter-orange">Explore Critter Hub <ArrowRight className="h-4 w-4" /></Link>
        </section>
      </div>
      <p className="mt-8 font-body text-sm text-critter-gray">Already using Time To Pet for scheduling? <Link href="/ttp" className="text-critter-orange underline underline-offset-4">See how Critter fits alongside it.</Link></p>
    </main>
    <LandingFooter />
  </div>;
}
