import FeaturePage from "@/app/components/marketing/FeaturePage";
import CRMDemo from "@/app/components/marketing/demos/CRMDemo";
import { PersonalTouchMockup, AutomationMockup, DataInsightsMockup, MultiLocationMockup } from "@/app/components/marketing/demos/SectionMockups";
import { Heart, Zap, BarChart3, MapPin } from "lucide-react";

export const metadata = {
  title: "CRM for Pet Care Businesses | Critter",
  description:
    "Know every customer at every stage. Build deep, lasting, and profitable relationships with a CRM built for pet care businesses.",
  openGraph: {
    title: "CRM for Pet Care Businesses | Critter",
    description:
      "Know every customer at every stage. Build deep, lasting, and profitable relationships with a CRM built for pet care businesses.",
    url: "https://critter.pet/features/crm",
  },
  twitter: {
    title: "CRM for Pet Care Businesses | Critter",
    description:
      "Know every customer at every stage. Build deep, lasting, and profitable relationships with a CRM built for pet care businesses.",
  },
};

export default function CRMPage() {
  return (
    <FeaturePage
      heroTitle="Know every customer at every stage"
      heroSubtitle="From first contact across channels through the 100th booking and beyond, build a relationship with a personal touch, even as you scale."
      heroDemo={<CRMDemo />}
      sectionHeadline="Relationship building tools for a relationship driven business"
      cards={[
        {
          tag: "Personalization",
          title: "Build deep relationships",
          icon: <Heart className="h-6 w-6" />,
          bullets: [
            "Activity tracking & notification center",
            "Detailed client & pet profiles",
            "Automated segmentation",
          ],
        },
        {
          tag: "Retention",
          title: "Build long relationships",
          icon: <Zap className="h-6 w-6" />,
          bullets: [
            "Visual customer journey builder",
            "Task lists & team assignments",
            "Trigger based communications",
          ],
        },
        {
          tag: "Profitability",
          title: "Build rewarding relationships",
          icon: <BarChart3 className="h-6 w-6" />,
          bullets: [
            "Customer lifetime value tracking",
            "Reporting dashboards & scheduled exports (Pro)",
            "Customer-facing website chat widget (Pro)",
          ],
        },
      ]}
      featureSections={[
        {
          title: "Small business feel at big business scale",
          description: "Maintain personal touch and customer comfort, whether you're a solo operator or a team of 50+. Task lists, assignments, and a built-in notification center keep everyone accountable — so nothing falls through the cracks, even as you scale.",
          layout: "image-left",
          icon: <Heart className="h-6 w-6" />,
          imagePlaceholder: <PersonalTouchMockup />,
        },
        {
          title: "Design the journey, not just the rules",
          description: "See your entire customer lifecycle as a visual journey — from first contact to loyal regular. Build, edit, and iterate on your stages in a workspace built for clarity, with lifecycle rules and task-driven transitions working quietly in the background.",
          layout: "image-right",
          icon: <Zap className="h-6 w-6" />,
          imagePlaceholder: <AutomationMockup />,
        },
        {
          title: "Reporting dashboards built for operators",
          description: "Available on Pro — build custom dashboards, schedule recurring reports to your inbox, and export to CSV. Track LTV, funnel health, and campaign ROI in one place, without bolting on a separate BI tool.",
          layout: "image-left",
          icon: <BarChart3 className="h-6 w-6" />,
          imagePlaceholder: <DataInsightsMockup />,
        },
        {
          title: "Built to scale across locations",
          description: "Pro supports up to 2 locations with per-location team access and location-scoped campaigns, rules, and forms. Running a franchise or a multi-region operation? Our Enterprise plan unlocks unlimited locations with dedicated onboarding.",
          layout: "image-right",
          icon: <MapPin className="h-6 w-6" />,
          imagePlaceholder: <MultiLocationMockup />,
        },
      ]}
    />
  );
}
