"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Check, X, Rocket, MessageSquare, Mail, TrendingUp, UserPlus, Zap } from "lucide-react";
import { BaltoIcon } from "@/app/components/icons/BaltoIcon";

interface PricingTier {
  id: string;
  name: string;
  price: number | "Free";
  period?: string;
  description: string;
  icon: React.ReactNode;
  badge?: string;
  badgeColor?: string;
  features: {
    text: string;
    included: boolean;
    highlight?: boolean;
  }[];
  cta: string;
  ctaVariant: "default" | "outline" | "secondary";
  popular?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    id: "trial",
    name: "Free Trial",
    price: "Free",
    period: "7 days",
    description: "Try everything before you commit",
    icon: <Zap className="h-6 w-6" />,
    badge: "No Credit Card",
    badgeColor: "bg-green-500",
    features: [
      { text: "Unlimited email campaigns", included: true },
      { text: "Customer segmentation & funnels", included: true },
      { text: "Lead Generation tools", included: true, highlight: true },
      { text: "25 Balto AI chats", included: true },
      { text: "Automations & lifecycle comms", included: true },
      { text: "TTP & PPC integrations", included: true },
      { text: "SMS/Texting", included: false },
    ],
    cta: "Start Free Trial",
    ctaVariant: "outline",
  },
  {
    id: "grow",
    name: "Grow",
    price: 89,
    description: "Essential tools for growing businesses",
    icon: <TrendingUp className="h-6 w-6" />,
    features: [
      { text: "Unlimited email campaigns", included: true },
      { text: "Customer segmentation & funnels", included: true },
      { text: "Automations & lifecycle comms", included: true },
      { text: "100 Balto AI chats/month", included: true },
      { text: "TTP & PPC integrations", included: true },
      { text: "Lead Generation tools", included: false },
      { text: "SMS/Texting", included: false },
    ],
    cta: "Choose Grow",
    ctaVariant: "secondary",
    popular: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: 249,
    description: "Full power for established businesses",
    icon: <Rocket className="h-6 w-6" />,
    badge: "Most Popular",
    badgeColor: "bg-critter-orange",
    features: [
      { text: "Everything in Grow", included: true },
      { text: "Lead Generation tools", included: true, highlight: true },
      { text: "500 Balto AI chats/month", included: true, highlight: true },
      { text: "5,000 SMS messages/month", included: true, highlight: true },
      { text: "SMS add-ons available ($20/1K)", included: true },
      { text: "Priority support", included: true },
    ],
    cta: "Choose Pro",
    ctaVariant: "default",
    popular: true,
  },
];

