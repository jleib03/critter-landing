import Link from "next/link";
import LandingNav from "@/app/components/marketing/LandingNav";
import LandingFooter from "@/app/components/marketing/LandingFooter";

export const metadata = {
  title: "FAQs - Frequently Asked Questions | Critter",
  description: "Find answers to common questions about Critter's CRM and marketing automation platform for pet care businesses.",
};

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-critter-beige">
      <LandingNav />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-3xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-title text-4xl sm:text-5xl text-black mb-4">
              Frequently Asked Questions
            </h1>
            <p className="font-body text-lg text-critter-gray max-w-2xl mx-auto">
              Everything you need to know about Critter and how it can help grow your pet care business.
            </p>
          </div>

          {/* Placeholder */}
          <div className="bg-white rounded-xl p-12 border border-critter-cream text-center">
            <p className="font-subtitle text-black mb-2">Coming soon!</p>
            <p className="font-body text-critter-gray text-sm">
              We&apos;re putting together answers to the most common questions. Check back soon.
            </p>
          </div>
        </div>
      </div>

      <LandingFooter />
    </div>
  );
}
