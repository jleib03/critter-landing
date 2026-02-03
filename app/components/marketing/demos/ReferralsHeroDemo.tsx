"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/app/components/ui/badge";
import {
  Link2,
  Gift,
  Users,
  TrendingUp,
  Star,
  Copy,
  ChevronRight,
  Check,
} from "lucide-react";

const topReferrers = [
  { name: "Sarah Johnson", referrals: 12, converted: 8, reward: "$120 credit", avatar: "SJ" },
  { name: "Emily Davis", referrals: 9, converted: 6, reward: "$90 credit", avatar: "ED" },
  { name: "Lisa Brown", referrals: 7, converted: 5, reward: "$70 credit", avatar: "LB" },
  { name: "James Wilson", referrals: 5, converted: 3, reward: "$45 credit", avatar: "JW" },
];

const rewardTiers = [
  { tier: "Bronze", referrals: "1-3", reward: "$10 off", color: "bg-amber-600" },
  { tier: "Silver", referrals: "4-7", reward: "$15 off", color: "bg-gray-400" },
  { tier: "Gold", referrals: "8+", reward: "$25 off", color: "bg-yellow-500" },
];

export default function ReferralsHeroDemo() {
  const [copied, setCopied] = useState(false);
  const [visibleReferrers, setVisibleReferrers] = useState(0);

  useEffect(() => {
    if (visibleReferrers < topReferrers.length) {
      const timer = setTimeout(() => setVisibleReferrers((v) => v + 1), 500);
      return () => clearTimeout(timer);
    }
  }, [visibleReferrers]);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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

        <div className="bg-critter-beige p-4 space-y-3">
          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-white rounded-xl p-3 shadow-sm text-center">
              <p className="font-title text-xl text-critter-orange">156</p>
              <p className="font-body text-xs text-critter-gray">Total Referrals</p>
            </div>
            <div className="bg-white rounded-xl p-3 shadow-sm text-center">
              <p className="font-title text-xl text-green-600">89</p>
              <p className="font-body text-xs text-critter-gray">Converted</p>
            </div>
            <div className="bg-white rounded-xl p-3 shadow-sm text-center">
              <p className="font-title text-xl text-critter-maroon">$4,230</p>
              <p className="font-body text-xs text-critter-gray">Revenue</p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-3">
            {/* Left - Referrer List */}
            <div className="col-span-7">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-3 border-b border-critter-cream flex items-center justify-between">
                  <h3 className="font-subtitle text-sm text-critter-maroon">Top Referrers</h3>
                  <Badge className="bg-critter-orange/10 text-critter-orange font-body text-xs">This Month</Badge>
                </div>
                <div className="divide-y divide-critter-cream">
                  {topReferrers.slice(0, visibleReferrers).map((referrer, i) => (
                    <div key={i} className="flex items-center justify-between p-3 hover:bg-critter-beige/30 transition-colors cursor-pointer group animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-critter-maroon text-white flex items-center justify-center font-subtitle text-xs">
                          {referrer.avatar}
                        </div>
                        <div>
                          <p className="font-subtitle text-xs text-critter-maroon">{referrer.name}</p>
                          <p className="font-body text-xs text-critter-gray">{referrer.referrals} referrals · {referrer.converted} converted</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-green-100 text-green-700 text-xs font-body">{referrer.reward}</Badge>
                        <ChevronRight className="h-3 w-3 text-critter-gray opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Referral Link + Tiers */}
            <div className="col-span-5 space-y-3">
              {/* Referral Link */}
              <div className="bg-white rounded-xl p-3 shadow-sm">
                <h4 className="font-subtitle text-xs text-critter-maroon mb-2">Unique Referral Links</h4>
                <div
                  className="bg-critter-beige/50 rounded-lg p-2 border border-critter-cream flex items-center gap-2 cursor-pointer hover:bg-critter-cream/50 transition-colors"
                  onClick={handleCopy}
                >
                  <Link2 className="h-3 w-3 text-critter-orange flex-shrink-0" />
                  <span className="font-body text-xs text-critter-maroon truncate">critter.pet/ref/sarah-j</span>
                  {copied ? (
                    <Check className="h-3 w-3 text-green-500 flex-shrink-0" />
                  ) : (
                    <Copy className="h-3 w-3 text-critter-gray flex-shrink-0" />
                  )}
                </div>
                <p className="font-body text-xs text-critter-gray mt-2">Each client gets a unique link auto-generated on enrollment</p>
              </div>

              {/* Reward Tiers */}
              <div className="bg-white rounded-xl p-3 shadow-sm">
                <h4 className="font-subtitle text-xs text-critter-maroon mb-2">Reward Tiers</h4>
                <div className="space-y-1.5">
                  {rewardTiers.map((tier, i) => (
                    <div key={i} className="flex items-center justify-between p-2 bg-critter-beige/50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <div className={`w-5 h-5 rounded-full ${tier.color} flex items-center justify-center`}>
                          <Star className="h-3 w-3 text-white" />
                        </div>
                        <div>
                          <span className="font-subtitle text-xs text-critter-maroon">{tier.tier}</span>
                          <span className="font-body text-xs text-critter-gray ml-1">({tier.referrals})</span>
                        </div>
                      </div>
                      <span className="font-subtitle text-xs text-critter-orange">{tier.reward}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
