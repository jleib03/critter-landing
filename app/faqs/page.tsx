"use client";

import { faqCategories, FAQItem } from "@/lib/marketing-faqs";
import { Button } from "@/app/components/ui/button";
import { Calendar } from "lucide-react";
import LandingNav from "@/app/components/marketing/LandingNav";
import LandingFooter from "@/app/components/marketing/LandingFooter";

function FAQAccordionItem({ question, answer }: FAQItem) {
  return (
    <details className="group bg-white border border-critter-cream rounded-lg hover:border-critter-orange transition-colors">
      <summary className="cursor-pointer p-4 font-subtitle text-critter-maroon focus-visible:outline-critter-orange">{question}</summary>
      <p className="px-4 pb-4 font-body text-critter-gray leading-relaxed">{answer}</p>
    </details>
  );
}

export default function FAQsPage() {
  const demoUrl =
    process.env.NEXT_PUBLIC_DEMO_URL ||
    "https://hub.critter.pet/forms/41/critter-demo-request-1773102085379";

  return (
    <div className="min-h-screen bg-critter-beige">
      <LandingNav />

      <div className="pt-28 pb-16">
        <div className="container mx-auto px-6 max-w-3xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-title text-3xl sm:text-4xl md:text-5xl text-critter-maroon mb-4">
              Frequently Asked Questions
            </h1>
            <p className="font-body text-lg text-critter-gray max-w-2xl mx-auto">
              Everything you need to know about Critter and how it can help grow
              your pet care business.
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-10">
            {faqCategories.map((category) => (
              <div key={category.title}>
                <h2 className="font-title text-2xl text-critter-maroon mb-4">
                  {category.title}
                </h2>
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <FAQAccordionItem
                      key={item.question}
                      question={item.question}
                      answer={item.answer}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-white rounded-2xl border-2 border-critter-orange p-6 sm:p-10 text-center">
            <h2 className="font-title text-2xl sm:text-3xl text-critter-maroon mb-3">
              Still have questions?
            </h2>
            <p className="font-body text-critter-gray mb-6 max-w-md mx-auto">
              Book a demo with our team and we&apos;ll walk you through
              everything Critter can do for your business.
            </p>
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-critter-orange hover:bg-critter-orange/90 text-white font-subtitle"
              >
                Schedule a Demo
                <Calendar className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      <LandingFooter />
    </div>
  );
}
