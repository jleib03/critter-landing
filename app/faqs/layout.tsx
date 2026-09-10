import { Metadata } from "next";
import { faqCategories } from "@/lib/marketing-faqs";

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
  mainEntity: faqCategories.flatMap(category => category.items.map(item => ({
    "@type": "Question", name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  }))),
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
