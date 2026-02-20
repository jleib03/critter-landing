import FeaturePage from "@/app/components/marketing/FeaturePage";
import { ConnectDataMockup } from "@/app/components/marketing/demos/SectionMockups";
import { ConnectDisconnectedMockup, AutomateInsightsMockup, OutOfBoxKPIsMockup } from "@/app/components/marketing/demos/SectionMockups";
import { Database, Layers, BarChart3 } from "lucide-react";

export const metadata = {
  title: "Data Integration for Pet Care | Critter",
  description:
    "Finally tap into the rich dataset your business generates. Industry leading data connectors for Time to Pet, Precise Petcare, and more.",
  openGraph: {
    title: "Data Integration for Pet Care | Critter",
    description:
      "Finally tap into the rich dataset your business generates. Industry leading data connectors for Time to Pet, Precise Petcare, and more.",
    url: "https://critter.pet/features/data-integration",
  },
  twitter: {
    title: "Data Integration for Pet Care | Critter",
    description:
      "Finally tap into the rich dataset your business generates. Industry leading data connectors for Time to Pet, Precise Petcare, and more.",
  },
};

export default function DataIntegrationPage() {
  return (
    <FeaturePage
      heroTitle="The access to your data you've always deserved"
      heroSubtitle="Finally tap into the rich dataset your business generates that's been blocked behind your booking software's ancient tech."
      heroDemo={
        <div className="bg-white rounded-2xl shadow-lg border border-critter-cream p-6">
          <ConnectDataMockup />
        </div>
      }
      sectionHeadline="Your data, unleashed & synced across systems, no manual or duplicate effort required"
      cards={[
        {
          tag: "Integration",
          title: "Industry leading data connectors",
          icon: <Database className="h-6 w-6" />,
          bullets: [
            "Time to Pet",
            "Precise Pet Care",
            "Google / Apple Calendar",
          ],
        },
        {
          tag: "Flexibility",
          title: "Custom imports expand context",
          icon: <Layers className="h-6 w-6" />,
          bullets: [
            "Flexible data loading",
            "System/tool agnostic",
            "Templates & accelerators",
          ],
        },
        {
          tag: "Utility",
          title: "Put your data to work",
          icon: <BarChart3 className="h-6 w-6" />,
          bullets: [
            "AI agent trained on your data",
            "Automated reporting & analytics",
            "ROI & performance tracking",
          ],
        },
      ]}
      featureSections={[
        {
          title: "Connect the disconnected",
          description: "Pet industry tools have a history of limiting access to data and making robust reporting and analytics difficult. Our connectors unite datasets, make the data accessible, and deliver key insights.",
          layout: "image-left",
          icon: <Database className="h-6 w-6" />,
          imagePlaceholder: <ConnectDisconnectedMockup />,
        },
        {
          title: "Automate insights in your inbox",
          description: "Ask questions to understand your business, then set reports to be delivered on a regular cadence to your inbox with key insights highlighted and actionable.",
          layout: "image-right",
          icon: <Layers className="h-6 w-6" />,
          imagePlaceholder: <AutomateInsightsMockup />,
        },
        {
          title: "Out of the box KPIs",
          description: "From ROI tracking to marketing performance and customer lifetime value, Critter calculates key metrics every business should know so you avoid manual work and hours slaving over spreadsheets.",
          layout: "image-left",
          icon: <BarChart3 className="h-6 w-6" />,
          imagePlaceholder: <OutOfBoxKPIsMockup />,
        },
      ]}
    />
  );
}
