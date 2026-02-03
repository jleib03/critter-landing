"use client";

import { useState, useEffect } from "react";
import { Mail, Zap, Users, TrendingUp, Check, Clock, ChevronRight, Sparkles, BarChart3 } from "lucide-react";

const automations = [
  { name: "Welcome Series", trigger: "New signup", emails: 3, enrolled: 231, status: "active" },
  { name: "Birthday Rewards", trigger: "Birthday in 7 days", emails: 2, enrolled: 89, status: "active" },
  { name: "Win-Back Campaign", trigger: "No visit in 30 days", emails: 4, enrolled: 47, status: "active" },
  { name: "VIP Appreciation", trigger: "LTV > $2,000", emails: 1, enrolled: 34, status: "active" },
];

const metrics = [
  { label: "Emails Sent", value: "12,847", change: "+18%" },
  { label: "Avg Open Rate", value: "67.3%", change: "+4.2%" },
  { label: "Click Rate", value: "24.1%", change: "+2.8%" },
  { label: "Revenue Driven", value: "$8,420", change: "+31%" },
];

export default function MarketingDemo() {
  const [activeAutomation, setActiveAutomation] = useState(0);
  const [animateMetrics, setAnimateMetrics] = useState(false);

  // Cycle through automations
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAutomation((prev) => (prev + 1) % automations.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Animate metrics on mount
  useEffect(() => {
    setAnimateMetrics(true);
  }, []);

  const automation = automations[activeAutomation];

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
          <div className="bg-white/20 rounded-md px-4 py-1 text-white/80 text-xs font-body">hub.critter.pet/automation</div>
        </div>
      </div>

      <div className="p-5 space-y-4 min-h-[380px]">
        {/* Metrics row */}
        <div className="grid grid-cols-4 gap-3">
          {metrics.map((metric, i) => (
            <div key={i} className={`bg-critter-beige/50 rounded-lg p-3 text-center transition-all duration-700 ${animateMetrics ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <p className="font-subtitle text-sm text-critter-maroon">{metric.value}</p>
              <p className="font-body text-xs text-critter-gray">{metric.label}</p>
              <p className="font-subtitle text-xs text-green-600 mt-0.5">{metric.change}</p>
            </div>
          ))}
        </div>

        {/* Active automations */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="font-subtitle text-sm text-critter-maroon">Active Automations</p>
            <div className="flex items-center gap-1">
              <Sparkles className="h-3 w-3 text-critter-orange" />
              <span className="font-body text-xs text-critter-orange">4 running</span>
            </div>
          </div>
          <div className="space-y-2">
            {automations.map((a, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all cursor-default ${
                  i === activeAutomation
                    ? "bg-critter-orange/5 border border-critter-orange/20"
                    : "bg-critter-beige/30 border border-transparent"
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  i === activeAutomation ? "bg-critter-orange/10" : "bg-critter-cream"
                }`}>
                  <Zap className={`h-3.5 w-3.5 ${i === activeAutomation ? "text-critter-orange" : "text-critter-gray"}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-subtitle text-xs text-critter-maroon">{a.name}</p>
                  <div className="flex items-center gap-1">
                    <Clock className="h-2.5 w-2.5 text-critter-gray" />
                    <span className="font-body text-xs text-critter-gray">{a.trigger}</span>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-subtitle text-xs text-critter-orange">{a.enrolled} enrolled</p>
                  <p className="font-body text-xs text-critter-gray">{a.emails} emails</p>
                </div>
                {i === activeAutomation && (
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Workflow preview */}
        <div className="bg-critter-beige/30 rounded-lg p-3">
          <p className="font-body text-xs text-critter-gray mb-2">Workflow: {automation.name}</p>
          <div className="flex items-center gap-2 overflow-x-auto">
            {["Trigger", "Wait 1hr", "Send Email", automation.emails > 2 ? "Wait 2d" : "Complete", automation.emails > 2 ? "Send Email" : null].filter(Boolean).map((step, i, arr) => (
              <div key={i} className="flex items-center gap-2 flex-shrink-0">
                <div className={`px-2.5 py-1 rounded-md text-xs font-body ${
                  i === 0 ? "bg-critter-orange text-white" : "bg-white text-critter-maroon border border-critter-cream"
                }`}>
                  {step}
                </div>
                {i < arr.length - 1 && <ChevronRight className="h-3 w-3 text-critter-gray flex-shrink-0" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
