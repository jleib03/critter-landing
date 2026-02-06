"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import {
  Database,
  ClipboardList,
  Mail,
  BarChart3,
  Calendar,
} from "lucide-react";
import LandingNav from "./LandingNav";
import LandingFooter from "./LandingFooter";
import FeatureDemo from "./FeatureDemo";
import FeatureSection from "./FeatureSection";
import AutomationBanner from "./AutomationBanner";
import FeaturesBar from "./FeaturesBar";
import FeaturesGrid from "./FeaturesGrid";
import PreviewModal from "./PreviewModal";
import { ConnectDataMockup, CaptureLeadsMockup, EngageClientsMockup, DataInsightsMockup } from "./demos/SectionMockups";

export default function LandingPage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [previewModal, setPreviewModal] = useState<string | null>(null);
  const hubUrl = process.env.NEXT_PUBLIC_HUB_URL || "https://hub.critter.pet";
  const demoUrl = process.env.NEXT_PUBLIC_DEMO_URL || "https://calendly.com/jordy-johm/critter-crm-demo";

  return (
    <div className="min-h-screen bg-critter-beige">
      {/* Navigation */}
      <LandingNav onFeatureClick={setActiveFeature} />

      {/* Hero Section - Updated copy from Figma */}
      <section className="pt-28 pb-8 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="font-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black mb-6 leading-[0.95] tracking-tight">
            <span className="whitespace-nowrap">Growth automation engine</span>
            <br />
            <span className="whitespace-nowrap">for pet care businesses</span>
          </h1>
          <p className="font-title font-light text-lg sm:text-xl text-black max-w-2xl mx-auto mb-8 leading-[1.1]">
            Turn insights into action with data-driven tools for CRM, marketing, & ongoing client engagement at scale
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={`${hubUrl}/auth/signup`}>
              <Button size="lg" className="bg-critter-orange hover:bg-critter-orange/90 text-white font-subtitle font-light rounded-[20px] px-8 h-12 text-xl">
                Start 7 Day Free Trial
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

      {/* Features Grid */}
      <FeaturesGrid />

      {/* Feature Sections - Updated copy from Figma */}
      <FeatureSection
        title="Connect your data"
        description="The only CRM & marketing tool integrating your booking and operational data with marketing and growth performance out of the box. Eliminate manual work and duplicate entry to keep data in sync."
        layout="image-left"
        icon={<Database className="h-6 w-6" />}
        imagePlaceholder={<ConnectDataMockup />}
      />

      <FeatureSection
        title="Capture leads"
        description="Streamline the customer relationship from first contact, bringing new leads into your system with forms that embed in your website, a Meet & Greet scheduler, and unique referral links per client."
        layout="image-right"
        icon={<ClipboardList className="h-6 w-6" />}
        imagePlaceholder={<CaptureLeadsMockup />}
      />

      <AutomationBanner />

      <FeatureSection
        title="Engage your clients"
        description="Surprise and delight your customers with tailored communications, rewards, and promotions based on their activity with you. Maintain the same level of personal touch with clients as when it was just you."
        layout="image-left"
        icon={<Mail className="h-6 w-6" />}
        imagePlaceholder={<EngageClientsMockup />}
      />

      <FeatureSection
        title="Know your business"
        description="Talk with your data like never before. Our proprietary Togo AI knows your business inside and out, actively monitoring and learning from your data every day. Data analysis tools that have your back."
        layout="image-right"
        icon={<BarChart3 className="h-6 w-6" />}
        imagePlaceholder={<DataInsightsMockup />}
      />

      {/* Features Bar */}
      <FeaturesBar />

      {/* Final CTA */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-2xl border-2 border-critter-orange p-12 text-center">
            <h2 className="font-title text-3xl sm:text-4xl text-critter-maroon mb-4">
              Schedule a demo today
            </h2>
            <p className="font-body text-critter-gray mb-8 max-w-xl mx-auto">
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
