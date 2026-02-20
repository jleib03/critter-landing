import FeaturePage from "@/app/components/marketing/FeaturePage";
import ReferralDemo from "@/app/components/marketing/demos/ReferralDemo";
import { EmpowerClientsMockup, IncentivizeGrowthMockup, TrackReferralsMockup } from "@/app/components/marketing/demos/SectionMockups";
import { Link2, Gift, PieChart } from "lucide-react";

export const metadata = {
  title: "Referral Program for Pet Care | Critter",
  description:
    "Reward clients for referrals at scale. Empower clients with unique referral links and customized referral programs.",
  openGraph: {
    title: "Referral Program for Pet Care | Critter",
    description:
      "Reward clients for referrals at scale. Empower clients with unique referral links and customized referral programs.",
    url: "https://critter.pet/features/referrals",
  },
  twitter: {
    title: "Referral Program for Pet Care | Critter",
    description:
      "Reward clients for referrals at scale. Empower clients with unique referral links and customized referral programs.",
  },
};

export default function ReferralsPage() {
  return (
    <FeaturePage
      heroTitle="Reward clients for referrals at scale"
      heroSubtitle="Empower clients with unique referral links and customized referral programs that grow your business from within"
      heroDemo={<ReferralDemo />}
      sectionHeadline="Tap into your client networks with incentive based referral programs"
      cards={[
        {
          tag: "Personalization",
          title: "Design a program your clients love",
          icon: <Link2 className="h-6 w-6" />,
          bullets: [
            "Unique referral links",
            "Criteria-based enrollment",
            "Tailored rewards",
          ],
        },
        {
          tag: "Quantity",
          title: "Incentivize consistent outreach",
          icon: <Gift className="h-6 w-6" />,
          bullets: [
            "Tiered rewards",
            "Automated reminders",
            "Versatile data input tools",
          ],
        },
        {
          tag: "Tracking",
          title: "Referrals at scale with ease",
          icon: <PieChart className="h-6 w-6" />,
          bullets: [
            "Referral tracking",
            "Reward tracking",
            "Reporting & analytics",
          ],
        },
      ]}
      featureSections={[
        {
          title: "Empower your clients to grow your business",
          description: "Personalized links designed to capture referrals give your clients the tools to spread your reach within their communities, wherever and whenever new clients emerge.",
          layout: "image-left",
          icon: <Link2 className="h-6 w-6" />,
          imagePlaceholder: <EmpowerClientsMockup />,
        },
        {
          title: "Incentivize ongoing, consistent growth",
          description: "Build a rewards system that reflects your business' personality and the value placed on referrals, keeping it simple or designing tiers that reward clients more as the referrals pile up.",
          layout: "image-right",
          icon: <Gift className="h-6 w-6" />,
          imagePlaceholder: <IncentivizeGrowthMockup />,
        },
        {
          title: "Track & manage referrals with ease",
          description: "Automated capture, follow up, onboarding, and reward tracking make it simple to implement a referral program and manage it to success on an ongoing basis with low overhead cost and effort.",
          layout: "image-left",
          icon: <PieChart className="h-6 w-6" />,
          imagePlaceholder: <TrackReferralsMockup />,
        },
      ]}
    />
  );
}
