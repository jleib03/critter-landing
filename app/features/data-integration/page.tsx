import FeaturePage from "@/app/components/marketing/FeaturePage";
import { ConnectDataMockup } from "@/app/components/marketing/demos/SectionMockups";
import { ConnectDisconnectedMockup, AutomateInsightsMockup, OutOfBoxKPIsMockup } from "@/app/components/marketing/demos/SectionMockups";
import { Database, Layers, BarChart3 } from "lucide-react";

export const metadata = {
  title: "Data Integration for Pet Care | Critter",
  description:
    "Connect Time To Pet or Precise Pet Care to explore your clients, services, and opportunities in Critter.",
  openGraph: {
    title: "Data Integration for Pet Care | Critter",
    description:
      "Connect Time To Pet or Precise Pet Care to explore your clients, services, and opportunities in Critter.",
    url: "https://critter.pet/features/data-integration",
  },
  twitter: {
    title: "Data Integration for Pet Care | Critter",
    description:
      "Connect Time To Pet or Precise Pet Care to explore your clients, services, and opportunities in Critter.",
  },
};

export default function DataIntegrationPage() {
  return (
    <FeaturePage
      relatedLink={{ href: "/ttp", label: "Explore Time To Pet + Critter" }}
      heroTitle="Bring your booking data into the bigger picture"
      heroSubtitle="Connect the pet care tools you already use to understand clients, services, and opportunities in Critter."
      heroDemo={
        <div className="bg-white rounded-2xl shadow-lg border border-critter-cream p-6">
          <ConnectDataMockup />
        </div>
      }
      sectionHeadline="Connected data, clearer next steps"
      cards={[
        {
          tag: "Integration",
          title: "Connect the tools you use",
          icon: <Database className="h-6 w-6" />,
          bullets: [
            "Time To Pet",
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
            "Togo answers grounded in your connected data",
            "Automated reporting & analytics",
            "ROI & performance tracking",
          ],
        },
      ]}
      featureSections={[
        {
          title: "Connect the disconnected",
          description: "Bring customer and booking records together for a clearer view of your business. Use Time To Pet? Our guided setup helps you connect, review your snapshot, and decide what to do next.",
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
          description: "From ROI tracking to marketing performance and customer lifetime value, Critter calculates key metrics every business should know so you avoid manual work and time rebuilding spreadsheets.",
          layout: "image-left",
          icon: <BarChart3 className="h-6 w-6" />,
          imagePlaceholder: <OutOfBoxKPIsMockup />,
        },
      ]}
    />
  );
}
