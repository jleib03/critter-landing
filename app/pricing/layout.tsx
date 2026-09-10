import { Metadata } from "next";
import { CRM_OFFERS } from "@/lib/marketing-offers";

export const metadata: Metadata = {
  title: "Pricing - Plans for Every Stage of Growth | Critter",
  description:
    `CRM plans from ${CRM_OFFERS.starter.monthlyUsd} USD/month. Starter includes ${CRM_OFFERS.starter.emails.toLocaleString("en-US")} base emails, owner-only access, and no SMS. New CRM businesses get a 7-day Critter trial.`,
  openGraph: {
    title: "Pricing - Plans for Every Stage of Growth | Critter",
    description:
      `CRM plans from ${CRM_OFFERS.starter.monthlyUsd} USD/month. Starter includes ${CRM_OFFERS.starter.emails.toLocaleString("en-US")} base emails, owner-only access, and no SMS. New CRM businesses get a 7-day Critter trial.`,
    url: "https://critter.pet/pricing",
  },
  twitter: {
    title: "Pricing - Plans for Every Stage of Growth | Critter",
    description:
      `CRM plans from ${CRM_OFFERS.starter.monthlyUsd} USD/month. Starter includes ${CRM_OFFERS.starter.emails.toLocaleString("en-US")} base emails, owner-only access, and no SMS. New CRM businesses get a 7-day Critter trial.`,
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
