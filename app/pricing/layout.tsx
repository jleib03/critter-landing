import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Plans for Every Stage of Growth | Critter",
  description:
    "Powerful automation tools that surface revenue opportunities on your behalf. Starter, Grow, Pro, and Enterprise plans starting at $49/mo with a 7-day free trial.",
  openGraph: {
    title: "Pricing - Plans for Every Stage of Growth | Critter",
    description:
      "Powerful automation tools that surface revenue opportunities on your behalf. Starter, Grow, Pro, and Enterprise plans starting at $49/mo.",
    url: "https://critter.pet/pricing",
  },
  twitter: {
    title: "Pricing - Plans for Every Stage of Growth | Critter",
    description:
      "Powerful automation tools that surface revenue opportunities on your behalf. Starter, Grow, Pro, and Enterprise plans starting at $49/mo.",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
