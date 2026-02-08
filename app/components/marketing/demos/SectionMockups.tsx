"use client";

import { Badge } from "@/app/components/ui/badge";
import {
  Check,
  Database,
  ArrowRight,
  Users,
  Mail,
  PawPrint,
  Calendar,
  ClipboardList,
  Link2,
  MessageSquare,
  Zap,
  Star,
  Heart,
  TrendingUp,
  Send,
  Gift,
} from "lucide-react";

/* ─── Connect Your Data ─── */
export function ConnectDataMockup() {
  return (
    <div className="w-full h-full flex flex-col justify-center gap-3 p-2">
      {/* Source cards flowing into Critter */}
      <div className="flex items-center justify-center gap-3">
        <div className="flex flex-col gap-2">
          {[
            { name: "Time to Pet", status: "Synced", count: "1,247" },
            { name: "Precise Petcare", status: "Synced", count: "834" },
            { name: "CSV Upload", status: "Complete", count: "156" },
          ].map((source, i) => (
            <div key={i} className="bg-white rounded-lg p-2 border border-critter-cream shadow-sm flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-critter-orange/10 flex items-center justify-center">
                <Database className="h-3 w-3 text-critter-orange" />
              </div>
              <div className="flex-1">
                <p className="font-subtitle text-xs text-critter-maroon">{source.name}</p>
                <p className="font-body text-xs text-critter-gray">{source.count} records</p>
              </div>
              <Badge className="bg-green-100 text-green-700 text-xs font-body">{source.status}</Badge>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-1">
          <ArrowRight className="h-5 w-5 text-critter-orange" />
          <ArrowRight className="h-5 w-5 text-critter-orange" />
          <ArrowRight className="h-5 w-5 text-critter-orange" />
        </div>
        <div className="bg-critter-orange rounded-xl p-4 text-white text-center shadow-lg">
          <Database className="h-8 w-8 mx-auto mb-2" />
          <p className="font-subtitle text-sm">Critter CRM</p>
          <p className="font-body text-xs text-white/80">2,237 customers</p>
          <p className="font-body text-xs text-white/80">Auto-deduped</p>
        </div>
      </div>
      <div className="text-center">
        <p className="font-body text-xs text-critter-gray">Automatic sync · Auto-dedup · Zero manual entry</p>
      </div>
    </div>
  );
}

/* ─── Capture Leads ─── */
export function CaptureLeadsMockup() {
  return (
    <div className="w-full h-full flex flex-col justify-center p-2">
      <div className="grid grid-cols-2 gap-3">
        {/* Lead Form */}
        <div className="border-2 border-critter-orange rounded-xl overflow-hidden">
          <div className="bg-critter-orange px-3 py-1.5">
            <p className="font-subtitle text-xs text-white text-center">New Client Special</p>
          </div>
          <div className="p-3 space-y-2 bg-white">
            <div className="h-7 bg-critter-beige/50 rounded-lg border border-critter-cream flex items-center px-2 gap-2">
              <Users className="h-3 w-3 text-critter-gray" />
              <span className="font-body text-xs text-critter-gray/60">Your name</span>
            </div>
            <div className="h-7 bg-critter-beige/50 rounded-lg border border-critter-cream flex items-center px-2 gap-2">
              <Mail className="h-3 w-3 text-critter-gray" />
              <span className="font-body text-xs text-critter-gray/60">Email</span>
            </div>
            <div className="h-7 bg-critter-beige/50 rounded-lg border border-critter-cream flex items-center px-2 gap-2">
              <PawPrint className="h-3 w-3 text-critter-gray" />
              <span className="font-body text-xs text-critter-gray/60">Pet&apos;s name</span>
            </div>
            <div className="h-7 bg-critter-orange rounded-lg flex items-center justify-center">
              <span className="font-subtitle text-xs text-white">Get Started →</span>
            </div>
          </div>
        </div>

        {/* Meet & Greet + Referral */}
        <div className="space-y-3">
          <div className="border-2 border-critter-cream rounded-xl overflow-hidden bg-white">
            <div className="px-3 py-2 flex items-center gap-2">
              <Calendar className="h-4 w-4 text-critter-orange" />
              <span className="font-subtitle text-xs text-critter-maroon">Meet & Greet</span>
            </div>
            <div className="px-3 pb-2">
              <div className="grid grid-cols-5 gap-1">
                {["M", "T", "W", "T", "F"].map((day, i) => (
                  <div key={i} className={`py-1 rounded text-center ${i === 2 ? "bg-critter-orange text-white" : "bg-critter-beige"}`}>
                    <span className="font-body text-xs">{day}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-2 border-critter-cream rounded-xl p-3 bg-white">
            <div className="flex items-center gap-2 mb-2">
              <Link2 className="h-4 w-4 text-critter-orange" />
              <span className="font-subtitle text-xs text-critter-maroon">Referral Link</span>
            </div>
            <div className="bg-critter-beige/50 rounded-lg p-2 flex items-center gap-1">
              <span className="font-body text-xs text-critter-gray truncate">critter.pet/ref/sarah</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Engage Your Clients ─── */
export function EngageClientsMockup() {
  return (
    <div className="w-full h-full flex flex-col justify-center p-2">
      <div className="space-y-3">
        {/* Active Campaigns */}
        <div className="bg-white rounded-xl p-3 border border-critter-cream shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-subtitle text-xs text-critter-maroon">Active Campaigns</h4>
            <Badge className="bg-green-100 text-green-700 text-xs font-body">3 Running</Badge>
          </div>
          <div className="space-y-2">
            {[
              { name: "Birthday Wishes", icon: <Gift className="h-3 w-3" />, sent: 156, open: "81%" },
              { name: "Spring Grooming", icon: <Mail className="h-3 w-3" />, sent: 847, open: "68%" },
              { name: "Win-Back Series", icon: <Heart className="h-3 w-3" />, sent: 43, open: "72%" },
            ].map((c, i) => (
              <div key={i} className="flex items-center justify-between p-2 bg-critter-beige/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-critter-orange/10 flex items-center justify-center text-critter-orange">
                    {c.icon}
                  </div>
                  <span className="font-body text-xs text-critter-maroon">{c.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-body text-xs text-critter-gray">{c.sent} sent</span>
                  <span className="font-subtitle text-xs text-critter-orange">{c.open}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SMS Preview */}
        <div className="bg-white rounded-xl p-3 border border-critter-cream shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <MessageSquare className="h-3 w-3 text-critter-orange" />
            <span className="font-subtitle text-xs text-critter-maroon">Two-Way Texting</span>
          </div>
          <div className="space-y-1.5">
            <div className="flex justify-end">
              <div className="bg-critter-orange text-white px-3 py-1.5 rounded-2xl rounded-br-sm max-w-[80%]">
                <p className="font-body text-xs">Max&apos;s grooming is tomorrow at 2pm! 🐕</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-critter-cream px-3 py-1.5 rounded-2xl rounded-bl-sm max-w-[80%]">
                <p className="font-body text-xs text-critter-maroon">Thanks! See you then!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── CRM-specific sections ─── */

export function PersonalTouchMockup() {
  return (
    <div className="w-full h-full flex flex-col justify-center p-2">
      <div className="bg-white rounded-xl p-3 border border-critter-cream shadow-sm mb-3">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-critter-maroon text-white flex items-center justify-center font-subtitle text-sm">SJ</div>
          <div>
            <p className="font-subtitle text-sm text-critter-maroon">Sarah Johnson</p>
            <p className="font-body text-xs text-critter-gray flex items-center gap-1">
              <PawPrint className="h-3 w-3 text-critter-orange" /> Max · Golden Retriever
            </p>
          </div>
          <div className="ml-auto flex gap-1">
            <Badge variant="outline" className="text-xs border-critter-cream">VIP</Badge>
            <Badge variant="outline" className="text-xs border-critter-cream">Monthly</Badge>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="text-center p-2 bg-critter-beige/50 rounded-lg">
            <p className="font-title text-lg text-critter-orange">24</p>
            <p className="font-body text-xs text-critter-gray">Visits</p>
          </div>
          <div className="text-center p-2 bg-critter-beige/50 rounded-lg">
            <p className="font-title text-lg text-critter-orange">$2,847</p>
            <p className="font-body text-xs text-critter-gray">Revenue</p>
          </div>
          <div className="text-center p-2 bg-critter-beige/50 rounded-lg">
            <p className="font-title text-lg text-critter-orange">3</p>
            <p className="font-body text-xs text-critter-gray">Referrals</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { icon: <Mail className="h-3 w-3" />, label: "Email" },
          { icon: <Send className="h-3 w-3" />, label: "Text" },
          { icon: <Star className="h-3 w-3" />, label: "Tag" },
        ].map((action, i) => (
          <div key={i} className="bg-white rounded-lg p-2 border border-critter-cream text-center cursor-pointer hover:bg-critter-beige/50 transition-colors">
            <div className="w-6 h-6 rounded-full bg-critter-orange/10 flex items-center justify-center text-critter-orange mx-auto mb-1">
              {action.icon}
            </div>
            <span className="font-body text-xs text-critter-gray">{action.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AutomationMockup() {
  return (
    <div className="w-full h-full flex flex-col justify-center p-2">
      <div className="bg-white rounded-xl p-4 border border-critter-cream shadow-sm">
        <h4 className="font-subtitle text-sm text-critter-maroon mb-3">Active Programs</h4>
        <div className="grid grid-cols-2 gap-2">
          {[
            { name: "Birthday Wishes", icon: <Gift className="h-4 w-4" />, enrolled: 312, active: true },
            { name: "Referral Rewards", icon: <Users className="h-4 w-4" />, enrolled: 247, active: true },
            { name: "Win-Back", icon: <Heart className="h-4 w-4" />, enrolled: 43, active: true },
            { name: "Review Request", icon: <Star className="h-4 w-4" />, enrolled: 847, active: true },
          ].map((program, i) => (
            <div key={i} className="p-3 rounded-xl border-2 border-critter-orange bg-critter-orange/5">
              <div className="w-8 h-8 rounded-lg bg-critter-orange text-white flex items-center justify-center mb-2">
                {program.icon}
              </div>
              <p className="font-subtitle text-xs text-critter-maroon">{program.name}</p>
              <div className="flex items-center justify-between mt-1">
                <span className="font-body text-xs text-critter-gray">{program.enrolled} enrolled</span>
                <Check className="h-3 w-3 text-green-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DataInsightsMockup() {
  return (
    <div className="w-full h-full flex flex-col justify-center p-2">
      <div className="bg-white rounded-xl p-4 border border-critter-cream shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-subtitle text-sm text-critter-maroon">Business Insights</h4>
          <Badge className="bg-critter-orange/10 text-critter-orange font-body text-xs">Live</Badge>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-critter-beige/50 rounded-xl">
            <div className="flex items-center gap-1 mb-1">
              <TrendingUp className="h-3 w-3 text-green-600" />
              <span className="font-body text-xs text-critter-gray">Revenue MTD</span>
            </div>
            <p className="font-title text-xl text-critter-maroon">$24,580</p>
            <p className="font-body text-xs text-green-600">↑ 12% vs last month</p>
          </div>
          <div className="p-3 bg-critter-beige/50 rounded-xl">
            <div className="flex items-center gap-1 mb-1">
              <Users className="h-3 w-3 text-critter-orange" />
              <span className="font-body text-xs text-critter-gray">Active Clients</span>
            </div>
            <p className="font-title text-xl text-critter-maroon">847</p>
            <p className="font-body text-xs text-green-600">↑ 23 this month</p>
          </div>
        </div>
        {/* Mini chart bars */}
        <div>
          <p className="font-subtitle text-xs text-critter-maroon mb-2">Revenue Trend (12 weeks)</p>
          <div className="flex items-end gap-1 h-12">
            {[40, 55, 45, 60, 52, 68, 58, 72, 65, 78, 85, 92].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-critter-orange/60 rounded-t-sm hover:bg-critter-orange transition-colors"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
          <Zap className="h-4 w-4 text-green-600" />
          <p className="font-body text-xs text-green-700">Revenue trending 12% above last month</p>
        </div>
      </div>
    </div>
  );
}
