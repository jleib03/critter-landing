"use client";

import { useState, useEffect } from "react";
import { ClipboardList, Calendar, Users, ArrowRight, Link2, ChevronRight, Star, Check, UserPlus } from "lucide-react";

const pipelineStages = [
  {
    stage: "New Leads",
    color: "bg-blue-500",
    leads: [
      { name: "Jessica M.", source: "Website Form", pet: "2 dogs", time: "2h ago" },
      { name: "David K.", source: "Referral", pet: "1 cat", time: "5h ago" },
    ],
  },
  {
    stage: "Meet & Greet",
    color: "bg-amber-500",
    leads: [
      { name: "Rachel S.", source: "Instagram", pet: "1 dog", time: "Scheduled tomorrow" },
    ],
  },
  {
    stage: "Converted",
    color: "bg-green-500",
    leads: [
      { name: "Tom B.", source: "Google Ads", pet: "3 dogs", time: "Today" },
      { name: "Amy L.", source: "Referral", pet: "1 dog, 1 cat", time: "Yesterday" },
    ],
  },
];

const formFields = [
  { label: "Full Name", placeholder: "Jane Smith" },
  { label: "Email", placeholder: "jane@email.com" },
  { label: "Pet Details", placeholder: "Max, Golden Retriever, 3 yrs" },
  { label: "Service", placeholder: "Dog Walking" },
];

export default function LeadGenDemo() {
  const [view, setView] = useState<"pipeline" | "form">("pipeline");
  const [highlightLead, setHighlightLead] = useState(0);

  // Auto-cycle highlighted lead
  useEffect(() => {
    if (view !== "pipeline") return;
    const interval = setInterval(() => {
      setHighlightLead((prev) => (prev + 1) % 5);
    }, 2000);
    return () => clearInterval(interval);
  }, [view]);

  // Auto-toggle views
  useEffect(() => {
    const interval = setInterval(() => {
      setView((prev) => (prev === "pipeline" ? "form" : "pipeline"));
    }, 8000);
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
          <div className="bg-white/20 rounded-md px-4 py-1 text-white/80 text-xs font-body">
            hub.critter.pet/{view === "pipeline" ? "leads" : "forms"}
          </div>
        </div>
      </div>

      {/* Toggle */}
      <div className="px-5 pt-4 pb-2 flex gap-2">
        <button
          onClick={() => setView("pipeline")}
          className={`px-3 py-1.5 rounded-lg font-subtitle text-xs transition-colors ${
            view === "pipeline" ? "bg-critter-orange text-white" : "bg-critter-beige/50 text-critter-maroon"
          }`}
        >
          Lead Pipeline
        </button>
        <button
          onClick={() => setView("form")}
          className={`px-3 py-1.5 rounded-lg font-subtitle text-xs transition-colors ${
            view === "form" ? "bg-critter-orange text-white" : "bg-critter-beige/50 text-critter-maroon"
          }`}
        >
          Form Builder
        </button>
      </div>

      <div className="p-5 min-h-[340px]">
        {view === "pipeline" ? (
          <div className="space-y-4">
            {/* Stats bar */}
            <div className="flex gap-4">
              {[
                { label: "This Month", value: "23 leads" },
                { label: "Conversion", value: "41%" },
                { label: "Avg Value", value: "$340" },
              ].map((stat, i) => (
                <div key={i} className="flex-1 text-center bg-critter-beige/50 rounded-lg py-2">
                  <p className="font-subtitle text-sm text-critter-maroon">{stat.value}</p>
                  <p className="font-body text-xs text-critter-gray">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Pipeline columns */}
            <div className="grid grid-cols-3 gap-3">
              {(() => {
                let globalIndex = 0;
                return pipelineStages.map((stage, si) => (
                  <div key={si} className="space-y-2">
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-2 h-2 rounded-full ${stage.color}`} />
                      <span className="font-subtitle text-xs text-critter-maroon">{stage.stage}</span>
                      <span className="font-body text-xs text-critter-gray">({stage.leads.length})</span>
                    </div>
                    {stage.leads.map((lead, li) => {
                      const idx = globalIndex++;
                      return (
                        <div
                          key={li}
                          className={`bg-critter-beige/30 rounded-lg p-2.5 border transition-all ${
                            idx === highlightLead ? "border-critter-orange/30 bg-critter-orange/5" : "border-transparent"
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-5 h-5 rounded-full bg-critter-orange/10 flex items-center justify-center">
                              <UserPlus className="h-2.5 w-2.5 text-critter-orange" />
                            </div>
                            <span className="font-subtitle text-xs text-critter-maroon">{lead.name}</span>
                          </div>
                          <p className="font-body text-xs text-critter-gray ml-7">{lead.source}</p>
                          <p className="font-body text-xs text-critter-gray ml-7">{lead.pet}</p>
                          <p className="font-body text-xs text-critter-orange/70 ml-7 mt-0.5">{lead.time}</p>
                        </div>
                      );
                    })}
                  </div>
                ));
              })()}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Form preview */}
            <div className="bg-critter-beige/30 rounded-xl p-5 border border-critter-cream">
              <div className="text-center mb-4">
                <p className="font-title text-lg text-critter-maroon">Book a Meet & Greet</p>
                <p className="font-body text-xs text-critter-gray">We&apos;d love to meet you and your pet!</p>
              </div>
              <div className="space-y-3">
                {formFields.map((field, i) => (
                  <div key={i}>
                    <p className="font-body text-xs text-critter-gray mb-1">{field.label}</p>
                    <div className="bg-white rounded-lg px-3 py-2 border border-critter-cream">
                      <span className="font-body text-xs text-critter-gray/50">{field.placeholder}</span>
                    </div>
                  </div>
                ))}
                <div className="bg-critter-orange rounded-lg py-2.5 text-center mt-2">
                  <span className="font-subtitle text-xs text-white">Submit Inquiry</span>
                </div>
              </div>
            </div>

            {/* Embed code hint */}
            <div className="flex items-center gap-2 bg-critter-cream/50 rounded-lg px-3 py-2">
              <Link2 className="h-3.5 w-3.5 text-critter-orange" />
              <span className="font-body text-xs text-critter-gray">Embed on your website with one line of code</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
