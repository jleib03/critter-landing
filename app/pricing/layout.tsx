import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Plans for Every Stage of Growth | Critter",
  description:
    "Powerful automation tools that surface revenue opportunities on your behalf. Starter, Grow, and Pro plans starting at $49/mo with a 7-day free trial.",
  openGraph: {
    title: "Pricing - Plans for Every Stage of Growth | Critter",
    description:
      "Powerful automation tools that surface revenue opportunities on your behalf. Starter, Grow, and Pro plans starting at $49/mo.",
    url: "https://critter.pet/pricing",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
