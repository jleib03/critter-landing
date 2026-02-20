import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs - Frequently Asked Questions | Critter",
  description:
    "Get answers to common questions about Critter's pet care CRM, marketing automation, pricing, integrations, and data security.",
  openGraph: {
    title: "FAQs - Frequently Asked Questions | Critter",
    description:
      "Get answers to common questions about Critter's pet care CRM, marketing automation, pricing, integrations, and data security.",
    url: "https://critter.pet/faqs",
  },
  twitter: {
    title: "FAQs - Frequently Asked Questions | Critter",
    description:
      "Get answers to common questions about Critter's pet care CRM, marketing automation, pricing, integrations, and data security.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Critter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Critter is a CRM and marketing automation platform built specifically for pet care businesses. It combines customer relationship management, email and SMS marketing, lead generation, referral programs, and AI-powered analytics into one tool designed for dog walkers, groomers, pet sitters, daycares, and other pet care professionals.",
      },
    },
    {
      "@type": "Question",
      name: "Who is Critter designed for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Critter is built for pet care businesses of all sizes — from solo dog walkers and groomers to multi-location pet care companies.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Critter cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Critter offers three paid plans: Starter at $49/month, Grow at $149/month, and Pro at $349/month. All plans include a 7-day free trial.",
      },
    },
    {
      "@type": "Question",
      name: "What is Togo AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Togo is Critter's built-in AI assistant that knows your business inside and out. Ask Togo questions about revenue trends, client retention, campaign performance, or anything else — it analyzes your data in real time and surfaces actionable insights.",
      },
    },
    {
      "@type": "Question",
      name: "Can I send both email and SMS campaigns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Email campaigns start on the Starter plan ($49/mo) with 1,000 emails per month. SMS messaging starts on the Grow plan ($149/mo) with 2,000 messages per month.",
      },
    },
    {
      "@type": "Question",
      name: "What software does Critter sync data from?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Critter syncs data from Time to Pet and Precise Petcare, with more connectors coming soon.",
      },
    },
    {
      "@type": "Question",
      name: "Is my data secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Critter uses industry-standard encryption and security practices to protect your data. Your customer information is never shared with third parties.",
      },
    },
  ],
};

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
