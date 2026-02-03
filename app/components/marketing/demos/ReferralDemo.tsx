"use client";

import { useState, useEffect } from "react";
import { Gift, Link2, Copy, Users, Trophy, Star, TrendingUp, Check, Share2 } from "lucide-react";

const referrers = [
  { name: "Sarah J.", referrals: 8, converted: 6, reward: "$120", tier: "Gold" },
  { name: "Mike C.", referrals: 5, converted: 4, reward: "$80", tier: "Silver" },
  { name: "Emily D.", referrals: 3, converted: 2, reward: "$40", tier: "Bronze" },
  { name: "James W.", referrals: 2, converted: 1, reward: "$20", tier: "Bronze" },
];

const tierColors: Record<string, string> = {
  "Gold": "bg-amber-100 text-amber-700",
  "Silver": "bg-gray-100 text-gray-600",
  "Bronze": "bg-orange-100 text-orange-700",
};

const rewardTiers = [
  { tier: "Bronze", min: 1, max: 3, reward: "$20/referral" },
  { tier: "Silver", min: 4, max: 6, reward: "$20/referral + 10% off" },
  { tier: "Gold", min: 7, max: null, reward: "$20/referral + free visit" },
];

export default function ReferralDemo() {
  const [copied, setCopied] = useState(false);
  const [highlightRow, setHighlightRow] = useState(0);

  // Simulate copy feedback
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  // Auto-cycle highlight
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightRow((prev) => (prev + 1) % referrers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-critter-cream overflow-hidden">
      {/* Browser chrome */}
      <div className="bg-critter-orange px-5 py-3 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-white/30" />
          <div className="w-3 h-3 rounded-full bg-white/30" />
          <div className="w-3 h-3 rounded-full bg-white/30" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-white/20 rounded-md px-4 py-1 text-white/80 text-xs font-body">hub.critter.pet/referrals</div>
        </div>
      </div>

      <div className="p-5 space-y-4 min-h-[380px]">
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Total Referrals", value: "47", icon: <Users className="h-3.5 w-3.5" /> },
            { label: "Converted", value: "31", icon: <Check className="h-3.5 w-3.5" /> },
            { label: "Revenue Generated", value: "$9,240", icon: <TrendingUp className="h-3.5 w-3.5" /> },
          ].map((stat, i) => (
            <div key={i} className="bg-critter-beige/50 rounded-lg p-3 text-center">
              <div className="flex items-center justify-center gap-1 text-critter-orange mb-1">
                {stat.icon}
              </div>
              <p className="font-subtitle text-sm text-critter-maroon">{stat.value}</p>
              <p className="font-body text-xs text-critter-gray">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Referral link */}
        <div className="bg-critter-beige/30 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Link2 className="h-3.5 w-3.5 text-critter-orange" />
              <span className="font-subtitle text-xs text-critter-maroon">Client Referral Link</span>
            </div>
            <div className="flex gap-1.5">
              <button
                onClick={() => setCopied(true)}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-body transition-colors ${
                  copied ? "bg-green-100 text-green-600" : "bg-white text-critter-maroon border border-critter-cream"
                }`}
              >
                {copied ? <Check className="h-2.5 w-2.5" /> : <Copy className="h-2.5 w-2.5" />}
                {copied ? "Copied!" : "Copy"}
              </button>
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-body bg-white text-critter-maroon border border-critter-cream cursor-default">
                <Share2 className="h-2.5 w-2.5" />
                Share
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md px-3 py-2 border border-critter-cream">
            <span className="font-body text-xs text-critter-gray">yoursite.com/ref/</span>
            <span className="font-body text-xs text-critter-orange">sarah-johnson-vip</span>
          </div>
        </div>

        {/* Top referrers */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Trophy className="h-3.5 w-3.5 text-critter-orange" />
              <span className="font-subtitle text-xs text-critter-maroon">Top Referrers</span>
            </div>
          </div>
          <div className="space-y-1.5">
            {referrers.map((r, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                  i === highlightRow ? "bg-critter-orange/5 border border-critter-orange/20" : "bg-critter-beige/30 border border-transparent"
                }`}
              >
                <div className="w-6 h-6 rounded-full bg-critter-orange flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-subtitle text-xs">{i + 1}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-subtitle text-xs text-critter-maroon">{r.name}</span>
                </div>
                <span className={`text-xs font-body px-2 py-0.5 rounded-full ${tierColors[r.tier]}`}>
                  {r.tier}
                </span>
                <div className="text-right flex-shrink-0">
                  <p className="font-subtitle text-xs text-critter-orange">{r.reward}</p>
                  <p className="font-body text-xs text-critter-gray">{r.converted}/{r.referrals} converted</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reward tiers mini */}
        <div className="flex gap-2">
          {rewardTiers.map((t, i) => (
            <div key={i} className="flex-1 bg-critter-cream/50 rounded-lg p-2 text-center">
              <p className="font-subtitle text-xs text-critter-maroon">{t.tier}</p>
              <p className="font-body text-xs text-critter-gray">{t.min}-{t.max || "+"} refs</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
