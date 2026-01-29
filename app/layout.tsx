import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Critter - CRM & Marketing Automation for Pet Care Businesses",
  description: "Critter helps pet sitters, dog walkers, groomers, and pet care businesses grow with powerful CRM, automated marketing campaigns, and AI-powered insights.",
  keywords: [
    "pet care CRM",
    "pet business marketing",
    "dog walking software",
    "pet sitting management",
    "grooming business software",
    "pet care automation",
  ],
  authors: [{ name: "Critter" }],
  openGraph: {
    title: "Critter - CRM & Marketing Automation for Pet Care Businesses",
    description: "Grow your pet care business with automated marketing, customer management, and AI-powered insights.",
    url: "https://critter.pet",
    siteName: "Critter",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Critter - CRM & Marketing Automation for Pet Care Businesses",
    description: "Grow your pet care business with automated marketing, customer management, and AI-powered insights.",
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
