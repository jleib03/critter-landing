import FeaturePage from "@/app/components/marketing/FeaturePage";
import MarketingDemo from "@/app/components/marketing/demos/MarketingDemo";
import { ConvertClientsMockup, UnlockRevenueMockup, EngageTeamMockup } from "@/app/components/marketing/demos/SectionMockups";
import { Target, DollarSign, Users } from "lucide-react";

export const metadata = {
  title: "Marketing Automation for Pet Care | Critter",
  description:
    "Thoughtful follow-ups for pet care businesses. Review your audience, copy, and timing, then use connected data to guide your marketing.",
  openGraph: {
    title: "Marketing Automation for Pet Care | Critter",
    description:
      "Thoughtful follow-ups for pet care businesses. Review your audience, copy, and timing, then use connected data to guide your marketing.",
    url: "https://critter.pet/features/marketing",
  },
  twitter: {
    title: "Marketing Automation for Pet Care | Critter",
    description:
      "Thoughtful follow-ups for pet care businesses. Review your audience, copy, and timing, then use connected data to guide your marketing.",
  },
};

export default function MarketingPage() {
  return (
    <FeaturePage
      heroTitle="Thoughtful follow-ups, less manual work"
      heroSubtitle="Use your connected data to reach the right clients. Review your audience, copy, and timing before activating a program."
      heroDemo={<MarketingDemo />}
      sectionHeadline="A clearer path from customer insight to a useful follow-up"
      cards={[
        {
          tag: "Conversion",
          title: "Messaging that wins",
          icon: <Target className="h-6 w-6" />,
          bullets: [
            "Automated audience builder",
            "Multi-channel marketing",
            "Performance & ROI tracking",
          ],
        },
        {
          tag: "Upsell",
          title: "Tap into your client base",
          icon: <DollarSign className="h-6 w-6" />,
          bullets: [
            "Upsell & cross-sell programs",
            "Win-back reengagement",
            "Criteria-based promotion",
          ],
        },
        {
          tag: "Efficiency",
          title: "Streamlined operations",
          icon: <Users className="h-6 w-6" />,
          bullets: [
            "Pet industry specific templates",
            "Campaign auto enrollment",
            "Industry leading data integrations",
          ],
        },
      ]}
      featureSections={[
        {
          title: "Convert more clients",
          description: "Critter's automated tagging on both human and pet clients means there's more information and context about your base than ever before. Building a target audience & tailoring a message has never been easier.",
          layout: "image-left",
          icon: <Target className="h-6 w-6" />,
          imagePlaceholder: <ConvertClientsMockup />,
        },
        {
          title: "Unlock untapped revenue",
          description: "Data-driven automation around upsell, cross-sell, and more push customer lifetime value higher by engaging your existing clients to reduce churn, increase spend, and expand service usage.",
          layout: "image-right",
          icon: <DollarSign className="h-6 w-6" />,
          imagePlaceholder: <UnlockRevenueMockup />,
        },
        {
          title: "Engage like you've got a whole team",
          description: "Choose criteria that match your goals, review the message, and decide when your outreach should run. Your setup stays yours to tailor.",
          layout: "image-left",
          icon: <Users className="h-6 w-6" />,
          imagePlaceholder: <EngageTeamMockup />,
        },
      ]}
    />
  );
}
