import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join a live demo | Critter",
  description:
    "See how Critter helps pet care businesses retain customers and grow revenue — a free 45-minute live demo on Zoom every Tuesday and Thursday.",
  alternates: { canonical: "https://critter.pet/demo" },
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
