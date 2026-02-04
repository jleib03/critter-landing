import FeaturePage from "@/app/components/marketing/FeaturePage";
import MarketingDemo from "@/app/components/marketing/demos/MarketingDemo";
import { Database, ClipboardList, Mail, TrendingUp, Zap, Clock } from "lucide-react";

export const metadata = {
  title: "Marketing Automation for Pet Care | Critter",
  description: "Set-it-and-forget-it marketing tailored to your pet care business. Drive higher ROI with data-driven automation tools.",
};

export default function MarketingPage() {
  return (
    <FeaturePage
      heroTitle="Set-it-and-forget-it marketing tailored to you"
      heroSubtitle="Drive higher ROI on both time and spend, engaging both existing clients and new audiences with data driven automation tools"
      heroDemo={<MarketingDemo />}
      sectionHeadline="A marketing sidekick analyzing your data and actively driving growth on your behalf"
      cards={[
        {
          tag: "Conversion",
          title: "Messaging that wins",
          icon: <TrendingUp className="h-6 w-6" />,
          bullets: [
            "Automated audience builder",
            "Multi-channel marketing",
            "Performance & ROI tracking",
          ],
        },
        {
          tag: "Upsell",
          title: "Tap into your existing client base",
          icon: <Zap className="h-6 w-6" />,
          bullets: [
            "Upsell & cross-sell programs",
            "Win-back reengagement",
            "Criteria-based promotion",
          ],
        },
        {
          tag: "Efficiency",
          title: "Streamlined operations",
          icon: <Clock className="h-6 w-6" />,
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
          icon: <Database className="h-6 w-6" />,
        },
        {
          title: "Unlock untapped revenue",
          description: "Data-driven automation around upsell, cross-sell, and more push customer lifetime value higher by engaging your existing clients to reduce churn, increase spend, and expand service usage.",
          layout: "image-right",
          icon: <ClipboardList className="h-6 w-6" />,
        },
        {
          title: "Engage like you've got a whole team",
          description: "With easy, criteria-based rules that drive ongoing outreach every time your data syncs, run highly targeted marketing and growth tactics that work together to tackle all of your goals, all at once.",
          layout: "image-left",
          icon: <Mail className="h-6 w-6" />,
        },
      ]}
    />
  );
}
