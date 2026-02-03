"use client";

import { Button } from "@/app/components/ui/button";
import {
  Database,
  ClipboardList,
  Mail,
  BarChart3,
} from "lucide-react";

interface FeatureSectionProps {
  title: string;
  description: string;
  layout: 'image-left' | 'image-right';
  imagePlaceholder?: React.ReactNode;
  icon?: React.ReactNode;
}

// Default placeholder icons based on section type
const defaultPlaceholders: Record<string, React.ReactNode> = {
  "Connect your data": <Database className="h-16 w-16 text-critter-orange/40" />,
  "Capture leads": <ClipboardList className="h-16 w-16 text-critter-orange/40" />,
  "Engage your clients": <Mail className="h-16 w-16 text-critter-orange/40" />,
  "Know your business": <BarChart3 className="h-16 w-16 text-critter-orange/40" />,
};

export default function FeatureSection({
  title,
  description,
  layout,
  imagePlaceholder,
  icon,
}: FeatureSectionProps) {
  const hubUrl = process.env.NEXT_PUBLIC_HUB_URL || "https://hub.critter.pet";
  const placeholder = imagePlaceholder || defaultPlaceholders[title] || <Database className="h-16 w-16 text-critter-orange/40" />;

  const imageContent = (
    <div className="flex-1">
      <div className="bg-white rounded-2xl shadow-lg border border-critter-cream p-8 aspect-[4/3] flex items-center justify-center">
        {/* Placeholder for future image/screenshot */}
        <div className="w-full h-full bg-gradient-to-br from-critter-beige to-critter-cream rounded-xl flex items-center justify-center">
          {placeholder}
        </div>
      </div>
    </div>
  );

  const textContent = (
    <div className="flex-1 flex flex-col justify-center">
      {icon && (
        <div className="w-12 h-12 rounded-xl bg-critter-orange/10 flex items-center justify-center mb-4 text-critter-orange">
          {icon}
        </div>
      )}
      <h2 className="font-title text-3xl sm:text-4xl text-critter-maroon mb-4">
        {title}
      </h2>
      <p className="font-body text-lg text-critter-gray leading-relaxed mb-6">
        {description}
      </p>
      <a href={`${hubUrl}/auth/signup`}>
        <Button className="bg-critter-orange hover:bg-critter-orange/90 text-white font-subtitle w-fit">
          Get Started
        </Button>
      </a>
    </div>
  );

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className={`flex flex-col ${layout === 'image-left' ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
          {imageContent}
          {textContent}
        </div>
      </div>
    </section>
  );
}
