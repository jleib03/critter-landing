"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/app/components/ui/badge";
import {
  Mail,
  TrendingUp,
  Star,
  Zap,
  Users,
  ChevronRight,
  Check,
  Gift,
  Heart,
  Calendar,
} from "lucide-react";

const campaigns = [
  { name: "Spring Grooming Special", sent: 847, status: "active", openRate: "68%", conversions: 43 },
  { name: "Referral Rewards", sent: 1243, status: "active", openRate: "72%", conversions: 89 },
  { name: "Birthday Wishes", sent: 156, status: "active", openRate: "81%", conversions: 67 },
];

const programs = [
  { name: "Birthday Program", icon: <Gift className="h-4 w-4" />, enrolled: 312, active: true },
  { name: "Win-Back", icon: <Heart className="h-4 w-4" />, enrolled: 43, active: true },
  { name: "Review Request", icon: <Star className="h-4 w-4" />, enrolled: 847, active: true },
  { name: "Upsell Series", icon: <TrendingUp className="h-4 w-4" />, enrolled: 156, active: false },
];

export default function MarketingHeroDemo() {
  const [activeTab, setActiveTab] = useState<"campaigns" | "programs">("campaigns");
  const [animatedMetrics, setAnimatedMetrics] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedMetrics(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-b from-critter-orange/5 to-critter-maroon/5 rounded-3xl blur-2xl" />
      <div className="relative bg-white rounded-2xl shadow-2xl border border-critter-cream overflow-hidden">
        {/* Browser Chrome */}
        <div className="bg-critter-orange px-4 py-3 flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-white/60" />
            <div className="w-3 h-3 rounded-full bg-white/40" />
            <div className="w-3 h-3 rounded-full bg-white/20" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-white/10 rounded-md px-4 py-1">
              <span className="font-body text-white/60 text-xs">hub.critter.pet</span>
            </div>
          </div>
        </div>

        <div className="bg-critter-beige p-4">
          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className={`bg-white rounded-xl p-3 shadow-sm transition-all duration-700 ${animatedMetrics ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
              <div className="flex items-center gap-1 mb-1">
                <TrendingUp className="h-3 w-3 text-critter-orange" />
                <span className="font-body text-xs text-critter-gray">Sent</span>
              </div>
              <p className="font-title text-xl text-critter-maroon">12,847</p>
            </div>
            <div className={`bg-white rounded-xl p-3 shadow-sm transition-all duration-700 delay-150 ${animatedMetrics ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
              <div className="flex items-center gap-1 mb-1">
                <Mail className="h-3 w-3 text-critter-orange" />
                <span className="font-body text-xs text-critter-gray">Opened</span>
              </div>
              <p className="font-title text-xl text-critter-maroon">71%</p>
            </div>
            <div className={`bg-white rounded-xl p-3 shadow-sm transition-all duration-700 delay-300 ${animatedMetrics ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
              <div className="flex items-center gap-1 mb-1">
                <Star className="h-3 w-3 text-critter-orange" />
                <span className="font-body text-xs text-critter-gray">Converted</span>
              </div>
              <p className="font-title text-xl text-green-600">199</p>
            </div>
          </div>

          {/* Tab Switcher */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setActiveTab("campaigns")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-subtitle text-xs transition-all ${
                activeTab === "campaigns"
                  ? "bg-critter-orange text-white"
                  : "bg-white text-critter-maroon hover:bg-critter-cream"
              }`}
            >
              <Mail className="h-3 w-3" /> Campaigns
            </button>
            <button
              onClick={() => setActiveTab("programs")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-subtitle text-xs transition-all ${
                activeTab === "programs"
                  ? "bg-critter-orange text-white"
                  : "bg-white text-critter-maroon hover:bg-critter-cream"
              }`}
            >
              <Zap className="h-3 w-3" /> Programs
            </button>
          </div>

          {activeTab === "campaigns" ? (
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-3 border-b border-critter-cream flex items-center justify-between">
                <h3 className="font-subtitle text-sm text-critter-maroon">Active Campaigns</h3>
                <Badge className="bg-green-100 text-green-700 font-body text-xs">3 Running</Badge>
              </div>
              <div className="divide-y divide-critter-cream">
                {campaigns.map((campaign, i) => (
                  <div key={i} className="flex items-center justify-between p-3 hover:bg-critter-beige/30 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-critter-orange/10 flex items-center justify-center group-hover:bg-critter-orange group-hover:text-white transition-colors">
                        <Mail className="h-4 w-4 text-critter-orange group-hover:text-white" />
                      </div>
                      <div>
                        <p className="font-subtitle text-xs text-critter-maroon">{campaign.name}</p>
                        <p className="font-body text-xs text-critter-gray">{campaign.sent.toLocaleString()} sent</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right hidden sm:block">
                        <p className="font-subtitle text-xs text-critter-orange">{campaign.openRate} open</p>
                        <p className="font-body text-xs text-green-600">{campaign.conversions} converted</p>
                      </div>
                      <ChevronRight className="h-3 w-3 text-critter-gray opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-3 border-b border-critter-cream">
                <h3 className="font-subtitle text-sm text-critter-maroon">Automated Programs</h3>
              </div>
              <div className="p-3 grid grid-cols-2 gap-2">
                {programs.map((program, i) => (
                  <div
                    key={i}
                    className={`p-3 rounded-xl border-2 transition-all cursor-pointer hover:shadow-md ${
                      program.active ? "border-critter-orange bg-critter-orange/5" : "border-critter-cream bg-critter-beige/30"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${
                      program.active ? "bg-critter-orange text-white" : "bg-critter-cream text-critter-gray"
                    }`}>
                      {program.icon}
                    </div>
                    <p className="font-subtitle text-xs text-critter-maroon">{program.name}</p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="font-body text-xs text-critter-gray">{program.enrolled} enrolled</span>
                      {program.active && <Check className="h-3 w-3 text-green-500" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
