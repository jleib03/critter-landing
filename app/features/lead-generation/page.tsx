import FeaturePage from "@/app/components/marketing/FeaturePage";
import { Database, ClipboardList, Mail } from "lucide-react";

export const metadata = {
  title: "Lead Generation for Pet Care | Critter",
  description: "The client-at-first-contact toolkit. Tools, communications, and automation that attract, nurture, and convert top tier clients.",
};

export default function LeadGenerationPage() {
  return (
    <FeaturePage
      heroTitle="The client-at-first-contact toolkit"
      heroSubtitle="Tools, communications, and automation that surprise and delight your audience that convert 'if' to 'when'"
      sectionHeadline="Attract, nurture, and convert top tier clients"
      cards={[
        {
          tag: "Quantity",
          title: "Outbound lead gen that works",
          bullets: [
            "Automated referral programs",
            "Multi-channel lead capture",
            "Targeted outreach",
          ],
        },
        {
          tag: "Quality",
          title: "Qualify inbound leads",
          bullets: [
            "Automated pipeline management",
            "Form builder",
            "Meet & greet scheduler",
          ],
        },
        {
          tag: "Conversion",
          title: "Close new clients",
          bullets: [
            "Automated follow-up",
            "Targeted promotion",
            "Automated review requests",
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
