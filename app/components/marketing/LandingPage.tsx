"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import {
  ArrowRight,
  Check,
  Database,
  ClipboardList,
  Mail,
  BarChart3,
} from "lucide-react";
import LandingNav from "./LandingNav";
import LandingFooter from "./LandingFooter";
import FeatureDemo from "./FeatureDemo";
import FeatureSection from "./FeatureSection";
import AutomationBanner from "./AutomationBanner";
import FeaturesBar from "./FeaturesBar";
import PreviewModal from "./PreviewModal";
import BlogSection from "./BlogSection";

// Article type for blog section
interface ArticleSummary {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: "growth-tips" | "case-study" | "news" | "guide" | "product-update";
  author: string;
  publishedAt: string;
  updatedAt?: string;
  image: string;
  imageAlt: string;
  tags: string[];
  readingTime: number;
  featured?: boolean;
}

interface LandingPageProps {
  blogArticles: ArticleSummary[];
}

export default function LandingPage({ blogArticles }: LandingPageProps) {
  const [activeFeature, setActiveFeature] = useState(0);
  const [previewModal, setPreviewModal] = useState<string | null>(null);
  const hubUrl = process.env.NEXT_PUBLIC_HUB_URL || "https://hub.critter.pet";

  return (
    <div className="min-h-screen bg-critter-beige">
      {/* Navigation */}
      <LandingNav onFeatureClick={setActiveFeature} />

      {/* Hero Section - Updated copy from Figma */}
      <section className="pt-28 pb-8 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="font-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-black mb-6 leading-[0.95] tracking-tight">
            Automated growth for
            <br />
            pet care businesses
          </h1>
          <p className="font-body text-lg sm:text-xl text-critter-gray max-w-2xl mx-auto mb-8">
            Reimagine client engagement at scale with data-driven tools for CRM, marketing, & growth built for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={`${hubUrl}/auth/signup`}>
              <Button size="lg" className="bg-critter-orange hover:bg-critter-orange/90 text-white font-subtitle px-8 h-12">
                Start 7 Day Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Feature Demo */}
      <FeatureDemo
        activeFeature={activeFeature}
        setActiveFeature={setActiveFeature}
        setPreviewModal={setPreviewModal}
      />

      {/* Feature Sections - Updated copy from CRM */}
      <FeatureSection
        title="Connect your data"
        description="Import customers from Time To Pet, PetPocketbook, or any CSV. We clean, dedupe, and organize your data so you can focus on growing your business."
        layout="image-left"
        icon={<Database className="h-6 w-6" />}
      />

      <FeatureSection
        title="Capture leads"
        description="Beautiful lead forms, scheduling links, and referral pages that convert visitors into customers. Auto-enroll new leads into nurture sequences."
        layout="image-right"
        icon={<ClipboardList className="h-6 w-6" />}
      />

      <AutomationBanner />

      <FeatureSection
        title="Engage your clients"
        description="Send personalized email and SMS campaigns that bring pet parents back. Birthday wishes, win-back sequences, and promotional campaigns—all on autopilot."
        layout="image-left"
        icon={<Mail className="h-6 w-6" />}
      />

      <FeatureSection
        title="Know your business"
        description="Ask Balto anything about your business. Get instant insights, smart recommendations, and AI-drafted campaigns based on your actual customer data."
        layout="image-right"
        icon={<BarChart3 className="h-6 w-6" />}
      />

      {/* Features Bar */}
      <FeaturesBar />

      {/* Social Proof Bar */}
      <section className="py-12 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-critter-gray">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-critter-orange" />
              <span className="font-body">Works With Any Data Source</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-critter-orange" />
              <span className="font-body">Industry-Leading Deliverability</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-critter-orange" />
              <span className="font-body">TCPA Compliant SMS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      {blogArticles && blogArticles.length > 0 && (
        <BlogSection articles={blogArticles} />
      )}

      {/* Final CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="font-title text-4xl sm:text-5xl text-critter-maroon mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="font-body text-lg text-critter-gray mb-8">
            Start your free 7-day trial today. No credit card required.
          </p>
          <a href={`${hubUrl}/auth/signup`}>
            <Button size="lg" className="bg-critter-orange hover:bg-critter-orange/90 text-white font-subtitle px-10 h-14 text-lg">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <LandingFooter />

      {/* Preview Modal */}
      {previewModal && (
        <PreviewModal
          isOpen={true}
          onClose={() => setPreviewModal(null)}
          type={previewModal}
          onNavigate={(type) => setPreviewModal(type)}
        />
      )}
    </div>
  );
}
