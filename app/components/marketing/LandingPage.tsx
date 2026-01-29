"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import {
  ArrowRight,
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

      {/* Hero Section */}
      <section className="pt-28 pb-8 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="font-title text-4xl sm:text-5xl md:text-6xl text-critter-maroon mb-6 leading-[1.1]">
            The easiest way to grow
            <br />
            your pet care business
          </h1>
          <p className="font-body text-lg sm:text-xl text-critter-gray max-w-2xl mx-auto mb-8">
            Marketing automation that actually works. Connect your existing tools, engage your customers, and grow your revenue—all on autopilot.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`${hubUrl}/auth/signup`}>
              <Button size="lg" className="bg-critter-orange hover:bg-critter-orange/90 text-white font-subtitle px-8 h-12">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <Link href="https://calendly.com/critter-pet/demo" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-critter-maroon text-critter-maroon hover:bg-critter-maroon hover:text-white font-subtitle px-8 h-12">
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Demo */}
      <FeatureDemo
        activeFeature={activeFeature}
        setActiveFeature={setActiveFeature}
        setPreviewModal={setPreviewModal}
      />

      {/* Feature Sections */}
      <FeatureSection
        title="Connect your data"
        description="Import customers from Time to Pet, Pretty Pet Clients, or upload a CSV. We clean, organize, and enrich your data automatically."
        layout="image-left"
        icon={<Database className="h-6 w-6" />}
      />

      <AutomationBanner />

      <FeatureSection
        title="Capture leads"
        description="Beautiful lead forms, online scheduling, and referral programs that bring new pet parents to your door."
        layout="image-right"
        icon={<ClipboardList className="h-6 w-6" />}
      />

      <FeatureSection
        title="Engage your clients"
        description="Personalized email and SMS campaigns that bring pet parents back. Birthday wishes, win-back sequences, and seasonal promotions—all automated."
        layout="image-left"
        icon={<Mail className="h-6 w-6" />}
      />

      <FeatureSection
        title="Know your business"
        description="Real-time dashboards, customer insights, and revenue tracking. See what's working and make smarter decisions."
        layout="image-right"
        icon={<BarChart3 className="h-6 w-6" />}
      />

      {/* Features Bar */}
      <FeaturesBar />

      {/* Blog Section */}
      {blogArticles && blogArticles.length > 0 && (
        <BlogSection articles={blogArticles} />
      )}

      {/* Final CTA */}
      <section className="py-20 px-6 bg-critter-cream">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-title text-3xl sm:text-4xl text-critter-maroon mb-4">
            Ready to grow your pet care business?
          </h2>
          <p className="font-body text-lg text-critter-gray mb-8 max-w-xl mx-auto">
            Join hundreds of pet care professionals who trust Critter to manage their customer relationships and marketing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`${hubUrl}/auth/signup`}>
              <Button size="lg" className="bg-critter-orange hover:bg-critter-orange/90 text-white font-subtitle px-8 h-12">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <Link href="https://calendly.com/critter-pet/demo" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-critter-maroon text-critter-maroon hover:bg-critter-maroon hover:text-white font-subtitle px-8 h-12">
                Schedule a Demo
              </Button>
            </Link>
          </div>
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
