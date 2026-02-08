import FeaturePage from "@/app/components/marketing/FeaturePage";
import { ConnectDataMockup } from "@/app/components/marketing/demos/SectionMockups";
import { Database, RefreshCw, Shield } from "lucide-react";

export const metadata = {
  title: "Data Integration for Pet Care | Critter",
  description: "Connect your pet care software to Critter in one click. Sync customer, pet, and booking data automatically from Time to Pet, Precise Petcare, and more.",
};

export default function DataIntegrationPage() {
  return (
    <FeaturePage
      heroTitle="Connect your data, unlock your potential"
      heroSubtitle="Out-of-the-box connectors for leading pet care software bring your customer, pet, and booking data into one place automatically."
      heroDemo={
        <div className="bg-white rounded-2xl shadow-lg border border-critter-cream p-6">
          <ConnectDataMockup />
        </div>
      }
      sectionHeadline="Your operational data, powering your growth engine"
      cards={[
        {
          tag: "Connectors",
          title: "One-click data sync",
          icon: <Database className="h-6 w-6" />,
          bullets: [
            "Time to Pet connector",
            "Precise Petcare connector",
            "CSV import support",
          ],
        },
        {
          tag: "Automation",
          title: "Always in sync",
          icon: <RefreshCw className="h-6 w-6" />,
          bullets: [
            "Automatic data sync",
            "Auto-deduplication",
            "Zero manual entry",
          ],
        },
        {
          tag: "Reliability",
          title: "Data you can trust",
          icon: <Shield className="h-6 w-6" />,
          bullets: [
            "Industry-standard encryption",
            "No third-party data sharing",
            "Export your data anytime",
          ],
        },
      ]}
      featureSections={[
        {
          title: "Plug in your existing tools",
          description: "Critter connects directly to the pet care software you already use. Your customer, pet, and booking data flows in automatically so everything stays up to date without manual entry.",
          layout: "image-left",
          icon: <Database className="h-6 w-6" />,
        },
        {
          title: "Clean, deduplicated records",
          description: "Import from multiple sources without worrying about duplicates. Critter automatically deduplicates records and merges profiles so you have one clean view of every customer.",
          layout: "image-right",
          icon: <RefreshCw className="h-6 w-6" />,
        },
        {
          title: "Secure and private by default",
          description: "Your data is protected with industry-standard encryption and security practices. Customer information is never shared with third parties, and you can export your data at any time.",
          layout: "image-left",
          icon: <Shield className="h-6 w-6" />,
        },
      ]}
    />
  );
}
