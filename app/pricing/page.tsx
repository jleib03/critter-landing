"use client";

import React from "react";
import { CRM_OFFERS, TRIAL_COPY, formatAllowance } from "@/lib/marketing-offers";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Check, X, Mail, TrendingUp, UserPlus, Rocket, Building2, MessageSquare, BarChart3 } from "lucide-react";
import { TogoIcon } from "@/app/components/icons/TogoIcon";
import LandingNav from "@/app/components/marketing/LandingNav";
import LandingFooter from "@/app/components/marketing/LandingFooter";

interface PricingTier {
  id: string;
  name: string;
  price: number;
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
  /** Enterprise = sales-assisted, not a self-serve signup. Routes to /contact-us. */
  contactSales?: boolean;
  /** Shown instead of "$price/month" for sales-priced tiers (e.g. "Custom"). */
  priceLabel?: string;
}

// Public offers share numeric facts with the FAQ and structured metadata.
const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: CRM_OFFERS.starter.monthlyUsd,
    description: "Grow features, sized for one owner",
    icon: <UserPlus className="h-6 w-6" />,
    features: [
      { text: "7-day Critter trial for new CRM businesses", included: true },
      { text: "Unlimited lead forms & booking schedules", included: true, highlight: true },
      { text: "Customer journey with automated transition rules", included: true },
      { text: "Unlimited automated programs", included: true },
      { text: "One-time email campaigns", included: true },
      { text: `${formatAllowance(CRM_OFFERS.starter.emails)} base emails/month`, included: true },
      { text: "TTP & PPC integrations", included: true },
      { text: "1 business, owner only (no additional seats)", included: true },
      { text: "Automated funnel rules & task lists", included: true },
      { text: "Lifecycle emails", included: true },
      { text: `${CRM_OFFERS.starter.togoChats} Togo AI chats/month`, included: true },
      { text: "SMS/Texting", included: false },
    ],
    cta: "Choose Starter",
  },
  {
    id: "grow",
    name: "Grow",
    price: CRM_OFFERS.grow.monthlyUsd,
    description: "Full-featured for growing businesses",
    icon: <TrendingUp className="h-6 w-6" />,
    badge: "Most Popular",
    badgeColor: "bg-critter-orange",
    features: [
      { text: "7-day Critter trial for new CRM businesses", included: true },
      { text: "Unlimited lead forms & booking schedules", included: true, highlight: true },
      { text: "Automate your funnel with transition rules", included: true, highlight: true },
      { text: "Task lists & lifecycle emails", included: true, highlight: true },
      { text: "200 Togo AI chats/month", included: true, highlight: true },
      { text: `${formatAllowance(CRM_OFFERS.grow.smsSegments)} SMS segments/month`, included: true, highlight: true },
      { text: "BI reporting suite + CSV export", included: true, highlight: true },
      { text: "Website chat widget", included: true, highlight: true },
      { text: `${formatAllowance(CRM_OFFERS.grow.emails)} base emails/month`, included: true },
      { text: "TTP & PPC integrations", included: true },
      { text: "1 business", included: true },
    ],
    cta: "Choose Grow",
    popular: true,
  },
  {
    id: "pro",
    name: "Pro",
    price: CRM_OFFERS.pro.monthlyUsd,
    description: "Maximum power for established businesses",
    icon: <Rocket className="h-6 w-6" />,
    features: [
      { text: "7-day Critter trial for new CRM businesses", included: true },
      { text: "Everything in Grow", included: true },
      { text: `${formatAllowance(CRM_OFFERS.pro.emails)} base emails/month`, included: true, highlight: true },
      { text: `${formatAllowance(CRM_OFFERS.pro.smsSegments)} SMS segments/month`, included: true, highlight: true },
      { text: "500 Togo AI chats/month", included: true, highlight: true },
      { text: "Manage up to 2 businesses centrally", included: true, highlight: true },
      { text: "Priority support", included: true },
    ],
    cta: "Choose Pro",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 0,
    priceLabel: "Custom",
    description: "For franchises & multi-business operators",
    icon: <Building2 className="h-6 w-6" />,
    features: [
      { text: "Everything in Pro", included: true },
      { text: "Manage 3+ businesses (unlimited)", included: true, highlight: true },
      { text: "Franchise network + portfolio roll-up", included: true, highlight: true },
      { text: "Central billing across businesses", included: true },
      { text: "Volume email & SMS", included: true },
      { text: "Dedicated support", included: true },
    ],
    cta: "Contact Sales",
    contactSales: true,
  },
];