export default function PricingPage() {
  const hubUrl = process.env.NEXT_PUBLIC_HUB_URL || "https://hub.critter.pet";

  const handleSelectPlan = (tierId: string) => {
    // All plans redirect to hub for signup/checkout
    if (tierId === "trial") {
      window.location.href = `${hubUrl}/auth/signup`;
    } else {
      window.location.href = `${hubUrl}/auth/signup?plan=${tierId}`;
    }
  };

  return (
    <div className="min-h-screen bg-critter-beige">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-10">
        <div className="text-center mb-8">
          <h1 className="font-title text-5xl text-critter-maroon mb-3">
            Simple, Transparent Pricing
          </h1>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful marketing automation for pet care businesses. Start with a free trial, upgrade when you&apos;re ready.
          </p>
        </div>

        {/* Features Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          <FeatureHighlight
            icon={<Mail className="h-5 w-5" />}
            title="Unlimited Emails"
            description="Send as many as you need"
          />
          <FeatureHighlight
            icon={<MessageSquare className="h-5 w-5" />}
            title="SMS Messaging"
            description="Pro plan includes 5K/mo"
          />
          <FeatureHighlight
            icon={<BaltoIcon size={20} />}
            title="Balto AI Assistant"
            description="Your smart marketing helper"
          />
          <FeatureHighlight
            icon={<UserPlus className="h-5 w-5" />}
            title="Lead Generation"
            description="Forms, scheduling & more"
          />
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {pricingTiers.map((tier) => (
            <PricingCard
              key={tier.id}
              tier={tier}
              onSelect={handleSelectPlan}
            />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-10 text-center">
          <p className="font-body text-sm text-muted-foreground mb-4">
            Trusted by pet care professionals across the country
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-critter-orange" />
              <span className="font-body text-sm text-muted-foreground">No credit card for trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-critter-orange" />
              <span className="font-body text-sm text-muted-foreground">Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-critter-orange" />
              <span className="font-body text-sm text-muted-foreground">30-day money-back guarantee</span>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="font-title text-2xl text-critter-maroon text-center mb-8">
            Compare Plans
          </h2>
          <div className="bg-white rounded-lg border border-critter-cream overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-critter-cream">
                  <th className="text-left p-4 font-subtitle text-critter-maroon">Feature</th>
                  <th className="text-center p-4 font-subtitle text-critter-maroon">Trial</th>
                  <th className="text-center p-4 font-subtitle text-critter-maroon">Grow</th>
                  <th className="text-center p-4 font-subtitle text-critter-maroon bg-critter-orange/5">Pro</th>
                </tr>
              </thead>
              <tbody className="font-body text-sm">
                <ComparisonRow feature="Email Campaigns" trial="Unlimited" grow="Unlimited" pro="Unlimited" />
                <ComparisonRow feature="Customer Segmentation" trial={true} grow={true} pro={true} />
                <ComparisonRow feature="Automations" trial={true} grow={true} pro={true} />
                <ComparisonRow feature="Funnel Management" trial={true} grow={true} pro={true} />
                <ComparisonRow feature="Balto AI Assistant" trial="25 total" grow="100/mo" pro="500/mo" />
                <ComparisonRow feature="Lead Generation" trial={true} grow={false} pro={true} />
                <ComparisonRow feature="SMS Messages" trial={false} grow={false} pro="5,000/mo" />
                <ComparisonRow feature="SMS Add-ons" trial={false} grow={false} pro="$20/1K" />
                <ComparisonRow feature="Priority Support" trial={false} grow={false} pro={true} />
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="font-title text-2xl text-critter-maroon text-center mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <FAQItem
              question="What happens after my 7-day trial ends?"
              answer="After your trial, you'll need to choose a paid plan to continue using Critter. Your data is preserved, and you can upgrade anytime. We'll send you reminders before your trial expires."
            />
            <FAQItem
              question="Can I change plans later?"
              answer="Absolutely! You can upgrade or downgrade at any time. Upgrades take effect immediately, and downgrades apply at your next billing cycle."
            />
            <FAQItem
              question="What's included in Lead Generation?"
              answer="Lead Generation includes customizable contact forms, online scheduling for meet & greets, meeting management, and referral programs to help grow your customer base."
            />
            <FAQItem
              question="What if I exceed my SMS quota?"
              answer="When you reach 80% of your quota, we'll notify you. You can purchase additional SMS bundles at $20 per 1,000 messages anytime from your profile."
            />
            <FAQItem
              question="Do you offer refunds?"
              answer="Yes! If you're not satisfied within the first 30 days, we'll refund your money, no questions asked."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

interface PricingCardProps {
  tier: PricingTier;
  onSelect: (tierId: string) => void;
}

function PricingCard({ tier, onSelect }: PricingCardProps) {
  const iconBgColor = "bg-critter-orange/10 text-critter-orange";
  const borderColor = tier.popular
    ? "border-2 border-critter-orange shadow-xl scale-105 z-10 bg-white"
    : "border border-critter-cream bg-white shadow-sm";

  return (
    <Card className={`relative flex flex-col ${borderColor}`}>
      {tier.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <Badge className={`${tier.badgeColor} text-white px-4 py-1 font-subtitle`}>
            {tier.badge}
          </Badge>
        </div>
      )}

      <CardHeader className="text-center pb-6 pt-8">
        <div className={`mx-auto mb-4 p-3 rounded-full w-fit ${iconBgColor}`}>
          {tier.icon}
        </div>
        <CardTitle className="font-title text-2xl text-critter-maroon mb-2">{tier.name}</CardTitle>
        <CardDescription className="font-body text-base">
          {tier.description}
        </CardDescription>
        <div className="mt-4">
          {tier.price === "Free" ? (
            <div>
              <span className="font-title text-5xl text-critter-maroon">Free</span>
              {tier.period && (
                <span className="font-body text-muted-foreground ml-2">for {tier.period}</span>
              )}
            </div>
          ) : (
            <>
              <span className="font-title text-5xl text-critter-maroon">${tier.price}</span>
              <span className="font-body text-muted-foreground ml-2">/month</span>
            </>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        <ul className="space-y-3">
          {tier.features.map((feature, idx) => (
            <li key={idx} className={`flex items-start gap-2 text-sm ${!feature.included ? 'text-gray-400' : ''}`}>
              {feature.included ? (
                <Check className={`h-4 w-4 mt-0.5 flex-shrink-0 ${feature.highlight ? 'text-critter-orange' : 'text-green-600'}`} />
              ) : (
                <X className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-300" />
              )}
              <span className={`font-body ${feature.highlight ? 'font-medium text-critter-maroon' : 'text-muted-foreground'}`}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button
          className={`w-full font-subtitle ${tier.popular ? 'bg-critter-orange hover:bg-critter-orange/90 text-white' : ''}`}
          variant={tier.popular ? "default" : tier.ctaVariant}
          size="lg"
          onClick={() => onSelect(tier.id)}
        >
          {tier.cta}
        </Button>
      </CardFooter>
    </Card>
  );
}

interface FeatureHighlightProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureHighlight({ icon, title, description }: FeatureHighlightProps) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-3 p-3 rounded-full w-fit bg-critter-orange/10 text-critter-orange">
        {icon}
      </div>
      <h3 className="font-subtitle text-critter-maroon mb-1">{title}</h3>
      <p className="font-body text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

interface ComparisonRowProps {
  feature: string;
  trial: boolean | string;
  grow: boolean | string;
  pro: boolean | string;
}

function ComparisonRow({ feature, trial, grow, pro }: ComparisonRowProps) {
  const renderValue = (value: boolean | string) => {
    if (typeof value === 'string') {
      return <span className="font-medium text-critter-maroon">{value}</span>;
    }
    return value ? (
      <Check className="h-5 w-5 text-green-600 mx-auto" />
    ) : (
      <X className="h-5 w-5 text-gray-300 mx-auto" />
    );
  };

  return (
    <tr className="border-b border-critter-cream last:border-0">
      <td className="p-4 text-muted-foreground">{feature}</td>
      <td className="p-4 text-center">{renderValue(trial)}</td>
      <td className="p-4 text-center">{renderValue(grow)}</td>
      <td className="p-4 text-center bg-critter-orange/5">{renderValue(pro)}</td>
    </tr>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-critter-cream rounded-lg p-4 cursor-pointer hover:border-critter-orange transition-colors">
      <div
        className="flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-subtitle text-critter-maroon">{question}</h3>
        <span className="text-xl text-critter-orange">{isOpen ? "−" : "+"}</span>
      </div>
      {isOpen && <p className="font-body mt-2 text-muted-foreground">{answer}</p>}
    </div>
  );
}
