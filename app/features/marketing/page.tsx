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
          title: "Optimize for messaging that wins",
          icon: <TrendingUp className="h-6 w-6" />,
          bullets: [
            "Automated audience builder",
            "Multi-channel marketing",
            "Performance & ROI tracking",
          ],
        },
        {
          tag: "Upsell",
          title: "Optimize for profitability from within",
          icon: <Zap className="h-6 w-6" />,
          bullets: [
            "Upsell & cross-sell programs",
            "Win-back reengagement",
            "Criteria-based promotion",
          ],
        },
        {
          tag: "Efficiency",
          title: "Optimize for time & capacity",
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
          title: "Connect your data",
          description: "The only CRM & marketing tool integrating your booking and operational data with marketing and growth performance out of the box. Eliminate manual work and duplicate entry to keep data in sync.",
          layout: "image-left",
          icon: <Database className="h-6 w-6" />,
        },
        {
          title: "Capture leads",
          description: "Streamline the customer relationship from first contact, bringing new leads into your system with forms that embed in your website, a Meet & Greet scheduler, and unique referral links per client.",
          layout: "image-right",
          icon: <ClipboardList className="h-6 w-6" />,
        },
        {
          title: "Engage your clients",
          description: "Surprise and delight your customers with tailored communications, rewards, and promotions based on their activity with you. Maintain the same level of personal touch with clients as when it was just you.",
          layout: "image-left",
          icon: <Mail className="h-6 w-6" />,
        },
      ]}
    />
  );
}