export default function PricingPage() {
  const hubUrl = process.env.NEXT_PUBLIC_HUB_URL || "https://hub.critter.pet";

  const handleSelectPlan = (tier: PricingTier) => {
    // Enterprise is sales-assisted — no self-serve Stripe checkout to send them to.
    if (tier.contactSales) {
      window.location.href = "/contact-us";
      return;
    }
    window.location.href = `${hubUrl}/auth/signup?plan=${tier.id}`;
  };

  return (
    <div className="min-h-screen bg-critter-beige">
      <LandingNav />

      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-36 pb-10">
        <div className="text-center mb-8">
          <h1 className="font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black mb-4">
            The right tools for your next chapter
          </h1>
          <p className="font-body text-lg sm:text-xl text-critter-gray max-w-2xl mx-auto">
            Understand your clients, build thoughtful follow-ups, and choose the plan that fits your business.
          </p>
        </div>

        {/* Free Trial Note */}
        <div className="text-center mb-8">
          <Badge className="bg-critter-orange text-white px-4 py-1 font-subtitle text-sm">
            {TRIAL_COPY}
          </Badge>
        </div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricingTiers.map((tier) => (
            <PricingCard
              key={tier.id}
              tier={tier}
              onSelect={handleSelectPlan}
            />
          ))}
        </div>

        {/* Features Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          <FeatureHighlight
            icon={<Mail className="h-5 w-5" />}
            title="Email & SMS"
            description="Up to 75K base emails and 10K SMS segments on Pro"
          />
          <FeatureHighlight
            icon={<TogoIcon size={20} />}
            title="Togo AI Assistant"
            description="Your marketing helper, included from Starter"
          />
          <FeatureHighlight
            icon={<BarChart3 className="h-5 w-5" />}
            title="Reporting & Dashboards"
            description="BI suite + CSV export, included from Starter"
          />
          <FeatureHighlight
            icon={<MessageSquare className="h-5 w-5" />}
            title="Website Chat Widget"
            description="Customer-facing AI chat, included from Starter"
          />
        </div>

        <p className="mt-6 text-center font-body text-sm text-critter-gray">Email allowances are shared across sending features. Additional email credits do not expire. SMS is not available on Starter or during the trial; eligible paid plans require texting registration and consent. An SMS can use more than one segment.</p>

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
        <div className="mt-16 max-w-6xl mx-auto">
          <h2 className="font-title text-3xl sm:text-4xl text-black text-center mb-8">
            Compare Plans
          </h2>
          <div className="bg-white rounded-lg border border-critter-cream overflow-x-auto">
            <table className="w-full min-w-[680px]">
              <thead>
                <tr className="border-b border-critter-cream">
                  <th className="text-left p-4 font-subtitle text-critter-maroon">Feature</th>
                  <th className="text-center p-4 font-subtitle text-critter-maroon">Starter</th>
                  <th className="text-center p-4 font-subtitle text-critter-maroon">Grow</th>
                  <th className="text-center p-4 font-subtitle text-critter-maroon">Pro</th>
                  <th className="text-center p-4 font-subtitle text-critter-maroon">Enterprise</th>
                </tr>
              </thead>
              <tbody className="font-body text-sm">
                <ComparisonRow feature="Base emails/month" starter={formatAllowance(CRM_OFFERS.starter.emails)} grow={formatAllowance(CRM_OFFERS.grow.emails)} pro={formatAllowance(CRM_OFFERS.pro.emails)} enterprise="Custom" />
                <ComparisonRow feature="SMS segments/month" starter={false} grow="2,000/mo" pro="10,000/mo" enterprise="Custom" />
                <ComparisonRow feature="Togo AI Assistant" starter={`${CRM_OFFERS.starter.togoChats}/mo`} grow="200/mo" pro="500/mo" enterprise="Custom" />
                <ComparisonRow feature="Lead forms & booking schedules" starter="Unlimited" grow="Unlimited" pro="Unlimited" enterprise="Unlimited" />
                <ComparisonRow feature="Customer funnel builder" starter={true} grow={true} pro={true} enterprise={true} />
                <ComparisonRow feature="Automated funnel transition rules" starter={true} grow={true} pro={true} enterprise={true} />
                <ComparisonRow feature="Task lists" starter={true} grow={true} pro={true} enterprise={true} />
                <ComparisonRow feature="Lifecycle emails" starter={true} grow={true} pro={true} enterprise={true} />
                <ComparisonRow feature="Automated programs" starter="Unlimited" grow="Unlimited" pro="Unlimited" enterprise="Unlimited" />
                <ComparisonRow feature="One-time email campaigns" starter={true} grow={true} pro={true} enterprise={true} />
                <ComparisonRow feature="Customer Segmentation" starter={true} grow={true} pro={true} enterprise={true} />
                <ComparisonRow feature="Notifications Center" starter={true} grow={true} pro={true} enterprise={true} />
                <ComparisonRow feature="BI reporting + CSV export" starter={true} grow={true} pro={true} enterprise={true} />
                <ComparisonRow feature="Website Chat Widget" starter={true} grow={true} pro={true} enterprise={true} />
                <ComparisonRow feature="TTP & PPC integrations" starter={true} grow={true} pro={true} enterprise={true} />
                <ComparisonRow feature="Team members" starter="Owner only" grow="Unlimited" pro="Unlimited" enterprise="Unlimited" />
                <ComparisonRow feature="Businesses managed" starter="1" grow="1" pro="Up to 2" enterprise="3+ (unlimited)" />
                <ComparisonRow feature="Priority Support" starter={false} grow={false} pro={true} enterprise="Dedicated" />
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
  onSelect: (tier: PricingTier) => void;
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
          {tier.priceLabel ? (
            <span className="font-title text-5xl text-critter-maroon">{tier.priceLabel}</span>
          ) : (
            <>
              <span className="font-title text-5xl text-critter-maroon">${tier.price}</span>
              <span className="font-body text-muted-foreground ml-1"> USD/month</span>
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
          onClick={() => onSelect(tier)}
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
  starter: boolean | string;
  grow: boolean | string;
  pro: boolean | string;
  enterprise: boolean | string;
}

function ComparisonRow({ feature, starter, grow, pro, enterprise }: ComparisonRowProps) {
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
      <td className="p-4 text-center">{renderValue(starter)}</td>
      <td className="p-4 text-center">{renderValue(grow)}</td>
      <td className="p-4 text-center">{renderValue(pro)}</td>
      <td className="p-4 text-center">{renderValue(enterprise)}</td>
    </tr>
  );
}
