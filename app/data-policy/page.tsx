import Link from "next/link";
import LandingNav from "@/app/components/marketing/LandingNav";
import LandingFooter from "@/app/components/marketing/LandingFooter";

export const metadata = {
  title: "Data Policy | Critter",
  description:
    "Your business owns its data. How Critter uses data, what we never do with it, how AI is handled, and what happens if you leave.",
  openGraph: {
    title: "Data Policy | Critter",
    description:
      "Your business owns its data. How Critter uses data, what we never do with it, and how AI is handled.",
    url: "https://critter.pet/data-policy",
  },
  twitter: {
    title: "Data Policy | Critter",
    description:
      "Your business owns its data. How Critter uses data, what we never do with it, and how AI is handled.",
  },
};

// BL-552. Accepted at sign-up alongside the Terms of Use and Privacy Policy. When this changes
// materially, update "Last Updated" and bump TERMS_VERSION in the Hub.
export default function DataPolicyPage() {
  return (
    <div className="min-h-screen bg-critter-beige">
      <LandingNav />

      <div className="pt-36 pb-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="font-title text-4xl sm:text-5xl text-critter-maroon mb-8">
            Data Policy
          </h1>

          <div className="bg-white rounded-2xl border border-critter-cream p-8 sm:p-12 space-y-6 font-body text-critter-gray leading-relaxed">
            <p>
              <strong className="text-critter-maroon">Last Updated:</strong> September 2026
            </p>

            <p>
              This policy explains who owns the data in Critter, how we use it, and what we will never do
              with it. It sits alongside our{" "}
              <Link href="/terms-of-use" className="text-critter-orange hover:underline">Terms of Use</Link> and{" "}
              <Link href="/privacy" className="text-critter-orange hover:underline">Privacy Policy</Link>.
            </p>

            <section>
              <h2 className="font-title text-2xl text-critter-maroon mb-3">Your data belongs to you</h2>
              <p>
                Your business owns 100% of its data in Critter. That includes everything that arrives through an
                integration such as Time To Pet, anything you upload or import, and everything you create in
                Critter: campaigns, programs, journeys, templates and reports.
              </p>
              <p className="mt-3">
                You give Critter permission to use that data only to deliver the service you subscribe to.
                That covers syncing, reports, automations, messages you send, Togo, and support when you ask for it.
              </p>
              <p className="mt-3">
                You can take your data with you. Download customer lists and reports as CSV files from Critter
                at any time, or ask{" "}
                <a href="mailto:support@critter.pet" className="text-critter-orange hover:underline">support@critter.pet</a>{" "}
                for a full export to move to another platform.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl text-critter-maroon mb-3">What we never do</h2>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>We never sell your data.</li>
                <li>
                  We never share or expose your clients&apos; details to other Critter customers or to
                  integration partners. The service providers that run Critter for you, listed in our Privacy
                  Policy, receive only what they need to do that job.
                </li>
                <li>
                  Your campaigns, programs, automations and templates are kept separate for your business and are
                  never shown to other customers.
                </li>
                <li>
                  We don&apos;t use your business&apos;s own information, workflows or results to benefit another
                  business directly.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-title text-2xl text-critter-maroon mb-3">How we do use data across Critter</h2>
              <p>
                We learn from patterns across all businesses combined. We use aggregated, anonymized metrics,
                trends and behaviors to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>show insights and benchmarks, such as typical rebooking rates in pet care;</li>
                <li>plan and improve the product;</li>
                <li>share what we&apos;ve learned about what works, in our guidance and education for pet care businesses.</li>
              </ul>
              <p className="mt-3">
                Every figure of this kind is pooled from at least five businesses. It never identifies your
                business, your clients or your staff.
              </p>
              <p className="mt-3">
                If you ask for a new feature and we build it, it will usually be available to every business on
                Critter. How exactly depends on the feature, and we&apos;re happy to talk it through.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl text-critter-maroon mb-3">AI</h2>
              <p>
                Togo, our assistant, and Critter&apos;s writing tools run on Claude, a model made by Anthropic.
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  We never use your integration data, or anything you create in Critter, to train public AI models.
                </li>
                <li>
                  No data about an individual business, and nothing that isn&apos;t anonymized and aggregated, is
                  used to train Togo or the models underneath Critter&apos;s AI features.
                </li>
                <li>
                  Before any request reaches the AI provider, we replace people&apos;s names, email addresses and
                  phone numbers with placeholders. That covers your clients, your team and you. We put the real
                  values back before you see the answer.
                </li>
                <li>Anthropic does not train its models on the data we send.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-title text-2xl text-critter-maroon mb-3">How we protect it</h2>
              <p>
                We maintain appropriate administrative, physical and technical safeguards for all customer data.
                That includes encryption in transit, role-based access so each team member sees only what their
                role allows, and access for Critter staff only when you ask for help or to fix a problem.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl text-critter-maroon mb-3">If you leave</h2>
              <p>
                If you end your subscription, ask us for an export first if you want one. We&apos;ll delete your
                business&apos;s data on request, except for records the law requires us to keep, such as billing
                records.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl text-critter-maroon mb-3">Questions</h2>
              <p>
                Contact us at{" "}
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
