import FeaturePage from "@/app/components/marketing/FeaturePage";
import CRMDemo from "@/app/components/marketing/demos/CRMDemo";
import { PersonalTouchMockup, AutomationMockup, DataInsightsMockup } from "@/app/components/marketing/demos/SectionMockups";
import { Database, ClipboardList, Mail, Users, Heart, TrendingUp } from "lucide-react";

export const metadata = {
  title: "CRM for Pet Care Businesses | Critter",
  description: "Know every customer at every stage. Build deep, lasting, and profitable relationships with a CRM built for pet care businesses.",
};

export default function CRMPage() {
  return (
    <FeaturePage
      heroTitle="Know every customer at every stage"
      heroSubtitle="From first contact across channels through the 100th booking, build a relationship with a personal touch, even as you scale"
      heroDemo={<CRMDemo />}
      sectionHeadline="Relationship building tools for a relationship driven business"
      cards={[
        {
          tag: "Personalization",
          title: "Build deep relationships",
          icon: <Users className="h-6 w-6" />,
          bullets: [
            "Activity tracking",
            "Detailed client & pet profiles",
            "Automated segmentation",
          ],
        },
        {
          tag: "Retention",
          title: "Build long relationships",
          icon: <Heart className="h-6 w-6" />,
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
          title: "Small business feel at big business scale",
          description: "Maintain personal touch and customer comfort, whether you're a solo operator or a team of 50+. Never lose track of a client again, scaling your capacity to stay in tune with what's happening on the ground.",
          layout: "image-left",
          icon: <Database className="h-6 w-6" />,
          imagePlaceholder: <PersonalTouchMockup />,
        },
        {
          title: "Deep automation & personalization",
          description: "Build a funnel and tailor it to your business, then design rules that keep your hands out of the day-to-day while still delivering personalized communications at every stage.",
          layout: "image-right",
          icon: <ClipboardList className="h-6 w-6" />,
          imagePlaceholder: <AutomationMockup />,
        },
        {
          title: "Leverage your data to save time (and pain)",
          description: "Let your data work for you. Critter analyzes client behavior, identifies trends, and surfaces actionable insights so you can make smarter decisions faster.",
          layout: "image-left",
          icon: <Mail className="h-6 w-6" />,
          imagePlaceholder: <DataInsightsMockup />,
        },
      ]}
    />
  );
}
