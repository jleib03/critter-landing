"use client";

import Link from "next/link";
import {
  Mail,
  MessageSquare,
  ClipboardList,
  Gift,
  TrendingUp,
  RefreshCw,
  Link2,
  DollarSign,
  GitBranch,
  Target,
  Bot,
  BarChart3,
  Database,
  Users,
  Zap,
  PieChart,
} from "lucide-react";

const features = [
  { name: "Email Marketing", icon: Mail, href: "/features/marketing" },
  { name: "Texting", icon: MessageSquare, href: "/features/marketing" },
  { name: "Automated Funnel Tracking", icon: GitBranch, href: "/features/crm" },
  { name: "Auto Tagging / Segmentation", icon: Users, href: "/features/crm" },
  { name: "Referral Program", icon: Gift, href: "/features/referrals" },
  { name: "Embeddable Forms", icon: ClipboardList, href: "/features/lead-generation" },
  { name: "Booking Links", icon: Link2, href: "/features/lead-generation" },
  { name: "AI Agent", icon: Bot, href: "/togo-ai" },
  { name: "Upsell Campaigns", icon: TrendingUp, href: "/features/marketing" },
  { name: "Cross-Sell Campaigns", icon: RefreshCw, href: "/features/marketing" },
  { name: "Win-Back Campaigns", icon: Zap, href: "/features/marketing" },
  { name: "Advanced Audience Targeting", icon: Target, href: "/features/marketing" },
  { name: "Custom Reports & Analytics", icon: BarChart3, href: "/togo-ai" },
  { name: "Customer Lifetime Value Analysis", icon: DollarSign, href: "/features/crm" },
  { name: "ROI Tracking", icon: PieChart, href: "/features/marketing" },
  { name: "Industry Data Connectors", icon: Database, href: "/features/data-integration" },
];

export default function FeaturesGrid() {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-title text-3xl sm:text-4xl text-critter-maroon text-center mb-12">
          Features built to scale pet care businesses
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Link
                key={feature.name}
                href={feature.href}
                className="group bg-white rounded-xl border border-critter-cream p-5 hover:border-critter-orange hover:shadow-md transition-all text-center items-center"
              >
                <div className="w-12 h-12 rounded-xl bg-critter-orange/10 flex items-center justify-center mb-3 mx-auto group-hover:bg-critter-orange/20 transition-colors">
                  <Icon className="h-6 w-6 text-critter-orange" />
                </div>
                <p className="font-subtitle text-sm text-critter-maroon leading-tight">
                  {feature.name}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
