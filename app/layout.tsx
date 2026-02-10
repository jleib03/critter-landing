import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Critter - Automation Engine for Growing Pet Care Businesses",
  description: "Turn insights into action with data-driven tools for CRM, marketing, and ongoing client engagement at scale. Email campaigns, SMS, AI-powered analytics, lead generation, and referral programs built for pet care.",
  keywords: [
    "pet care CRM",
    "pet business marketing",
    "dog walking software",
    "pet sitting management",
    "grooming business software",
    "pet care automation",
    "pet care lead generation",
    "pet business AI",
  ],
  authors: [{ name: "Critter" }],
  openGraph: {
    title: "Critter - Automation Engine for Growing Pet Care Businesses",
    description: "Turn insights into action with data-driven tools for CRM, marketing, and ongoing client engagement at scale.",
    url: "https://critter.pet",
    siteName: "Critter",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Critter - Automation Engine for Growing Pet Care Businesses",
    description: "Turn insights into action with data-driven tools for CRM, marketing, and ongoing client engagement at scale.",
  },
  icons: {
    icon: "/images/critter-favicon-circle.png",
    apple: "/images/critter-favicon-circle.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-body">
        {children}
      </body>
    </html>
  );
}
