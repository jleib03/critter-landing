"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/app/components/ui/badge";
import {
  Users,
  Mail,
  PawPrint,
  Calendar,
  Link2,
  ClipboardList,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

export default function LeadGenHeroDemo() {
  const [animatedStats, setAnimatedStats] = useState(false);
  const [activeForm, setActiveForm] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedStats(true), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveForm((f) => (f + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
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
          <div className="grid grid-cols-12 gap-3">
            {/* Lead Forms Panel */}
            <div className="col-span-7">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-3 border-b border-critter-cream flex items-center justify-between">
                  <h3 className="font-subtitle text-sm text-critter-maroon">Lead Capture</h3>
                  <Badge className="bg-green-100 text-green-700 font-body text-xs">3 Active</Badge>
                </div>

                <div className="p-3 space-y-2">
                  {/* Form 1 - New Client */}
                  <div
                    className={`border-2 rounded-xl overflow-hidden cursor-pointer transition-all ${
                      activeForm === 0 ? "border-critter-orange shadow-md" : "border-critter-cream"
                    }`}
                    onClick={() => setActiveForm(0)}
                  >
                    <div className="bg-critter-orange px-3 py-1.5">
                      <p className="font-subtitle text-xs text-white text-center">New Client Special</p>
                    </div>
                    {activeForm === 0 && (
                      <div className="p-3 space-y-2 animate-in fade-in duration-300">
                        <div className="h-7 bg-critter-beige/50 rounded-lg border border-critter-cream flex items-center px-2 gap-2">
                          <Users className="h-3 w-3 text-critter-gray" />
                          <span className="font-body text-xs text-critter-gray/60">Your name</span>
                        </div>
                        <div className="h-7 bg-critter-beige/50 rounded-lg border border-critter-cream flex items-center px-2 gap-2">
                          <Mail className="h-3 w-3 text-critter-gray" />
                          <span className="font-body text-xs text-critter-gray/60">Email address</span>
                        </div>
                        <div className="h-7 bg-critter-beige/50 rounded-lg border border-critter-cream flex items-center px-2 gap-2">
                          <PawPrint className="h-3 w-3 text-critter-gray" />
                          <span className="font-body text-xs text-critter-gray/60">Pet&apos;s name</span>
                        </div>
                        <div className="h-7 bg-critter-orange rounded-lg flex items-center justify-center">
                          <span className="font-subtitle text-xs text-white">Get 20% Off →</span>
                        </div>
                      </div>
                    )}
                    <div className="px-3 py-2 flex items-center justify-between">
                      <span className="font-subtitle text-xs text-critter-maroon">247 leads</span>
                      <span className="font-body text-xs text-green-600">34% conversion</span>
                    </div>
                  </div>

                  {/* Form 2 - Meet & Greet */}
                  <div
                    className={`border-2 rounded-xl overflow-hidden cursor-pointer transition-all ${
                      activeForm === 1 ? "border-critter-orange shadow-md" : "border-critter-cream"
                    }`}
                    onClick={() => setActiveForm(1)}
                  >
                    <div className="bg-critter-maroon px-3 py-1.5">
                      <p className="font-subtitle text-xs text-white text-center">Meet & Greet Scheduler</p>
                    </div>
                    {activeForm === 1 && (
                      <div className="p-3 animate-in fade-in duration-300">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-4 w-4 text-critter-orange" />
                          <span className="font-body text-xs text-critter-maroon">Select a time slot</span>
                        </div>
                        <div className="grid grid-cols-5 gap-1 mb-2">
                          {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
                            <div key={day} className="py-1 bg-critter-beige rounded text-center">
                              <span className="font-body text-xs text-critter-gray">{day}</span>
                            </div>
                          ))}
                        </div>
                        <div className="h-7 bg-critter-maroon rounded-lg flex items-center justify-center">
                          <span className="font-subtitle text-xs text-white">Book My Visit →</span>
                        </div>
                      </div>
                    )}
                    <div className="px-3 py-2 flex items-center justify-between">
                      <span className="font-subtitle text-xs text-critter-maroon">89 bookings</span>
                      <span className="font-body text-xs text-green-600">This month</span>
                    </div>
                  </div>

                  {/* Form 3 - Referral Link */}
                  <div
                    className={`border-2 rounded-xl overflow-hidden cursor-pointer transition-all ${
                      activeForm === 2 ? "border-critter-orange shadow-md" : "border-critter-cream"
                    }`}
                    onClick={() => setActiveForm(2)}
                  >
                    <div className="bg-gradient-to-r from-critter-orange/10 to-critter-beige px-3 py-1.5 flex items-center justify-center gap-2">
                      <Link2 className="h-3 w-3 text-critter-orange" />
                      <p className="font-subtitle text-xs text-critter-maroon">Referral Landing Page</p>
                    </div>
                    {activeForm === 2 && (
                      <div className="p-3 animate-in fade-in duration-300">
                        <div className="bg-critter-beige/50 rounded-lg p-2 border border-critter-cream flex items-center gap-2 mb-2">
                          <Link2 className="h-3 w-3 text-critter-orange" />
                          <span className="font-body text-xs text-critter-maroon">critter.pet/ref/sarah-j</span>
                        </div>
                        <div className="h-7 bg-critter-orange/10 rounded-lg flex items-center justify-center">
                          <span className="font-subtitle text-xs text-critter-orange">156 referral clicks</span>
                        </div>
                      </div>
                    )}
                    <div className="px-3 py-2 flex items-center justify-between">
                      <span className="font-subtitle text-xs text-critter-maroon">156 leads</span>
                      <span className="font-body text-xs text-green-600">28% conversion</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Sidebar */}
            <div className="col-span-5 space-y-3">
              <div className={`bg-white rounded-xl p-3 shadow-sm transition-all duration-700 ${animatedStats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
                <div className="flex items-center gap-1 mb-2">
                  <TrendingUp className="h-3 w-3 text-critter-orange" />
                  <span className="font-body text-xs text-critter-gray">This Month</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-body text-xs text-critter-gray">Leads</span>
                      <span className="font-subtitle text-sm text-critter-orange">492</span>
                    </div>
                    <div className="h-1.5 bg-critter-beige rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-critter-orange rounded-full transition-all duration-1000" style={{ width: animatedStats ? "85%" : "0%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-body text-xs text-critter-gray">Converted</span>
                      <span className="font-subtitle text-sm text-green-600">167</span>
                    </div>
                    <div className="h-1.5 bg-critter-beige rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full transition-all duration-1000 delay-300" style={{ width: animatedStats ? "34%" : "0%" }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className={`bg-white rounded-xl p-3 shadow-sm transition-all duration-700 delay-200 ${animatedStats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
                <h4 className="font-subtitle text-xs text-critter-maroon mb-2">Top Sources</h4>
                <div className="space-y-1.5">
                  {[
                    { source: "Website Form", leads: 247, icon: <ClipboardList className="h-3 w-3" /> },
                    { source: "Scheduler", leads: 89, icon: <Calendar className="h-3 w-3" /> },
                    { source: "Referrals", leads: 156, icon: <Users className="h-3 w-3" /> },
                  ].map((src, i) => (
                    <div key={i} className="flex items-center justify-between p-1.5 bg-critter-beige/50 rounded-lg">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded bg-critter-orange/10 flex items-center justify-center text-critter-orange">
                          {src.icon}
                        </div>
                        <span className="font-body text-xs text-critter-maroon">{src.source}</span>
                      </div>
                      <span className="font-subtitle text-xs text-critter-orange">{src.leads}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`bg-critter-orange rounded-xl p-3 text-white transition-all duration-700 delay-400 ${animatedStats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
                <p className="font-title text-xl">$18,340</p>
                <p className="font-body text-xs text-white/80">Revenue from leads</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
