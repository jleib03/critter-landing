import FeaturePage from "@/app/components/marketing/FeaturePage";
import LeadGenDemo from "@/app/components/marketing/demos/LeadGenDemo";
import { ClipboardList, Shield, Bell } from "lucide-react";

export const metadata = {
  title: "Lead Generation for Pet Care | Critter",
  description: "The client-at-first-contact toolkit. Tools, communications, and automation that attract, nurture, and convert top tier clients.",
};

export default function LeadGenerationPage() {
  return (
    <FeaturePage
      heroTitle="The client-at-first-contact toolkit"
      heroSubtitle="Tools, communications, and automation that surprise and delight your audience to cover 'if' to 'when'."
      heroDemo={<LeadGenDemo />}
      sectionHeadline="Attract, nurture, and convert top tier clients"
      cards={[
        {
          tag: "Quantity",
          title: "Outbound lead gen that works",
          icon: <ClipboardList className="h-6 w-6" />,
          bullets: [
            "Automated referral programs",
            "Multi-channel lead capture",
            "Targeted outreach",
          ],
        },
        {
          tag: "Quality",
          title: "Qualify inbound leads",
          icon: <Shield className="h-6 w-6" />,
          bullets: [
            "Automated pipeline management",
            "Form builder",
            "Meet & greet scheduler",
          ],
        },
        {
          tag: "Conversion",
          title: "Close new clients",
          icon: <Bell className="h-6 w-6" />,
          bullets: [
            "Automated follow-up",
            "Targeted promotion",
            "Automated review requests",
          ],
        },
      ]}
      featureSections={[
        {
          title: "Build & manage inbound lead flow",
          description: "Tap your network and your presence, embedding tools across web, social, and within your client base to capture more leads where they're at.",
          layout: "image-left",
          icon: <ClipboardList className="h-6 w-6" />,
        },
        {
          title: "Vet leads to ensure fit",
          description: "Pre-screen clients for requirements & criteria with flexible tools designed to capture the right details at the right time to qualify leads, letting you invest time and money where conversion is most likely.",
          layout: "image-right",
          icon: <Shield className="h-6 w-6" />,
        },
        {
          title: "Never lose a lead again",
          description: "Stay on top of potential new clients with automated workflows and communications that wow with fast, professional, and personalized follow up that puts your best foot forward every time.",
          layout: "image-left",
          icon: <Bell className="h-6 w-6" />,
        },
      ]}
    />
  );
}
