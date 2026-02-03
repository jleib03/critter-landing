import FeaturePage from "@/app/components/marketing/FeaturePage";
import { Database, ClipboardList, Mail } from "lucide-react";

export const metadata = {
  title: "CRM for Pet Care Businesses | Critter",
  description: "Know every customer at every stage. Build deep, lasting, and profitable relationships with a CRM built for pet care businesses.",
};

export default function CRMPage() {
  return (
    <FeaturePage
      heroTitle="Know every customer at every stage"
      heroSubtitle="From first contact across channels through the 100th booking, build a relationship with a personal touch, even as you scale"
      sectionHeadline="Relationship building tools for a relationship driven business"
      cards={[
        {
          tag: "Personalization",
          title: "Build deep relationships",
          bullets: [
            "Activity tracking",
            "Detailed client & pet profiles",
            "Automated segmentation",
          ],
        },
        {
          tag: "Retention",
          title: "Build long relationships",
          bullets: [
            "Custom funnel",
            "Data-driven stage tracking",
            "Trigger based communications",
          ],
        },
        {
          tag: "Profitability",
          title: "Build profitable relationships",
          bullets: [
            "Customer lifetime value tracking",
            "Customer journey mapping",
            "Automated reporting & analytics",
          ],
        },
      ]}
      featureSections={[
        {
          title: "Small business feel at big business scale",
          description: "Maintain the personal touch that made your business special, even as you grow. Critter keeps you connected to every client with automated yet personalized communications.",
          layout: "image-left",
          icon: <Database className="h-6 w-6" />,
        },
        {
          title: "Deep automation & personalization",
          description: "Set up automated workflows that feel personal. From onboarding sequences to birthday messages, every touchpoint is tailored to each client and their pets.",
          layout: "image-right",
          icon: <ClipboardList className="h-6 w-6" />,
        },
        {
          title: "Leverage your data to save time (and pain)",
          description: "Let your data work for you. Critter analyzes client behavior, identifies trends, and surfaces actionable insights so you can make smarter decisions faster.",
          layout: "image-left",
          icon: <Mail className="h-6 w-6" />,
        },
      ]}
    />
  );
}
