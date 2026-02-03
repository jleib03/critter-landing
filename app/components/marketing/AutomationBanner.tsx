"use client";

import { Button } from "@/app/components/ui/button";
import { Calendar } from "lucide-react";

export default function AutomationBanner() {
  const demoUrl = process.env.NEXT_PUBLIC_DEMO_URL || "https://calendly.com/jordy-johm/critter-crm-demo";

  return (
    <section className="py-16 px-6 bg-critter-cream">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="font-title text-3xl sm:text-4xl text-critter-maroon mb-4">
          Real automation requires good data
        </h2>
        <p className="font-body text-lg text-critter-gray max-w-2xl mx-auto mb-8">
          Critter&apos;s proprietary data tools make it simple to integrate external data to drive automation across your pipeline, operational communications, and marketing efforts. With out of the box data connectors for leading industry booking softwares like Time to Pet and Precise Pet Care, it&apos;s never been easier to get data out of your operational tools and leverage it for insights into your client base as your scale.
        </p>
        <a href={demoUrl} target="_blank" rel="noopener noreferrer">
          <Button className="bg-critter-orange hover:bg-critter-orange/90 text-white font-subtitle">
            Book a Demo
            <Calendar className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
    </section>
  );
}
