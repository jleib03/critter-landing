"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Calendar } from "lucide-react";
import LandingNav from "@/app/components/marketing/LandingNav";
import LandingFooter from "@/app/components/marketing/LandingFooter";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const faqCategories: FAQCategory[] = [
  {
    title: "General",
    items: [
      {
        question: "What is Critter?",
        answer:
          "Critter is a CRM and marketing automation platform built specifically for pet care businesses. It combines customer relationship management, email and SMS marketing, lead generation, referral programs, and AI-powered analytics into one tool designed for dog walkers, groomers, pet sitters, daycares, and other pet care professionals.",
      },
      {
        question: "Who is Critter designed for?",
        answer:
          "Critter is built for pet care businesses of all sizes — from solo dog walkers and groomers to multi-location pet care companies. If you manage client relationships and want to grow your pet care business with marketing automation, Critter is for you.",
      },
      {
        question: "How is Critter different from generic CRM or marketing tools?",
        answer:
          "Unlike generic platforms, Critter pulls in data from the pet care software you already use — like Time to Pet and Precise Petcare — so your customer and booking data flows in automatically. Every feature is designed around how pet care businesses actually work, from pet profiles and service-based segmentation to lifecycle communications tailored to your industry.",
      },
    ],
  },
  {
    title: "Getting Started",
    items: [
      {
        question: "How do I get started?",
        answer:
          "Sign up for a free 7-day trial — no credit card required. Once you create your account, you can connect your existing pet care software, import your customer data, and start sending campaigns right away.",
      },
      {
        question: "Do I need a credit card to start my free trial?",
        answer:
          "No. Your 7-day trial is completely free with no credit card required. You get access to email campaigns, customer segmentation, automations, lead generation tools, and 25 Togo AI chats to explore the platform.",
      },
      {
        question: "What happens when my trial ends?",
        answer:
          "When your trial ends, you can choose a paid plan to continue using Critter. All of your data, campaigns, and settings are preserved — nothing is lost. We send reminders before your trial expires so you have time to decide.",
      },
      {
        question: "How long does it take to set up?",
        answer:
          "Most businesses are set up and exploring within their first session. If you use Time to Pet or Precise Petcare, connecting your data is a one-click process. You can also import existing contacts via CSV. From there, you can start segmenting customers and sending campaigns immediately.",
      },
    ],
  },
  {
    title: "Features & Product",
    items: [
      {
        question: "What is Togo AI?",
        answer:
          "Togo is Critter's built-in AI assistant that knows your business inside and out. Ask Togo questions about revenue trends, client retention, campaign performance, or anything else — it analyzes your data in real time and surfaces actionable insights. Think of it as a smart business advisor that's always up to date.",
      },
      {
        question: "Can I send both email and SMS campaigns?",
        answer:
          "Yes. Email campaigns start on the Starter plan ($49/mo) with 1,000 emails per month. SMS messaging starts on the Grow plan ($149/mo) with 2,000 messages per month. The Grow plan also includes 25,000 emails and 200 Togo AI chats. The Pro plan ($349/mo) includes 75,000 emails, 10,000 SMS messages, and 500 Togo AI chats.",
      },
      {
        question: "What marketing automations are available?",
        answer:
          "Critter supports lifecycle automations like welcome sequences for new clients, birthday and anniversary messages, win-back campaigns for lapsed customers, review requests after visits, and more. You can also create custom automation triggers based on client behavior, booking activity, or segmentation changes.",
      },
      {
        question: "How does the referral program work?",
        answer:
          "Each of your clients gets a unique referral link they can share. When someone signs up through that link, both the referrer and the new client can receive rewards you define — like discounts or free services. Critter tracks every referral automatically so you always know who's driving new business.",
      },
      {
        question: "How does lead generation work?",
        answer:
          "Critter provides embeddable contact forms for your website, an online Meet & Greet scheduler, and referral links — all designed to capture new leads and funnel them into your CRM automatically. Every new inquiry gets tracked from first contact through conversion.",
      },
      {
        question: "What is customer lifecycle management?",
        answer:
          "Critter lets you define a custom funnel that maps your client journey — from new lead to loyal regular. Customers move through stages automatically based on their activity, and you can trigger communications and automations at each stage to keep them engaged.",
      },
    ],
  },
  {
    title: "Connectors & Data",
    items: [
      {
        question: "What software does Critter sync data from?",
        answer:
          "Critter syncs data from Time to Pet and Precise Petcare, with more connectors coming soon. These connections sync your customer, pet, and booking data automatically so everything stays up to date without manual entry.",
      },
      {
        question: "Can I import my existing customer data?",
        answer:
          "Yes. You can import contacts via CSV upload in addition to connecting your pet care software. Critter automatically deduplicates records so you won't end up with duplicate customer profiles.",
      },
      {
        question: "Does Critter connect with my website?",
        answer:
          "Yes. You can embed Critter's lead capture forms and Meet & Greet scheduler directly on your website. Critter also provides unique referral links for each client that work anywhere — on your site, social media, or in emails.",
      },
      {
        question: "Is my data secure?",
        answer:
          "Yes. Critter uses industry-standard encryption and security practices to protect your data. Your customer information is never shared with third parties, and you can export your data at any time.",
      },
    ],
  },
  {
    title: "Pricing & Billing",
    items: [
      {
        question: "How much does Critter cost?",
        answer:
          "Critter offers three paid plans: Starter at $49/month for email marketing essentials, Grow at $149/month for full-featured CRM, marketing, SMS, and lead generation tools, and Pro at $349/month for maximum power with expanded limits and priority support. All plans include a 7-day free trial.",
      },
      {
        question: "What's the difference between the plans?",
        answer:
          "Starter ($49/mo) includes 1,000 emails, customer segmentation, automations, and data connectors. Grow ($149/mo) adds 25,000 emails, 2,000 SMS messages, 200 Togo AI chats, and lead generation tools. Pro ($349/mo) includes 75,000 emails, 10,000 SMS messages, 500 Togo AI chats, advanced automations, and priority support.",
      },
      {
        question: "Do you offer enterprise pricing?",
        answer:
          "Yes. If your business has needs beyond our Pro plan, reach out to our team for custom enterprise pricing tailored to your scale and requirements.",
      },
      {
        question: "Can I change my plan later?",
        answer:
          "Yes. You can upgrade or downgrade at any time. Upgrades take effect immediately, and downgrades apply at your next billing cycle.",
      },
      {
        question: "What if I exceed my SMS quota?",
        answer:
          "When you reach 80% of your monthly SMS quota, Critter notifies you. You can purchase additional SMS bundles at $20 per 1,000 messages anytime from your account settings.",
      },
      {
        question: "Do you offer refunds?",
        answer:
          "Yes. If you're not satisfied within the first 30 days, we'll refund your payment — no questions asked.",
      },
    ],
  },
];

function FAQAccordionItem({ question, answer }: FAQItem) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="bg-white border border-critter-cream rounded-lg cursor-pointer hover:border-critter-orange transition-colors"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center p-4">
        <h3 className="font-subtitle text-critter-maroon pr-4">{question}</h3>
        <span className="text-xl text-critter-orange flex-shrink-0">
          {isOpen ? "\u2212" : "+"}
        </span>
      </div>
      {isOpen && (
        <div className="px-4 pb-4">
          <p className="font-body text-critter-gray leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQsPage() {
  const demoUrl =
    process.env.NEXT_PUBLIC_DEMO_URL ||
    "https://calendly.com/jordy-johm/critter-crm-demo";

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
