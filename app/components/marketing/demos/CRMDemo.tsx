"use client";

import { useState, useEffect } from "react";
import { Users, Dog, Tag, Calendar, Heart, Star, ChevronRight, MapPin, Phone, Mail } from "lucide-react";

const customers = [
  { name: "Sarah Johnson", pet: "Max", breed: "Golden Retriever", stage: "VIP", visits: 47, ltv: "$4,230", lastVisit: "2 days ago", tags: ["Weekly Walker", "Referrer"] },
  { name: "Mike Chen", pet: "Luna", breed: "Labrador", stage: "Active", visits: 23, ltv: "$2,180", lastVisit: "5 days ago", tags: ["Boarding", "Grooming"] },
  { name: "Emily Davis", pet: "Bella", breed: "Poodle Mix", stage: "At Risk", visits: 8, ltv: "$720", lastVisit: "32 days ago", tags: ["New Client"] },
  { name: "James Wilson", pet: "Cooper", breed: "Beagle", stage: "Active", visits: 31, ltv: "$2,890", lastVisit: "1 day ago", tags: ["Pet Sitting", "VIP"] },
];

const stageColors: Record<string, string> = {
  "VIP": "bg-amber-100 text-amber-700",
  "Active": "bg-green-100 text-green-700",
  "At Risk": "bg-red-100 text-red-700",
  "New Lead": "bg-blue-100 text-blue-700",
};

export default function CRMDemo() {
  const [selectedCustomer, setSelectedCustomer] = useState(0);
  const [animateProfile, setAnimateProfile] = useState(false);

  useEffect(() => {
    setAnimateProfile(true);
    const timer = setTimeout(() => setAnimateProfile(false), 500);
    return () => clearTimeout(timer);
  }, [selectedCustomer]);

  // Auto-cycle through customers
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedCustomer((prev) => (prev + 1) % customers.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const customer = customers[selectedCustomer];

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
          <div className="bg-white/20 rounded-md px-4 py-1 text-white/80 text-xs font-body">hub.critter.pet/customers</div>
        </div>
      </div>

      <div className="flex min-h-[380px]">
        {/* Customer list */}
        <div className="w-[45%] border-r border-critter-cream bg-critter-beige/30">
          <div className="px-4 py-3 border-b border-critter-cream">
            <p className="font-subtitle text-sm text-critter-maroon">Customers</p>
            <p className="font-body text-xs text-critter-gray">1,247 total</p>
          </div>
          <div className="divide-y divide-critter-cream/50">
            {customers.map((c, i) => (
              <button
                key={i}
                onClick={() => setSelectedCustomer(i)}
                className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors ${
                  i === selectedCustomer ? "bg-critter-orange/5 border-l-2 border-critter-orange" : "hover:bg-critter-beige/50 border-l-2 border-transparent"
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-critter-orange/10 flex items-center justify-center flex-shrink-0">
                  <Users className="h-3.5 w-3.5 text-critter-orange" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-subtitle text-xs text-critter-maroon truncate">{c.name}</p>
                  <p className="font-body text-xs text-critter-gray truncate">{c.pet} — {c.breed}</p>
                </div>
                <span className={`text-xs font-subtitle px-2 py-0.5 rounded-full flex-shrink-0 ${stageColors[c.stage]}`}>
                  {c.stage}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Customer detail */}
        <div className={`flex-1 p-5 transition-opacity duration-300 ${animateProfile ? "opacity-60" : "opacity-100"}`}>
          {/* Header */}
          <div className="flex items-start gap-3 mb-5">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-critter-orange to-amber-500 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-subtitle text-sm">{customer.name.split(" ").map(n => n[0]).join("")}</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-subtitle text-sm text-critter-maroon">{customer.name}</h3>
                <span className={`text-xs font-body px-2 py-0.5 rounded-full ${stageColors[customer.stage]}`}>
                  {customer.stage}
                </span>
              </div>
              <div className="flex items-center gap-1 mt-1">
                <Dog className="h-3 w-3 text-critter-orange" />
                <span className="font-body text-xs text-critter-gray">{customer.pet} — {customer.breed}</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            {[
              { label: "Visits", value: customer.visits, icon: <Calendar className="h-3 w-3" /> },
              { label: "Lifetime Value", value: customer.ltv, icon: <Star className="h-3 w-3" /> },
              { label: "Last Visit", value: customer.lastVisit, icon: <Heart className="h-3 w-3" /> },
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

          {/* Tags */}
          <div className="mb-4">
            <p className="font-body text-xs text-critter-gray mb-2">Tags</p>
            <div className="flex flex-wrap gap-1.5">
              {customer.tags.map((tag, i) => (
                <span key={i} className="bg-critter-orange/10 text-critter-orange font-body text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Tag className="h-2.5 w-2.5" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Quick actions */}
          <div className="flex gap-2">
            {[
              { icon: <Mail className="h-3 w-3" />, label: "Email" },
              { icon: <Phone className="h-3 w-3" />, label: "Text" },
            ].map((action, i) => (
              <div key={i} className="flex items-center gap-1.5 bg-critter-cream/50 rounded-lg px-3 py-2 cursor-default">
                <span className="text-critter-orange">{action.icon}</span>
                <span className="font-body text-xs text-critter-maroon">{action.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
