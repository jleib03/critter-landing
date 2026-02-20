import type { Metadata } from "next";
import LandingPage from "@/app/components/marketing/LandingPage";

export const metadata: Metadata = {
  title: "Critter - Automation Engine for Growing Pet Care Businesses",
  description:
    "Turn insights into action with data-driven tools for CRM, marketing, and ongoing client engagement at scale. Email campaigns, SMS, AI-powered analytics, lead generation, and referral programs built for pet care.",
  openGraph: {
    title: "Critter - Automation Engine for Growing Pet Care Businesses",
    description:
      "Turn insights into action with data-driven tools for CRM, marketing, and ongoing client engagement at scale.",
    url: "https://critter.pet",
  },
  twitter: {
    title: "Critter - Automation Engine for Growing Pet Care Businesses",
    description:
      "Turn insights into action with data-driven tools for CRM, marketing, and ongoing client engagement at scale.",
  },
};

export default function Home() {
  return <LandingPage />;
}
