"use client";

import React from "react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Check, X, Zap, Mail, TrendingUp, UserPlus, MessageSquare } from "lucide-react";
import { TogoIcon } from "@/app/components/icons/TogoIcon";
import LandingNav from "@/app/components/marketing/LandingNav";
import LandingFooter from "@/app/components/marketing/LandingFooter";

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
  popular?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    id: "trial",
    name: "Free Trial",
    price: "Free",
    period: "for 7 days",
    description: "Try everything before you commit",
    icon: <Zap className="h-6 w-6" />,
    badge: "No Credit Card",
    badgeColor: "bg-critter-orange",
    features: [
      { text: "1,000 emails", included: true },
      { text: "20 Togo AI chats", included: true },
      { text: "Customer segmentation & funnels", included: true },
      { text: "TTP & PPC integrations", included: true },
      { text: "Lead Generation", included: false },
      { text: "SMS/Texting", included: false },
    ],
    cta: "Start Free Trial",
  },
  {
    id: "starter",
    name: "Starter",
    price: 49,
    description: "Get started with email marketing",
    icon: <Mail className="h-6 w-6" />,
    features: [
      { text: "1,000 emails/month", included: true },
      { text: "Email Campaigns", included: true },
      { text: "Customer segmentation & funnels", included: true },
      { text: "TTP & PPC integrations", included: true },
      { text: "Togo AI", included: false },
      { text: "SMS/Texting", included: false },
      { text: "Lead Generation", included: false },
    ],
    cta: "Choose Starter",
  },
  {
    id: "grow",
    name: "Grow",
    price: 149,
    description: "Full-featured for growing businesses",
    icon: <TrendingUp className="h-6 w-6" />,
    badge: "Most Popular",
    badgeColor: "bg-critter-orange",
    features: [
      { text: "25,000 emails/month", included: true, highlight: true },
      { text: "2,000 SMS messages/month", included: true, highlight: true },
      { text: "200 Togo AI chats/month", included: true, highlight: true },
      { text: "Lead Generation tools", included: true, highlight: true },
      { text: "Automations & lifecycle comms", included: true },
      { text: "TTP & PPC integrations", included: true },
    ],
    cta: "Choose Grow",
    popular: true,
  },
  {
    id: "pro",
    name: "Pro",
    price: 349,
    description: "Maximum power for established businesses",
    icon: <UserPlus className="h-6 w-6" />,
    features: [
      { text: "75,000 emails/month", included: true, highlight: true },
      { text: "10,000 SMS messages/month", included: true, highlight: true },
      { text: "500 Togo AI chats/month", included: true, highlight: true },
      { text: "Lead Generation tools", included: true },
      { text: "Advanced Automations", included: true },
      { text: "Priority support", included: true },
    ],
    cta: "Choose Pro",
  },
];

