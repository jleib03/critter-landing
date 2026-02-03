"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/app/components/ui/badge";
import {
  PawPrint,
  Check,
  UserCheck,
  AlertCircle,
  Heart,
  ChevronRight,
  Star,
  Calendar,
  Mail,
  Phone,
} from "lucide-react";

const lifecycleStages = [
  { stage: "New Lead", count: 23, color: "bg-critter-blue", icon: <UserCheck className="h-4 w-4" />, action: "Welcome email in 2h" },
  { stage: "Active Client", count: 847, color: "bg-green-500", icon: <Check className="h-4 w-4" />, action: "Engagement on track" },
  { stage: "At Risk", count: 43, color: "bg-yellow-500", icon: <AlertCircle className="h-4 w-4" />, action: "Win-back triggered" },
  { stage: "VIP", count: 89, color: "bg-critter-orange", icon: <Star className="h-4 w-4" />, action: "Loyalty rewards active" },
];

const customerProfile = {
  name: "Sarah Johnson",
  email: "sarah.j@email.com",
  phone: "(555) 234-5678",
  pet: "Max",
  breed: "Golden Retriever",
  tags: ["VIP", "Monthly", "Referrer"],
  stats: { visits: 24, revenue: "$2,847", referrals: 3 },
  timeline: [
    { action: "Grooming completed", time: "2 days ago", type: "visit" },
    { action: "Birthday email sent", time: "1 week ago", type: "email" },
    { action: "Referred Mike Chen", time: "2 weeks ago", type: "referral" },
    { action: "VIP status achieved", time: "1 month ago", type: "milestone" },
  ],
};

export default function CRMHeroDemo() {
  const [showProfile, setShowProfile] = useState(false);
  const [visibleTimeline, setVisibleTimeline] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setShowProfile(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showProfile && visibleTimeline < customerProfile.timeline.length) {
      const timer = setTimeout(() => setVisibleTimeline((v) => v + 1), 600);
      return () => clearTimeout(timer);
    }
  }, [showProfile, visibleTimeline]);

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
          {!showProfile ? (
            /* Lifecycle Overview */
            <div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-subtitle text-sm text-critter-maroon">Customer Lifecycle</h3>
                  <Badge className="bg-green-100 text-green-700 font-body text-xs">1,002 Total</Badge>
                </div>
                <div className="space-y-2">
                  {lifecycleStages.map((stage, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 bg-critter-beige/50 rounded-lg cursor-pointer hover:bg-critter-cream/50 transition-colors group"
                      onClick={() => setShowProfile(true)}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-lg ${stage.color} text-white flex items-center justify-center`}>
                          {stage.icon}
                        </div>
                        <div>
                          <p className="font-subtitle text-xs text-critter-maroon">{stage.stage}</p>
                          <p className="font-body text-xs text-critter-gray">{stage.count} customers</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-body text-xs text-critter-orange hidden sm:inline">{stage.action}</span>
                        <ChevronRight className="h-3 w-3 text-critter-gray opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Customer Profile */
            <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-in fade-in slide-in-from-right-4 duration-500">
              {/* Profile Header */}
              <div className="px-4 py-3 border-b border-critter-cream flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-critter-maroon text-white flex items-center justify-center font-subtitle text-sm">
                    SJ
                  </div>
                  <div>
                    <p className="font-subtitle text-sm text-critter-maroon">{customerProfile.name}</p>
                    <p className="font-body text-xs text-critter-gray flex items-center gap-1">
                      <PawPrint className="h-3 w-3 text-critter-orange" />
                      {customerProfile.pet} ({customerProfile.breed})
                    </p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {customerProfile.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="text-xs border-critter-cream text-critter-gray">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 divide-x divide-critter-cream border-b border-critter-cream">
                <div className="p-3 text-center">
                  <p className="font-title text-lg text-critter-orange">{customerProfile.stats.visits}</p>
                  <p className="font-body text-xs text-critter-gray">Visits</p>
                </div>
                <div className="p-3 text-center">
                  <p className="font-title text-lg text-critter-orange">{customerProfile.stats.revenue}</p>
                  <p className="font-body text-xs text-critter-gray">Revenue</p>
                </div>
                <div className="p-3 text-center">
                  <p className="font-title text-lg text-critter-orange">{customerProfile.stats.referrals}</p>
                  <p className="font-body text-xs text-critter-gray">Referrals</p>
                </div>
              </div>

              {/* Contact */}
              <div className="px-4 py-2 border-b border-critter-cream flex items-center gap-4">
                <div className="flex items-center gap-1 text-critter-gray">
                  <Mail className="h-3 w-3" />
                  <span className="font-body text-xs">{customerProfile.email}</span>
                </div>
                <div className="flex items-center gap-1 text-critter-gray">
                  <Phone className="h-3 w-3" />
                  <span className="font-body text-xs">{customerProfile.phone}</span>
                </div>
              </div>

              {/* Activity Timeline */}
              <div className="p-4">
                <h4 className="font-subtitle text-xs text-critter-maroon mb-3">Recent Activity</h4>
                <div className="space-y-2">
                  {customerProfile.timeline.slice(0, visibleTimeline).map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-2 bg-critter-beige/50 rounded-lg animate-in fade-in slide-in-from-bottom-2 duration-300"
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        item.type === "visit" ? "bg-green-100 text-green-600" :
                        item.type === "email" ? "bg-blue-100 text-blue-600" :
                        item.type === "referral" ? "bg-critter-orange/10 text-critter-orange" :
                        "bg-yellow-100 text-yellow-600"
                      }`}>
                        {item.type === "visit" ? <Calendar className="h-3 w-3" /> :
                         item.type === "email" ? <Mail className="h-3 w-3" /> :
                         item.type === "referral" ? <Heart className="h-3 w-3" /> :
                         <Star className="h-3 w-3" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-body text-xs text-critter-maroon">{item.action}</p>
                      </div>
                      <span className="font-body text-xs text-critter-gray">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
