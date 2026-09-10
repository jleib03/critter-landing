import { CRM_OFFERS, TTP_INSIGHTS_COPY, formatAllowance } from "./marketing-offers";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
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
          "Unlike generic platforms, Critter pulls in data from the pet care software you already use — like Time To Pet and Precise Pet Care — so your customer and booking data flows in automatically. Every feature is designed around how pet care businesses actually work, from pet profiles and service-based segmentation to lifecycle communications tailored to your industry.",
      },
    ],
  },
  {
    title: "Getting Started",
    items: [
      {
        question: "How do I get started?",
        answer: "Sign up for a 7-day Critter trial — no credit card required. Connect your pet care software or import a CSV, explore your business snapshot, then review the journey, rules, and drafted follow-ups before turning anything on.",
      },
      {
        question: "Do I need a credit card to start my free trial?",
        answer: "No. New CRM businesses start with a 7-day Critter trial, with no credit card required. Explore your connected data, customer journey, email tools, lead generation, and Togo. SMS is not included during the trial.",
      },
      {
        question: "What happens when my trial ends?",
        answer: TTP_INSIGHTS_COPY,
      },
      {
        question: "How long does it take to set up?",
        answer: "Setup guides you through your business details and data connection. Import time depends on the amount of data and your provider. You can take a high-level product introduction while data loads, then review your own snapshot and setup when it is ready.",
      },
    ],
  },
  {
    title: "Features & Product",
    items: [
      {
        question: "What is Togo AI?",
        answer: "Togo is Critter's AI assistant. Ask about client retention, service mix, or revenue trends using your connected data, or get help drafting a follow-up. Togo helps explain the findings and your options; you review proposed changes and copy before acting.",
      },
      {
        question: "Can I send both email and SMS campaigns?",
        answer: `Email starts on Starter at $${CRM_OFFERS.starter.monthlyUsd} USD/month with ${formatAllowance(CRM_OFFERS.starter.emails)} base emails per month. SMS starts on Grow, with ${formatAllowance(CRM_OFFERS.grow.smsSegments)} segments per month, and requires registration and customer consent. An SMS can use more than one segment. Starter and the trial do not include texting.`,
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
        answer: "Critter connects with Time To Pet and Precise Pet Care. Available records and sync timing depend on the connector. CSV import is also available.",
      },
      {
        question: "Can I import my existing customer data?",
        answer: "Yes. You can import contacts by CSV or connect supported pet care software. Critter uses matching rules to reduce duplicates; review the import results before relying on the data.",
      },
      {
        question: "Does Critter connect with my website?",
        answer:
          "Yes. You can embed Critter's lead capture forms and Meet & Greet scheduler directly on your website. Critter also provides unique referral links for each client that work anywhere — on your site, social media, or in emails.",
      },
      {
        question: "Is my data secure?",
        answer:
          "Critter uses encryption and security practices to protect your data. Some features use service providers, including Anthropic for AI features. See our Privacy Policy for how data is handled, and contact support@critter.pet for privacy or data-access questions.",
      },
    ],
  },
  {
    title: "Pricing & Billing",
    items: [
      {
        question: "How much does Critter cost?",
        answer: `New monthly offers are Starter at $${CRM_OFFERS.starter.monthlyUsd} USD, Grow at $${CRM_OFFERS.grow.monthlyUsd} USD, and Pro at $${CRM_OFFERS.pro.monthlyUsd} USD. Enterprise is custom-priced for franchises and multi-business operators. New CRM businesses start with a 7-day Critter trial. Existing customers keep their billed price unless they change their subscription.`,
      },
      {
        question: "What's the difference between the plans?",
        answer: `Starter includes Grow's features with ${formatAllowance(CRM_OFFERS.starter.emails)} base emails per month, owner-only access, and no SMS. That includes automated journey rules, task lists, lifecycle emails, unlimited forms and programs, Togo, reporting, and the website chat widget. Grow adds team access, ${formatAllowance(CRM_OFFERS.grow.emails)} base emails and ${formatAllowance(CRM_OFFERS.grow.smsSegments)} SMS segments. Pro expands allowances and adds management of up to two businesses and priority support.`,
      },
      {
        question: "Do you offer enterprise pricing?",
        answer:
          "Yes. Enterprise is custom-priced for franchises and multi-business operators — it covers 3+ businesses (unlimited), franchise network and portfolio roll-up, central billing across businesses, volume email and SMS, and dedicated support. Reach out to our team for pricing tailored to your scale.",
      },
      {
        question: "Can I change my plan later?",
        answer: "Yes. Review the billing confirmation before changing plans; it shows the price and when the change takes effect. Features that your new plan does not include will no longer be available.",
      },
      {
        question: "What if I exceed my SMS quota?",
        answer: "On an eligible texting plan, you can purchase additional 500-segment packs in Billing. Purchased segments do not expire, but they do not enable texting on Starter, during the trial, or while access is paused. Registration and consent are still required.",
      },
      {
        question: "Do you offer refunds?",
        answer:
          "Yes. If you're not satisfied within the first 30 days, we'll refund your payment — no questions asked.",
      },
    ],
  },
];
