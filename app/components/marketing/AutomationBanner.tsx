"use client";

import { Database, Zap, ArrowRight } from "lucide-react";

export default function AutomationBanner() {
  return (
    <section className="py-16 px-6 bg-critter-cream">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-critter-orange/10 flex items-center justify-center">
            <Database className="h-6 w-6 text-critter-orange" />
          </div>
          <ArrowRight className="h-6 w-6 text-critter-orange" />
          <div className="w-12 h-12 rounded-xl bg-critter-orange flex items-center justify-center">
            <Zap className="h-6 w-6 text-white" />
          </div>
        </div>
        <h2 className="font-title text-3xl sm:text-4xl text-critter-maroon mb-4">
          Real automation requires good data
        </h2>
        <p className="font-body text-lg text-critter-gray max-w-2xl mx-auto">
          We connect to your existing systems, clean and organize your customer data, and make it actionable—so your automations actually work.
        </p>
      </div>
    </section>
  );
}
