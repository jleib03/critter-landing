import FeaturePage from "@/app/components/marketing/FeaturePage";
import { ConnectDataMockup } from "@/app/components/marketing/demos/SectionMockups";
import { Heart, GitBranch, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Schedule & Operations for Pet Care | Critter",
  description:
    "Fully integrated booking and communications. From marketing and lead generation through service delivery, unite your tools under one roof.",
  openGraph: {
    title: "Schedule & Operations for Pet Care | Critter",
    description:
      "Fully integrated booking and communications. From marketing and lead generation through service delivery, unite your tools under one roof.",
    url: "https://critter.pet/features/scheduling",
  },
  twitter: {
    title: "Schedule & Operations for Pet Care | Critter",
    description:
      "Fully integrated booking and communications. From marketing and lead generation through service delivery, unite your tools under one roof.",
  },
};

export default function SchedulingPage() {
  return (
    <FeaturePage
      heroTitle="Fully integrated booking & communications"
      heroSubtitle="From marketing and lead generation through service delivery, unite your tools under one roof."
      heroDemo={
        <div className="bg-white rounded-2xl shadow-lg border border-critter-cream p-6">
          <ConnectDataMockup />
        </div>
      }
      sectionHeadline="Operational tools..."
      cards={[
        {
          tag: "Personalization",
          title: "Build deep relationships",
          icon: <Heart className="h-6 w-6" />,
          bullets: [
            "Activity tracking",
            "Detailed client & pet profiles",
            "Automated segmentation",
          ],
        },
        {
          tag: "Retention",
          title: "Build long relationships",
          icon: <GitBranch className="h-6 w-6" />,
          bullets: [
            "Custom funnel",
            "Data-driven stage tracking",
            "Trigger based communications",
          ],
        },
        {
          tag: "Profitability",
          title: "Build profitable relationships",
          icon: <TrendingUp className="h-6 w-6" />,
          bullets: [
            "Customer lifetime value tracking",
            "Customer journey mapping",
            "Automated reporting & analytics",
          ],
        },
      ]}
      featureSections={[
        {
          title: "Connect your data",
          description: "The only CRM & marketing tool integrating your booking and operational data with marketing and growth performance out of the box. Eliminate manual work and duplicate entry to keep data in sync.",
          layout: "image-left",
          icon: <Heart className="h-6 w-6" />,
        },
        {
          title: "Capture leads",
          description: "Streamline the customer relationship from first contact, bringing new leads into your system with forms that embed in your website, a Meet & Greet scheduler, and unique referral links per client.",
          layout: "image-right",
          icon: <GitBranch className="h-6 w-6" />,
        },
        {
          title: "Engage your clients",
          description: "Surprise and delight your customers with tailored communications, rewards, and promotions based on their activity with you. Maintain the same level of personal touch with clients as when it was just you.",
          layout: "image-left",
          icon: <TrendingUp className="h-6 w-6" />,
        },
      ]}
    />
  );
}
