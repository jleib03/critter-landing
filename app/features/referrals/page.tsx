import FeaturePage from "@/app/components/marketing/FeaturePage";
import { Database, ClipboardList, Mail } from "lucide-react";

export const metadata = {
  title: "Referral Management for Pet Care | Critter",
  description: "Reward clients for referrals at scale. Empower clients with unique referral links and customized referral programs.",
};

export default function ReferralsPage() {
  return (
    <FeaturePage
      heroTitle="Reward clients for referrals at scale"
      heroSubtitle="Empower clients with unique referral links and customized referral programs that grow your business from within"
      sectionHeadline="Tap into your client networks with incentive based referral programs"
      cards={[
        {
          tag: "Personalization",
          title: "Design a program your clients love",
          bullets: [
            "Unique referral links",
            "Criteria-based enrollment",
            "Tailored rewards",
          ],
        },
        {
          tag: "Quantity",
          title: "Incentivize consistent outreach",
          bullets: [
            "Tiered rewards",
            "Automated reminders",
            "Versatile data input tools",
          ],
        },
        {
          tag: "Tracking",
          title: "Referrals at scale with ease",
          bullets: [
            "Referral tracking",
            "Reward tracking",
            "Reporting & analytics",
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
