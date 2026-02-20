import LandingNav from "@/app/components/marketing/LandingNav";
import LandingFooter from "@/app/components/marketing/LandingFooter";

export const metadata = {
  title: "Privacy Policy | Critter",
  description:
    "Learn how Critter collects, uses, and protects your personal information. Our privacy policy covers data handling for our pet care business platform.",
  openGraph: {
    title: "Privacy Policy | Critter",
    description:
      "Learn how Critter collects, uses, and protects your personal information.",
    url: "https://critter.pet/privacy",
  },
  twitter: {
    title: "Privacy Policy | Critter",
    description:
      "Learn how Critter collects, uses, and protects your personal information.",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-critter-beige">
      <LandingNav />

      <div className="pt-36 pb-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="font-title text-4xl sm:text-5xl text-critter-maroon mb-8">
            Privacy Policy
          </h1>

          <div className="bg-white rounded-2xl border border-critter-cream p-8 sm:p-12 space-y-6 font-body text-critter-gray leading-relaxed">
            <p>
              <strong className="text-critter-maroon">Last Updated:</strong> February 2026
            </p>

            <section>
              <h2 className="font-title text-2xl text-critter-maroon mb-3">Overview</h2>
              <p>
                Critter (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our platform.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl text-critter-maroon mb-3">Information We Collect</h2>
              <p>We collect information you provide directly, including:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Account information (name, email, business details)</li>
                <li>Customer data you import into the platform</li>
                <li>Usage data and analytics</li>
                <li>Communications with our support team</li>
              </ul>
            </section>

            <section>
              <h2 className="font-title text-2xl text-critter-maroon mb-3">How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Provide and maintain our services</li>
                <li>Send transactional communications</li>
                <li>Improve our platform and develop new features</li>
                <li>Provide customer support</li>
              </ul>
            </section>

            <section>
              <h2 className="font-title text-2xl text-critter-maroon mb-3">Data Security</h2>
              <p>
                We use industry-standard encryption and security practices to protect your data. Your customer information is never shared with or sold to third parties.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl text-critter-maroon mb-3">Your Rights</h2>
              <p>
                You can export your data at any time. You can also request deletion of your account and associated data by contacting us at support@critter.pet.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl text-critter-maroon mb-3">Contact</h2>
              <p>
                For privacy-related questions, contact us at{" "}
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
