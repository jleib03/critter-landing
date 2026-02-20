"use client";

import Image from "next/image";
import { Badge } from "@/app/components/ui/badge";
import {
  Check,
  Database,
  ArrowRight,
  Users,
  Mail,
  PawPrint,
  MessageSquare,
  Zap,
  Star,
  Heart,
  TrendingUp,
  Send,
  Gift,
  Dog,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Ad-sized mockup visuals (820×765 target area)
   Same styling as the website section mockups
   but scaled for the ad format.
   ───────────────────────────────────────────── */

export function ReferralVisual() {
  return (
    <div className="w-full flex flex-col pt-5 px-5">
      <div className="bg-white rounded-2xl p-8 border border-critter-cream shadow-lg space-y-6">
        <div className="flex items-center justify-between">
          <h4 className="font-subtitle text-xl text-critter-maroon">Referral Dashboard</h4>
          <Badge className="bg-critter-orange/10 text-critter-orange font-body text-base px-4 py-1.5 flex items-center justify-center">Live</Badge>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[
            { value: "47", label: "Total", color: "text-critter-maroon" },
            { value: "66%", label: "Converted", color: "text-green-600" },
            { value: "$9.2K", label: "Revenue", color: "text-critter-orange" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-5 bg-critter-beige/50 rounded-xl">
              <p className={`font-title text-4xl ${stat.color}`}>{stat.value}</p>
              <p className="font-body text-base text-critter-gray mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
        <div>
          <p className="font-subtitle text-base text-critter-maroon mb-3">Referrals (8 weeks)</p>
          <div className="flex items-end gap-2 h-28">
            {[30, 45, 40, 60, 55, 70, 65, 85].map((h, i) => (
              <div key={i} className="flex-1 bg-critter-orange/60 rounded-t" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 p-4 bg-green-50 rounded-xl">
          <TrendingUp className="h-6 w-6 text-green-600 flex-shrink-0" />
          <p className="font-body text-base text-green-700">Referrals up 31% month over month</p>
        </div>
      </div>
    </div>
  );
}

export function TargetedMarketingVisual() {
  return (
    <div className="w-full flex flex-col pt-5 px-5">
      <div className="bg-white rounded-2xl p-8 border border-critter-cream shadow-lg space-y-5">
        <div className="flex items-center justify-between">
          <h4 className="font-subtitle text-xl text-critter-maroon">Audience Builder</h4>
          <Badge className="bg-critter-orange/10 text-critter-orange font-body text-base px-4 py-1.5 flex items-center justify-center">Smart</Badge>
        </div>
        <div className="space-y-4">
          {[
            { label: "Dog owners, no visit 30+ days", count: 47, match: "High" },
            { label: "Cat owners, birthday this month", count: 23, match: "Med" },
            { label: "VIP clients, LTV > $2K", count: 34, match: "High" },
          ].map((seg, i) => (
            <div key={i} className="flex items-center justify-between bg-critter-beige/50 rounded-xl px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-critter-orange/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-critter-orange" />
                </div>
                <span className="font-body text-base text-critter-maroon">{seg.label}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-body text-base text-critter-gray">{seg.count}</span>
                <Badge className={`text-base font-body px-3 py-1 ${seg.match === "High" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>{seg.match}</Badge>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-3 pt-2">
          <Zap className="h-6 w-6 text-critter-orange flex-shrink-0" />
          <span className="font-body text-base text-critter-gray">Auto-segmented from your CRM data</span>
        </div>
      </div>
    </div>
  );
}

export function CommunicationsVisual() {
  return (
    <div className="w-full flex flex-col pt-5 px-5">
      <div className="space-y-5">
        <div className="bg-white rounded-2xl p-7 border border-critter-cream shadow-lg">
          <div className="flex items-center justify-between mb-5">
            <h4 className="font-subtitle text-xl text-critter-maroon">Active Campaigns</h4>
            <Badge className="bg-green-100 text-green-700 text-base font-body px-4 py-1.5 flex items-center justify-center">3 Running</Badge>
          </div>
          <div className="space-y-4">
            {[
              { name: "Birthday Wishes", icon: <Gift className="h-5 w-5" />, sent: 156, open: "81%" },
              { name: "Spring Grooming", icon: <Mail className="h-5 w-5" />, sent: 847, open: "68%" },
              { name: "Win-Back Series", icon: <Heart className="h-5 w-5" />, sent: 43, open: "72%" },
            ].map((c, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-critter-beige/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-critter-orange/10 flex items-center justify-center text-critter-orange">{c.icon}</div>
                  <span className="font-body text-base text-critter-maroon">{c.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-body text-base text-critter-gray">{c.sent} sent</span>
                  <span className="font-subtitle text-base text-critter-orange">{c.open}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl p-7 border border-critter-cream shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="h-5 w-5 text-critter-orange" />
            <span className="font-subtitle text-lg text-critter-maroon">Two-Way Texting</span>
          </div>
          <div className="space-y-3">
            <div className="flex justify-end">
              <div className="bg-critter-orange text-white px-5 py-3 rounded-2xl rounded-br-sm max-w-[75%]">
                <p className="font-body text-base">Max&apos;s grooming is tomorrow at 2pm!</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-critter-cream px-5 py-3 rounded-2xl rounded-bl-sm max-w-[75%]">
                <p className="font-body text-base text-critter-maroon">Thanks! See you then!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DataVisual() {
  return (
    <div className="w-full flex flex-col gap-8 px-4 py-5">
      <div className="flex items-center justify-center gap-6">
        <div className="flex flex-col gap-5">
          {[
            { name: "Time to Pet", status: "Synced", count: "1,247" },
            { name: "Precise Petcare", status: "Synced", count: "834" },
            { name: "CSV Upload", status: "Complete", count: "156" },
          ].map((source, i) => (
            <div key={i} className="bg-white rounded-xl p-5 border border-critter-cream shadow-lg flex items-center gap-4">
              <div className="w-14 h-14 rounded-lg bg-critter-orange/10 flex items-center justify-center">
                <Database className="h-7 w-7 text-critter-orange" />
              </div>
              <div className="flex-1">
                <p className="font-subtitle text-lg text-critter-maroon">{source.name}</p>
                <p className="font-body text-base text-critter-gray">{source.count} records</p>
              </div>
              <Badge className="bg-green-100 text-green-700 text-base font-body px-3 py-1.5">{source.status}</Badge>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-4">
          <ArrowRight className="h-8 w-8 text-critter-orange" />
          <ArrowRight className="h-8 w-8 text-critter-orange" />
          <ArrowRight className="h-8 w-8 text-critter-orange" />
        </div>
        <div className="bg-critter-orange rounded-2xl p-10 text-white text-center shadow-lg">
          <Database className="h-16 w-16 mx-auto mb-4" />
          <p className="font-subtitle text-2xl">Critter CRM</p>
          <p className="font-body text-lg text-white/80">2,237 customers</p>
          <p className="font-body text-lg text-white/80">Auto-deduped</p>
        </div>
      </div>
    </div>
  );
}

export function SetItForgetItVisual() {
  return (
    <div className="w-full flex flex-col pt-5 px-5">
      <div className="bg-white rounded-2xl p-8 border border-critter-cream shadow-lg">
        <h4 className="font-subtitle text-xl text-critter-maroon mb-5">Active Programs</h4>
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: "Birthday Wishes", icon: <Gift className="h-7 w-7" />, enrolled: 312 },
            { name: "Referral Rewards", icon: <Users className="h-7 w-7" />, enrolled: 247 },
            { name: "Win-Back", icon: <Heart className="h-7 w-7" />, enrolled: 43 },
            { name: "Review Request", icon: <Star className="h-7 w-7" />, enrolled: 847 },
          ].map((program, i) => (
            <div key={i} className="p-6 rounded-xl border-2 border-critter-orange bg-critter-orange/5">
              <div className="w-14 h-14 rounded-xl bg-critter-orange text-white flex items-center justify-center mb-4">{program.icon}</div>
              <p className="font-subtitle text-lg text-critter-maroon">{program.name}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="font-body text-base text-critter-gray">{program.enrolled} enrolled</span>
                <Check className="h-5 w-5 text-green-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function UpsellVisual() {
  return (
    <div className="w-full flex flex-col pt-5 px-5">
      <div className="bg-white rounded-2xl p-8 border border-critter-cream shadow-lg space-y-5">
        <h4 className="font-subtitle text-xl text-critter-maroon">Revenue Programs</h4>
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: "Upsell: Add-On Services", icon: <TrendingUp className="h-7 w-7" />, revenue: "$2,340" },
            { name: "Cross-Sell: Grooming", icon: <Star className="h-7 w-7" />, revenue: "$1,870" },
            { name: "Win-Back Campaign", icon: <Heart className="h-7 w-7" />, revenue: "$960" },
            { name: "VIP Loyalty Rewards", icon: <Gift className="h-7 w-7" />, revenue: "$3,250" },
          ].map((program, i) => (
            <div key={i} className="p-6 rounded-xl border-2 border-critter-orange bg-critter-orange/5">
              <div className="w-14 h-14 rounded-xl bg-critter-orange text-white flex items-center justify-center mb-4">{program.icon}</div>
              <p className="font-subtitle text-lg text-critter-maroon">{program.name}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="font-body text-base text-green-600">{program.revenue}</span>
                <Check className="h-5 w-5 text-green-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AutomationToolsVisual() {
  return (
    <div className="w-full flex flex-col pt-5 px-5">
      <div className="bg-white rounded-2xl p-8 border border-critter-cream shadow-lg space-y-6">
        <h4 className="font-subtitle text-xl text-critter-maroon">Key Metrics Dashboard</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 bg-critter-beige/50 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <span className="font-body text-base text-critter-gray">Marketing ROI</span>
            </div>
            <p className="font-title text-5xl text-critter-maroon">4.2x</p>
            <p className="font-body text-base text-green-600 mt-1">↑ 0.8x vs last month</p>
          </div>
          <div className="p-6 bg-critter-beige/50 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-5 w-5 text-critter-orange" />
              <span className="font-body text-base text-critter-gray">Avg Client LTV</span>
            </div>
            <p className="font-title text-5xl text-critter-maroon">$2,847</p>
            <p className="font-body text-base text-green-600 mt-1">↑ 12% this quarter</p>
          </div>
        </div>
        <div>
          <p className="font-subtitle text-base text-critter-maroon mb-3">Campaign Performance</p>
          <div className="flex items-end gap-2 h-24">
            {[35, 50, 42, 58, 48, 65, 55, 72, 62, 80, 75, 88].map((h, i) => (
              <div key={i} className="flex-1 bg-critter-orange/60 rounded-t" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 p-4 bg-green-50 rounded-xl">
          <Check className="h-6 w-6 text-green-600 flex-shrink-0" />
          <p className="font-body text-base text-green-700">All KPIs calculated automatically</p>
        </div>
      </div>
    </div>
  );
}

export function TogoVisual() {
  return (
    <div className="w-full flex flex-col pt-5 px-5">
      <div className="bg-white rounded-2xl p-8 border border-critter-cream shadow-lg space-y-5">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-critter-orange to-amber-500 flex items-center justify-center">
            <Dog className="h-7 w-7 text-white" />
          </div>
          <div>
            <p className="font-subtitle text-xl text-critter-maroon">Togo</p>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="font-body text-base text-critter-gray">Online</span>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-critter-maroon rounded-2xl rounded-br-sm px-6 py-4 max-w-[80%]">
            <p className="font-body text-base text-white">Which services grew fastest last quarter?</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-critter-orange to-amber-500 flex items-center justify-center flex-shrink-0 mt-1">
            <Dog className="h-5 w-5 text-white" />
          </div>
          <div className="bg-critter-beige/50 rounded-2xl rounded-bl-sm px-6 py-5 flex-1">
            <p className="font-body text-base text-critter-maroon mb-4">Here&apos;s your Q4 service growth:</p>
            <div className="space-y-4">
              {[
                { label: "Grooming", pct: "85%", growth: "+34%" },
                { label: "Dog Walking", pct: "65%", growth: "+21%" },
                { label: "Pet Sitting", pct: "45%", growth: "+12%" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="font-body text-base text-critter-gray w-24 flex-shrink-0">{item.label}</span>
                  <div className="flex-1 bg-white rounded-full h-4">
                    <div className="bg-critter-orange rounded-full h-4" style={{ width: item.pct }} />
                  </div>
                  <span className="font-subtitle text-base text-green-600">{item.growth}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function EngageClientsVisual() {
  return (
    <div className="w-full flex flex-col pt-5 px-5">
      <div className="bg-white rounded-2xl p-8 border border-critter-cream shadow-lg mb-5">
        <div className="flex items-center gap-5 mb-6">
          <div className="w-16 h-16 rounded-full bg-critter-maroon text-white flex items-center justify-center font-subtitle text-2xl">SJ</div>
          <div>
            <p className="font-subtitle text-xl text-critter-maroon">Sarah Johnson</p>
            <p className="font-body text-base text-critter-gray flex items-center gap-2">
              <PawPrint className="h-5 w-5 text-critter-orange" /> Max · Golden Retriever
            </p>
          </div>
          <div className="ml-auto flex gap-2">
            <Badge variant="outline" className="text-base border-critter-cream px-3 py-1.5">VIP</Badge>
            <Badge variant="outline" className="text-base border-critter-cream px-3 py-1.5">Monthly</Badge>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[
            { value: "24", label: "Visits" },
            { value: "$2,847", label: "Revenue" },
            { value: "3", label: "Referrals" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-5 bg-critter-beige/50 rounded-xl">
              <p className="font-title text-4xl text-critter-orange">{stat.value}</p>
              <p className="font-body text-base text-critter-gray mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {[
          { icon: <Mail className="h-6 w-6" />, label: "Email" },
          { icon: <Send className="h-6 w-6" />, label: "Text" },
          { icon: <Star className="h-6 w-6" />, label: "Tag" },
        ].map((action, i) => (
          <div key={i} className="bg-white rounded-xl p-5 border border-critter-cream text-center">
            <div className="w-12 h-12 rounded-full bg-critter-orange/10 flex items-center justify-center text-critter-orange mx-auto mb-3">{action.icon}</div>
            <span className="font-body text-base text-critter-gray">{action.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   FUN / ILLUSTRATIVE visuals (Atlassian-inspired)
   Bold shapes, oversized icons, playful compositions
   ───────────────────────────────────────────── */

export function FunReferralVisual() {
  const nodes = [
    { x: -190, y: -110, size: 88, icon: <Users className="h-10 w-10 text-white" /> },
    { x: 190, y: -90, size: 80, icon: <Heart className="h-9 w-9 text-white" /> },
    { x: -170, y: 120, size: 72, icon: <Star className="h-8 w-8 text-white" /> },
    { x: 200, y: 110, size: 84, icon: <Gift className="h-9 w-9 text-white" /> },
    { x: -40, y: -180, size: 68, icon: <TrendingUp className="h-8 w-8 text-white" /> },
    { x: 50, y: 175, size: 76, icon: <Users className="h-8 w-8 text-white" /> },
  ];
  const cx = 250, cy = 190;
  return (
    <div className="relative w-full flex items-center justify-center py-16 px-5 overflow-hidden" style={{ minHeight: 420 }}>
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.2 }}>
        <defs>
          <pattern id="referral-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="14" cy="14" r="1.5" fill="#3F001D" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#referral-dots)" />
      </svg>
      <div className="relative" style={{ width: 500, height: 380 }}>
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
          {nodes.map((node, i) => (
            <line key={i} x1={cx} y1={cy} x2={cx + node.x} y2={cy + node.y} stroke="#E75837" strokeWidth="2.5" strokeDasharray="8 5" opacity="0.4" />
          ))}
        </svg>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full bg-critter-orange flex items-center justify-center shadow-xl z-10">
          <PawPrint className="h-20 w-20 text-white" />
        </div>
        {nodes.map((node, i) => (
          <div key={i} className="absolute" style={{ left: `calc(50% + ${node.x}px - ${node.size / 2}px)`, top: `calc(50% + ${node.y}px - ${node.size / 2}px)`, zIndex: 2 }}>
            <div className="rounded-full bg-critter-maroon flex items-center justify-center shadow-lg" style={{ width: node.size, height: node.size }}>
              {node.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FunTargetedMarketingVisual() {
  return (
    <div className="relative w-full flex items-center justify-center py-16 px-5 overflow-hidden" style={{ minHeight: 420 }}>
      <div className="relative flex items-center justify-center">
        <div className="rounded-full border-[3px] border-critter-orange/20 flex items-center justify-center" style={{ width: 400, height: 400 }}>
          <div className="rounded-full border-[3px] border-critter-orange/30 flex items-center justify-center" style={{ width: 300, height: 300 }}>
            <div className="rounded-full border-[3px] border-critter-orange/50 flex items-center justify-center" style={{ width: 200, height: 200 }}>
              <div className="w-32 h-32 rounded-full bg-critter-orange flex items-center justify-center shadow-xl">
                <Zap className="h-16 w-16 text-white" />
              </div>
            </div>
          </div>
        </div>
        {[
          { x: -210, y: -50, label: "Dog owners", bg: "bg-critter-maroon" },
          { x: 130, y: -160, label: "VIP clients", bg: "bg-critter-orange" },
          { x: 180, y: 80, label: "Cat lovers", bg: "bg-critter-maroon" },
          { x: -120, y: 160, label: "New leads", bg: "bg-critter-orange" },
        ].map((badge, i) => (
          <div key={i} className={`absolute ${badge.bg} text-white font-subtitle px-5 py-2.5 rounded-full shadow-lg`}
            style={{ fontSize: 16, left: `calc(50% + ${badge.x}px)`, top: `calc(50% + ${badge.y}px)`, transform: "translate(-50%, -50%)" }}>
            {badge.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export function FunCommunicationsVisual() {
  return (
    <div className="relative w-full flex items-center justify-center py-12 px-5 overflow-hidden" style={{ minHeight: 420 }}>
      <div className="relative" style={{ width: 560, height: 380 }}>
        {[
          { x: 20, y: 0, w: 360, bg: "bg-critter-orange", text: "Happy birthday, Luna! 🎉", color: "text-white" },
          { x: 180, y: 85, w: 340, bg: "bg-critter-maroon", text: "Your grooming is tomorrow!", color: "text-white" },
          { x: 10, y: 175, w: 380, bg: "bg-white border-2 border-critter-cream", text: "Thanks! See you at 2pm!", color: "text-critter-maroon" },
          { x: 160, y: 265, w: 320, bg: "bg-critter-orange/90", text: "Max loved his walk today 🐕", color: "text-white" },
        ].map((msg, i) => (
          <div key={i} className={`absolute ${msg.bg} rounded-2xl px-8 py-5 shadow-lg`}
            style={{ left: msg.x, top: msg.y, width: msg.w }}>
            <p className={`font-body ${msg.color}`} style={{ fontSize: 18 }}>{msg.text}</p>
          </div>
        ))}
        <div className="absolute top-5 w-16 h-16 rounded-full bg-critter-maroon/10 flex items-center justify-center" style={{ right: -10 }}>
          <Mail className="h-8 w-8 text-critter-maroon" />
        </div>
        <div className="absolute bottom-4 w-16 h-16 rounded-full bg-critter-orange/10 flex items-center justify-center" style={{ left: -10 }}>
          <MessageSquare className="h-8 w-8 text-critter-orange" />
        </div>
      </div>
    </div>
  );
}

export function FunDataVisual() {
  return (
    <div className="relative w-full flex items-center justify-center py-14 px-5 overflow-hidden" style={{ minHeight: 400 }}>
      <div className="relative flex items-center gap-10">
        <div className="flex flex-col gap-5">
          {[
            { color: "bg-critter-maroon", icon: <Database className="h-12 w-12 text-white" /> },
            { color: "bg-critter-orange", icon: <Database className="h-12 w-12 text-white" /> },
            { color: "bg-critter-maroon/80", icon: <Database className="h-12 w-12 text-white" /> },
          ].map((src, i) => (
            <div key={i} className={`${src.color} rounded-2xl flex items-center justify-center shadow-lg`} style={{ width: 100, height: 100 }}>
              {src.icon}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6 items-center">
          <svg width="120" height="260" viewBox="0 0 120 260">
            <path d="M0,30 Q60,30 60,130 Q60,230 120,230" stroke="#E75837" strokeWidth="3" fill="none" strokeDasharray="8 4" />
            <path d="M0,130 L120,130" stroke="#E75837" strokeWidth="3" fill="none" strokeDasharray="8 4" />
            <path d="M0,230 Q60,230 60,130 Q60,30 120,30" stroke="#E75837" strokeWidth="3" fill="none" strokeDasharray="8 4" />
          </svg>
        </div>
        <div className="bg-critter-orange rounded-3xl flex flex-col items-center justify-center shadow-xl" style={{ width: 180, height: 180, transform: "rotate(3deg)" }}>
          <PawPrint className="h-20 w-20 text-white mb-3" />
          <p className="font-subtitle text-xl text-white">Critter</p>
        </div>
      </div>
    </div>
  );
}

export function FunSetForgetVisual() {
  return (
    <div className="relative w-full flex items-center justify-center py-12 px-5 overflow-hidden" style={{ minHeight: 420 }}>
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.1 }}>
        <defs>
          <pattern id="setforget-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3F001D" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#setforget-grid)" />
      </svg>
      <div className="relative grid grid-cols-2 gap-6">
        {[
          { icon: <Gift className="h-12 w-12 text-white" />, label: "Birthdays", bg: "bg-critter-orange", rotate: -3 },
          { icon: <Star className="h-12 w-12 text-white" />, label: "Reviews", bg: "bg-critter-maroon", rotate: 2 },
          { icon: <Heart className="h-12 w-12 text-white" />, label: "Win-back", bg: "bg-critter-maroon", rotate: 1 },
          { icon: <Users className="h-12 w-12 text-white" />, label: "Referrals", bg: "bg-critter-orange", rotate: -2 },
        ].map((card, i) => (
          <div key={i} className={`${card.bg} rounded-2xl flex flex-col items-center gap-4 shadow-xl`} style={{ width: 200, padding: 28, transform: `rotate(${card.rotate}deg)` }}>
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
              {card.icon}
            </div>
            <p className="font-subtitle text-xl text-white">{card.label}</p>
            <div className="flex items-center gap-1.5">
              <Check className="h-6 w-6 text-white/80" />
              <span className="font-body text-base text-white/80">Auto</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FunUpsellVisual() {
  return (
    <div className="relative w-full flex items-center justify-center py-12 px-5 overflow-hidden" style={{ minHeight: 420 }}>
      <div className="flex items-end gap-7">
        {[
          { h: 140, label: "$960", color: "bg-critter-maroon/60", round: "rounded-t-2xl" },
          { h: 200, label: "$1.8K", color: "bg-critter-maroon/80", round: "rounded-t-2xl" },
          { h: 270, label: "$2.3K", color: "bg-critter-orange/80", round: "rounded-t-3xl" },
          { h: 340, label: "$3.2K", color: "bg-critter-orange", round: "rounded-t-3xl" },
        ].map((bar, i) => (
          <div key={i} className="flex flex-col items-center gap-3">
            <span className="font-subtitle text-xl text-critter-maroon">{bar.label}</span>
            <div className={`${bar.color} ${bar.round} shadow-lg flex items-end justify-center pb-5`} style={{ width: 105, height: bar.h }}>
              {i === 3 && <TrendingUp className="h-12 w-12 text-white" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FunAutomationVisual() {
  return (
    <div className="relative w-full flex items-center justify-center py-14 px-5 overflow-hidden" style={{ minHeight: 420 }}>
      <div className="relative" style={{ width: 480, height: 400 }}>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[6px] border-critter-orange flex items-center justify-center" style={{ width: 200, height: 200 }}>
          <div className="w-36 h-36 rounded-full bg-critter-orange flex items-center justify-center shadow-xl">
            <Zap className="h-18 w-18 text-white" style={{ width: 72, height: 72 }} />
          </div>
        </div>
        {[
          { x: -120, y: -130, icon: <Mail className="h-8 w-8 text-white" />, bg: "bg-critter-maroon", size: 68 },
          { x: 150, y: -110, icon: <TrendingUp className="h-8 w-8 text-white" />, bg: "bg-critter-maroon", size: 64 },
          { x: 160, y: 100, icon: <Users className="h-8 w-8 text-white" />, bg: "bg-critter-orange/80", size: 68 },
          { x: -140, y: 110, icon: <Heart className="h-7 w-7 text-white" />, bg: "bg-critter-orange/80", size: 60 },
          { x: 0, y: -175, icon: <Star className="h-7 w-7 text-white" />, bg: "bg-critter-maroon/80", size: 56 },
          { x: 10, y: 175, icon: <Gift className="h-7 w-7 text-white" />, bg: "bg-critter-maroon/80", size: 56 },
        ].map((orb, i) => (
          <div key={i} className={`absolute ${orb.bg} rounded-full flex items-center justify-center shadow-lg`}
            style={{ width: orb.size, height: orb.size, left: `calc(50% + ${orb.x}px - ${orb.size / 2}px)`, top: `calc(50% + ${orb.y}px - ${orb.size / 2}px)` }}>
            {orb.icon}
          </div>
        ))}
      </div>
    </div>
  );
}

export function FunTogoVisual() {
  return (
    <div className="relative w-full flex items-center justify-center py-14 px-5 overflow-hidden" style={{ minHeight: 420 }}>
      <div className="relative" style={{ width: 460, height: 400 }}>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-critter-orange to-amber-500 flex items-center justify-center shadow-2xl z-10" style={{ width: 160, height: 160 }}>
          <Dog className="h-20 w-20 text-white" />
        </div>
        {[
          { x: -180, y: -60, text: "+34%", sub: "growth" },
          { x: 140, y: -120, text: "4.2x", sub: "ROI" },
          { x: 170, y: 80, text: "$2.8K", sub: "LTV" },
          { x: -160, y: 110, text: "847", sub: "clients" },
        ].map((bubble, i) => (
          <div key={i} className="absolute bg-white rounded-2xl px-5 py-4 shadow-lg border border-critter-cream text-center"
            style={{ left: `calc(50% + ${bubble.x}px)`, top: `calc(50% + ${bubble.y}px)`, transform: "translate(-50%, -50%)" }}>
            <p className="font-title text-3xl text-critter-orange">{bubble.text}</p>
            <p className="font-body text-sm text-critter-gray">{bubble.sub}</p>
          </div>
        ))}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 5 }}>
          {[
            { x1: 230, y1: 200, x2: 50, y2: 140 },
            { x1: 230, y1: 200, x2: 370, y2: 80 },
            { x1: 230, y1: 200, x2: 400, y2: 280 },
            { x1: 230, y1: 200, x2: 70, y2: 310 },
          ].map((line, i) => (
            <line key={i} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="#E75837" strokeWidth="2.5" strokeDasharray="8 5" opacity="0.3" />
          ))}
        </svg>
      </div>
    </div>
  );
}

export function FunEngageVisual() {
  const paws = [
    { x: 20, y: 30, size: 40, opacity: 0.2, rotate: -20 },
    { x: 150, y: 70, size: 32, opacity: 0.15, rotate: 10 },
    { x: 340, y: 20, size: 44, opacity: 0.18, rotate: -5 },
    { x: 430, y: 130, size: 30, opacity: 0.15, rotate: 25 },
    { x: 60, y: 280, size: 36, opacity: 0.18, rotate: -15 },
    { x: 400, y: 290, size: 42, opacity: 0.2, rotate: 8 },
    { x: 200, y: 330, size: 28, opacity: 0.15, rotate: -30 },
    { x: 440, y: 50, size: 26, opacity: 0.13, rotate: 15 },
  ];
  return (
    <div className="relative w-full flex items-center justify-center py-12 px-5 overflow-hidden" style={{ minHeight: 420 }}>
      <div className="relative" style={{ width: 500, height: 380 }}>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 380" fill="none" xmlns="http://www.w3.org/2000/svg">
          {paws.map((paw, i) => (
            <g key={i} transform={`translate(${paw.x + paw.size / 2}, ${paw.y + paw.size / 2}) rotate(${paw.rotate}) scale(${paw.size / 24})`} opacity={paw.opacity} stroke="#3F001D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="0" cy="-8" r="2" />
              <circle cx="-6.5" cy="-3.5" r="2" />
              <circle cx="6.5" cy="-3.5" r="2" />
              <path d="M-3.5 2.5 A4.5 4.5 0 0 0 3.5 2.5 A4.5 4.5 0 0 0 0 7 A4.5 4.5 0 0 0 -3.5 2.5Z" />
            </g>
          ))}
        </svg>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-xl border border-critter-cream text-center" style={{ width: 260, padding: 32 }}>
          <div className="w-24 h-24 rounded-full bg-critter-maroon mx-auto mb-4 flex items-center justify-center">
            <PawPrint className="h-12 w-12 text-white" />
          </div>
          <p className="font-subtitle text-2xl text-critter-maroon">Max</p>
          <p className="font-body text-base text-critter-gray mt-1">Golden Retriever</p>
          <div className="flex justify-center gap-3 mt-4">
            <div className="w-12 h-12 rounded-full bg-critter-orange flex items-center justify-center"><Mail className="h-6 w-6 text-white" /></div>
            <div className="w-12 h-12 rounded-full bg-critter-maroon flex items-center justify-center"><Send className="h-6 w-6 text-white" /></div>
            <div className="w-12 h-12 rounded-full bg-critter-orange flex items-center justify-center"><Heart className="h-6 w-6 text-white" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Ad layout types & data
   ───────────────────────────────────────────── */

export interface Ad {
  id: string;
  layout: "left" | "centered";
  headline: string;
  subtitle?: string;
  subHero?: string;
  cta?: string;
  Visual: React.ComponentType;
}

export const ads: Ad[] = [
  {
    id: "referral",
    layout: "left",
    headline: "Pet parents refer you.\nYour business grows.",
    subHero: "Critter makes pet care business growth easy with automated referral programs.",
    cta: "Start for free",
    Visual: ReferralVisual,
  },
  {
    id: "targeted-marketing",
    layout: "left",
    headline: "Use pet care data for\ntargeted marketing.",
    subHero: "Critter makes pet care business growth easy with highly targeted email and text campaigns.",
    cta: "Start for free",
    Visual: TargetedMarketingVisual,
  },
  {
    id: "communications",
    layout: "left",
    headline: "Automate pet care\ncommunications.",
    subHero: "Critter makes pet care business growth easy using your actual booking data to drive timely and effective messages across channels.",
    cta: "Start for free",
    Visual: CommunicationsVisual,
  },
  {
    id: "good-data",
    layout: "centered",
    headline: "Real automation\nrequires good data.",
    subHero: "Critter\u2019s growth platform has your pet care data. Others don\u2019t.",
    cta: "See the difference",
    Visual: DataVisual,
  },
  {
    id: "set-forget",
    layout: "centered",
    headline: "Set it and forget it\nmarketing for pet\ncare businesses.",
    subHero: "Automated programs that run while you focus on what matters.",
    cta: "Set it up today",
    Visual: SetItForgetItVisual,
  },
  {
    id: "upsell",
    layout: "centered",
    headline: "Automated upsell\nthat feels personal for\npet care businesses.",
    subHero: "Surface revenue opportunities hiding in your client data.",
    cta: "Grow your business today",
    Visual: UpsellVisual,
  },
  {
    id: "automation-tools",
    layout: "centered",
    headline: "Automation tools for\npet care business\ngrowth.",
    subHero: "Track ROI, client lifetime value, and campaign performance automatically.",
    cta: "Try today",
    Visual: AutomationToolsVisual,
  },
  {
    id: "togo",
    layout: "centered",
    headline: "Meet Togo,\nan AI agent that\nactually knows your\npet care business.",
    subHero: "Ask questions, get insights, and draft campaigns from your own data.",
    cta: "Meet Togo",
    Visual: TogoVisual,
  },
  {
    id: "engage",
    layout: "centered",
    headline: "Engage pet care clients.\nKeep them happy.\nGrow your business.",
    subHero: "Every client profile, interaction, and touchpoint in one place.",
    cta: "Learn More",
    Visual: EngageClientsVisual,
  },
];

export const adsFun: Ad[] = [
  {
    id: "fun-referral",
    layout: "centered",
    headline: "Pet parents refer you.\nYour business grows.",
    subHero: "Critter makes pet care business growth easy with automated referral programs.",
    cta: "Start for free",
    Visual: FunReferralVisual,
  },
  {
    id: "fun-targeted-marketing",
    layout: "centered",
    headline: "Use pet care data for\ntargeted marketing.",
    subHero: "Critter makes pet care business growth easy with highly targeted email and text campaigns.",
    cta: "Start for free",
    Visual: FunTargetedMarketingVisual,
  },
  {
    id: "fun-communications",
    layout: "centered",
    headline: "Automate pet care\ncommunications.",
    subHero: "Critter makes pet care business growth easy using your actual booking data to drive timely and effective messages across channels.",
    cta: "Start for free",
    Visual: FunCommunicationsVisual,
  },
  {
    id: "fun-good-data",
    layout: "centered",
    headline: "Real automation\nrequires good data.",
    subHero: "Critter\u2019s growth platform has your pet care data. Others don\u2019t.",
    cta: "See the difference",
    Visual: FunDataVisual,
  },
  {
    id: "fun-set-forget",
    layout: "centered",
    headline: "Set it and forget it\nmarketing for pet\ncare businesses.",
    subHero: "Automated programs that run while you focus on what matters.",
    cta: "Set it up today",
    Visual: FunSetForgetVisual,
  },
  {
    id: "fun-upsell",
    layout: "centered",
    headline: "Automated upsell\nthat feels personal for\npet care businesses.",
    subHero: "Surface revenue opportunities hiding in your client data.",
    cta: "Grow your business today",
    Visual: FunUpsellVisual,
  },
  {
    id: "fun-automation-tools",
    layout: "centered",
    headline: "Automation tools for\npet care business\ngrowth.",
    subHero: "Track ROI, client lifetime value, and campaign performance automatically.",
    cta: "Try today",
    Visual: FunAutomationVisual,
  },
  {
    id: "fun-togo",
    layout: "centered",
    headline: "Meet Togo,\nan AI agent that\nactually knows your\npet care business.",
    subHero: "Ask questions, get insights, and draft campaigns from your own data.",
    cta: "Meet Togo",
    Visual: FunTogoVisual,
  },
  {
    id: "fun-engage",
    layout: "centered",
    headline: "Engage pet care clients.\nKeep them happy.\nGrow your business.",
    subHero: "Every client profile, interaction, and touchpoint in one place.",
    cta: "Learn More",
    Visual: FunEngageVisual,
  },
];

export const allAds = [...ads, ...adsFun];

export const conceptNames = [
  "referral",
  "targeted-marketing",
  "communications",
  "good-data",
  "set-forget",
  "upsell",
  "automation-tools",
  "togo",
  "engage",
];

export function exportFileName(ad: Ad): string {
  const mockupIdx = ads.indexOf(ad);
  const funIdx = adsFun.indexOf(ad);
  if (mockupIdx >= 0) {
    const num = String(mockupIdx + 1).padStart(2, "0");
    return `${num}-${conceptNames[mockupIdx]}-mockup`;
  }
  if (funIdx >= 0) {
    const num = String(funIdx + 1).padStart(2, "0");
    return `${num}-${conceptNames[funIdx]}-fun`;
  }
  return `critter-ad-${ad.id}`;
}

/* ─────────────────────────────────────────────
   Single Ad renderer (1080×1350)
   ───────────────────────────────────────────── */

export function AdCanvas({ ad, idPrefix = "ad", forExport = false }: { ad: Ad; idPrefix?: string; forExport?: boolean }) {
  const { Visual } = ad;

  const visualStyle = forExport
    ? {
        width: 688,
        height: 560,
        transform: "scale(1.25)" as const,
        transformOrigin: "top left" as const,
        boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
      }
    : {
        width: 688,
        zoom: 1.25,
        filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.08))",
      };

  const visualContainerStyle = forExport
    ? { width: 860, height: 700, overflow: "hidden" as const }
    : { width: 860 };

  return (
    <div
      id={`${idPrefix}-${ad.id}`}
      className="relative flex flex-col items-center overflow-hidden"
      style={{
        width: 1080,
        height: 1350,
        background: "radial-gradient(ellipse at 50% 30%, #fff8f0 0%, #f5ede4 50%, #ede3d6 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 140,
          top: 600,
          width: 800,
          height: 600,
          background: "radial-gradient(ellipse, rgba(231, 88, 55, 0.12) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      {/* Logo */}
      <div style={{ paddingTop: 56 }}>
        <Image
          src="/images/critter-logo.png"
          alt="Critter"
          width={143}
          height={35}
          unoptimized
        />
      </div>

      {/* Headline */}
      <div style={{ paddingTop: 32, paddingLeft: 90, paddingRight: 90, width: "100%" }}>
        <h2
          className="font-title text-black leading-[1.1] text-center"
          style={{ fontSize: 64, whiteSpace: "pre-line" }}
        >
          {ad.headline}
        </h2>
      </div>

      {/* Sub-hero text */}
      {ad.subHero && (
        <div style={{ paddingTop: 20, paddingLeft: 110, paddingRight: 110, width: "100%" }}>
          <p className="font-body text-critter-gray text-center leading-relaxed" style={{ fontSize: 26 }}>
            {ad.subHero}
          </p>
        </div>
      )}

      {/* CTA pill button */}
      {ad.cta && (
        <div style={{ paddingTop: 28 }}>
          <div
            className="bg-critter-orange text-white font-subtitle flex items-center justify-center"
            style={{
              fontSize: 22,
              paddingLeft: 52,
              paddingRight: 52,
              height: 60,
              borderRadius: 50,
              boxShadow: "0 4px 16px rgba(231, 88, 55, 0.3)",
            }}
          >
            {ad.cta}
          </div>
        </div>
      )}

      {/* Visual area */}
      <div style={{ ...visualContainerStyle, marginTop: 32 }}>
        <div className="rounded-2xl" style={visualStyle}>
          <Visual />
        </div>
      </div>
    </div>
  );
}
