"use client";

import { Button } from "@/app/components/ui/button";
import { ArrowRight, Check, Calendar } from "lucide-react";
import LandingNav from "./LandingNav";
import LandingFooter from "./LandingFooter";
import FeatureSection from "./FeatureSection";

interface FeatureCard {
  tag: string;
  title: string;
  bullets: string[];
  icon?: React.ReactNode;
}

interface FeatureSectionData {
  title: string;
  description: string;
  layout: "image-left" | "image-right";
  icon: React.ReactNode;
  imagePlaceholder?: React.ReactNode;
}

interface FeaturePageProps {
  heroTitle: string;
  heroSubtitle: string;
  heroDemo?: React.ReactNode;
  sectionHeadline: string;
  cards: FeatureCard[];
  featureSections: FeatureSectionData[];
}

export default function FeaturePage({
  heroTitle,
  heroSubtitle,
  heroDemo,
  sectionHeadline,
  cards,
  featureSections,
}: FeaturePageProps) {
  const hubUrl = process.env.NEXT_PUBLIC_HUB_URL || "https://hub.critter.pet";
  const demoUrl = process.env.NEXT_PUBLIC_DEMO_URL || "https://calendly.com/jordy-johm/critter-crm-demo";

  return (
    <div className="min-h-screen bg-critter-beige">
      <LandingNav />

      {/* Hero Section */}
      <section className="pt-36 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            {/* Left text */}
            <div className="flex-1">
              <h1 className="font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-critter-maroon mb-6 leading-[1.1]">
                {heroTitle}
              </h1>
              <p className="font-body text-lg sm:text-xl text-critter-gray mb-8 max-w-xl">
                {heroSubtitle}
              </p>
              <a href={`${hubUrl}/auth/signup`}>
                <Button size="lg" className="bg-critter-orange hover:bg-critter-orange/90 text-white font-subtitle font-light rounded-[20px] px-8 h-12 text-xl">
                  Start 7 Day Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
            {/* Right demo / image */}
            <div className="flex-1 w-full">
              {heroDemo || (
                <div className="bg-white rounded-2xl shadow-lg border border-critter-cream p-8 lg:aspect-[4/3] flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-critter-beige to-critter-cream rounded-xl flex items-center justify-center">
                    <div className="text-critter-orange/30 font-body text-sm">Image placeholder</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Subheadline */}
      <section className="pt-16 pb-4 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-title text-3xl sm:text-4xl text-critter-maroon">
            {sectionHeadline}
          </h2>
        </div>
      </section>

      {/* Three-column feature cards */}
      <section className="pt-4 pb-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, i) => (
              <div key={i} className="bg-white rounded-2xl border border-critter-cream p-8 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-critter-orange/10 flex items-center justify-center mb-4 text-critter-orange">
                  {card.icon || <div className="w-6 h-6 rounded-full bg-critter-orange/30" />}
                </div>
                <span className="inline-block bg-critter-cream text-critter-maroon font-subtitle text-xs px-3 py-1 rounded-full mb-4">
                  {card.tag}
                </span>
                <h3 className="font-title text-xl text-critter-maroon mb-4">
                  {card.title}
                </h3>
                <ul className="space-y-3">
                  {card.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-critter-orange flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-critter-gray">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature sections */}
      {featureSections.map((section, i) => (
        <FeatureSection
          key={i}
          title={section.title}
          description={section.description}
          layout={section.layout}
          icon={section.icon}
          imagePlaceholder={section.imagePlaceholder}
        />
      ))}

      {/* Schedule a Demo CTA */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-2xl border-2 border-critter-orange p-6 sm:p-12 text-center">
            <h2 className="font-title text-2xl sm:text-3xl md:text-4xl text-critter-maroon mb-4">
              Schedule a demo today
            </h2>
            <p className="font-body text-sm sm:text-base text-critter-gray mb-8 max-w-xl mx-auto">
              Meet with our team to learn what Critter can do for you today with a demo tailored to your business and your needs.
            </p>
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-critter-orange hover:bg-critter-orange/90 text-white font-subtitle">
                Book a Demo
                <Calendar className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
}