export default function PricingPage() {
  const hubUrl = process.env.NEXT_PUBLIC_HUB_URL || "https://hub.critter.pet";

  const handleSelectPlan = (tierId: string) => {
    if (tierId === "trial") {
      window.location.href = `${hubUrl}/auth/signup`;
    } else {
      window.location.href = `${hubUrl}/auth/signup?plan=${tierId}`;
    }
  };

  return (
    <div className="min-h-screen bg-critter-beige">
      <LandingNav />

      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-28 pb-10">
        <div className="text-center mb-8">
          <h1 className="font-title text-4xl sm:text-5xl md:text-6xl text-black mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="font-body text-lg sm:text-xl text-critter-gray max-w-2xl mx-auto">
            Powerful marketing automation for pet care businesses. Start with a free trial, upgrade when you&apos;re ready.
          </p>
        </div>

        {/* Features Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <FeatureHighlight
            icon={<Mail className="h-5 w-5" />}
            title="Email Campaigns"
            description="Up to 75K emails/month"
          />
          <FeatureHighlight
            icon={<MessageSquare className="h-5 w-5" />}
            title="SMS Messaging"
            description="Starting at 2K/mo on Grow"
          />
          <FeatureHighlight
            icon={<TogoIcon size={20} />}
            title="Togo AI Assistant"
            description="Your smart marketing helper"
          />
          <FeatureHighlight
            icon={<UserPlus className="h-5 w-5" />}
            title="Lead Generation"
            description="Forms, scheduling & more"
          />
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
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
        <div className="mt-16 max-w-5xl mx-auto">
          <h2 className="font-title text-3xl sm:text-4xl text-black text-center mb-8">
            Compare Plans
          </h2>
          <div className="bg-white rounded-lg border border-critter-cream overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-critter-cream">
                  <th className="text-left p-4 font-subtitle text-critter-maroon">Feature</th>
                  <th className="text-center p-4 font-subtitle text-critter-maroon">Trial</th>
                  <th className="text-center p-4 font-subtitle text-critter-maroon">Starter</th>
                  <th className="text-center p-4 font-subtitle text-critter-maroon">Grow</th>
                  <th className="text-center p-4 font-subtitle text-critter-maroon">Pro</th>
                </tr>
              </thead>
              <tbody className="font-body text-sm">
                <ComparisonRow feature="Emails/month" trial="1,000" starter="1,000" grow="25,000" pro="75,000" />
                <ComparisonRow feature="Customer Segmentation" trial={true} starter={true} grow={true} pro={true} />
                <ComparisonRow feature="Automations" trial={true} starter={true} grow={true} pro={true} />
                <ComparisonRow feature="Funnel Management" trial={true} starter={true} grow={true} pro={true} />
                <ComparisonRow feature="Togo AI Assistant" trial="20 total" starter={false} grow="200/mo" pro="500/mo" />
                <ComparisonRow feature="Lead Generation" trial={false} starter={false} grow={true} pro={true} />
                <ComparisonRow feature="SMS Messages" trial={false} starter={false} grow="2,000/mo" pro="10,000/mo" />
                <ComparisonRow feature="Priority Support" trial={false} starter={false} grow={false} pro={true} />
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <LandingFooter />
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
    ? "border-2 border-critter-orange shadow-xl bg-white"
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

      <CardHeader className="text-center pb-4 pt-8">
        <div className={`mx-auto mb-3 p-3 rounded-full w-fit ${iconBgColor}`}>
          {tier.icon}
        </div>
        <CardTitle className="font-title text-2xl text-critter-maroon mb-1">{tier.name}</CardTitle>
        <CardDescription className="font-body text-sm">
          {tier.description}
        </CardDescription>
        <div className="mt-3">
          {tier.price === "Free" ? (
            <div>
              <span className="font-title text-5xl text-critter-maroon">Free</span>
              {tier.period && (
                <span className="font-body text-muted-foreground ml-2">{tier.period}</span>
              )}
            </div>
          ) : (
            <>
              <span className="font-title text-5xl text-critter-maroon">${tier.price}</span>
              <span className="font-body text-muted-foreground ml-1">/month</span>
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
              <span className={`font-body ${feature.highlight ? 'font-medium text-critter-maroon' : feature.included ? 'text-muted-foreground' : ''}`}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button
          className={`w-full font-subtitle ${tier.popular ? 'bg-critter-orange hover:bg-critter-orange/90 text-white' : ''}`}
          variant={tier.popular ? "default" : "outline"}
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
      <h3 className="font-subtitle font-semibold text-critter-maroon mb-1">{title}</h3>
      <p className="font-body text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

interface ComparisonRowProps {
  feature: string;
  trial: boolean | string;
  starter: boolean | string;
  grow: boolean | string;
  pro: boolean | string;
}

function ComparisonRow({ feature, trial, starter, grow, pro }: ComparisonRowProps) {
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
      <td className="p-4 text-center">{renderValue(starter)}</td>
      <td className="p-4 text-center">{renderValue(grow)}</td>
      <td className="p-4 text-center">{renderValue(pro)}</td>
    </tr>
  );
}
