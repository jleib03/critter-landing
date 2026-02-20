import LandingNav from "@/app/components/marketing/LandingNav";
import LandingFooter from "@/app/components/marketing/LandingFooter";

export const metadata = {
  title: "Terms of Use | Critter",
  description:
    "Review the terms and conditions for using Critter's pet care CRM and marketing automation platform.",
  openGraph: {
    title: "Terms of Use | Critter",
    description:
      "Review the terms and conditions for using Critter's pet care CRM and marketing automation platform.",
    url: "https://critter.pet/terms-of-use",
  },
  twitter: {
    title: "Terms of Use | Critter",
    description:
      "Review the terms and conditions for using Critter's pet care CRM and marketing automation platform.",
  },
};

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-critter-beige">
      <LandingNav />

      <div className="pt-36 pb-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="font-title text-4xl sm:text-5xl text-critter-maroon mb-8">
            Terms of Use
          </h1>

          <div className="bg-white rounded-2xl border border-critter-cream p-8 sm:p-12 space-y-6 font-body text-critter-gray leading-relaxed">
            <p>
              <strong className="text-critter-maroon">Last Updated:</strong> February 2026
            </p>

            <section>
              <h2 className="font-title text-2xl text-critter-maroon mb-3">Acceptance of Terms</h2>
              <p>
                By accessing or using Critter (&quot;the Service&quot;), you agree to be bound by these Terms of Use. If you do not agree, please do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl text-critter-maroon mb-3">Use of Service</h2>
              <p>
                Critter provides CRM, marketing automation, and data analytics tools for pet care businesses. You are responsible for maintaining the confidentiality of your account and for all activity under your account.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl text-critter-maroon mb-3">Subscriptions & Billing</h2>
              <p>
                Paid plans are billed monthly. You may cancel at any time; cancellation takes effect at the end of your billing period. We offer a 30-day money-back guarantee on all paid plans.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl text-critter-maroon mb-3">Your Data</h2>
              <p>
                You retain ownership of all data you upload to Critter. We do not sell or share your data with third parties. You can export your data at any time.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl text-critter-maroon mb-3">Limitation of Liability</h2>
              <p>
                Critter is provided &quot;as is&quot; without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages arising from your use of the Service.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl text-critter-maroon mb-3">Contact</h2>
              <p>
                For questions about these terms, contact us at{" "}
                <a href="mailto:support@critter.pet" className="text-critter-orange hover:underline">
                  support@critter.pet
                </a>.
              </p>
            </section>
          </div>
        </div>
      </div>

      <LandingFooter />
    </div>
  );
}
