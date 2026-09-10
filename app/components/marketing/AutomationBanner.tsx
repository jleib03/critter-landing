"use client";

import { Button } from "@/app/components/ui/button";
import { Calendar } from "lucide-react";

export default function AutomationBanner() {
  const demoUrl = process.env.NEXT_PUBLIC_DEMO_URL || "https://hub.critter.pet/forms/41/critter-demo-request-1773102085379";

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-critter-cream rounded-2xl p-12 sm:p-16 text-center">
          <h2 className="font-title text-3xl sm:text-4xl text-critter-maroon mb-4">
            Real automation requires good data
          </h2>
          <p className="font-body text-base sm:text-lg text-critter-gray max-w-2xl mx-auto mb-8">
            Connect Time To Pet or Precise Pet Care to bring your customer and booking data into Critter. Explore the patterns, review your customer journey, and choose the follow-ups that make sense for your business.
          </p>
          <a href={demoUrl} target="_blank" rel="noopener noreferrer">
            <Button className="bg-critter-orange hover:bg-critter-orange/90 text-white font-subtitle">
              Book a Demo
              <Calendar className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
