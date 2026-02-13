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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Critter",
  url: "https://critter.pet",
  logo: "https://critter.pet/images/critter-favicon-circle.png",
  description:
    "CRM and marketing automation platform built for pet care businesses.",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    email: "support@critter.pet",
    contactType: "customer support",
  },
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Critter",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://critter.pet",
  description:
    "Automation engine for growing pet care businesses. CRM, email and SMS marketing, AI analytics, lead generation, and referral programs.",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "49",
    highPrice: "349",
    priceCurrency: "USD",
    offerCount: 3,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
