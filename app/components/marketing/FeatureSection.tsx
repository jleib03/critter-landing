"use client";

import { Button } from "@/app/components/ui/button";
import {
  Database,
  ClipboardList,
  Mail,
  BarChart3,
  ArrowRight,
  Users,
  Check,
  Send,
  TrendingUp,
} from "lucide-react";

interface FeatureSectionProps {
  title: string;
  description: string;
  layout: 'image-left' | 'image-right';
  imagePlaceholder?: React.ReactNode;
  icon?: React.ReactNode;
}

// Richer default mockups that look like product screenshots
function ConnectDataMockup() {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Mini browser chrome */}
      <div className="bg-critter-orange rounded-t-xl px-4 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-white/20 rounded-md px-3 py-0.5 text-white/80 text-xs font-body">hub.critter.pet</div>
        </div>
      </div>
      <div className="flex-1 bg-white rounded-b-xl p-4 space-y-3">
        <p className="font-subtitle text-sm text-critter-maroon">Data Sources</p>
        {["Time to Pet", "Precise Pet Care", "CSV Import"].map((source, i) => (
          <div key={i} className="flex items-center justify-between bg-critter-beige/50 rounded-lg px-3 py-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-critter-orange/10 flex items-center justify-center">
                <Database className="h-3.5 w-3.5 text-critter-orange" />
              </div>
              <span className="font-body text-xs text-critter-maroon">{source}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="font-body text-xs text-green-600">Synced</span>
            </div>
          </div>
        ))}
        <div className="flex items-center gap-2 pt-1">
          <TrendingUp className="h-3.5 w-3.5 text-critter-orange" />
          <span className="font-body text-xs text-critter-gray">1,247 contacts synced</span>
        </div>
      </div>
    </div>
  );
}

function CaptureLeadsMockup() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="bg-critter-orange rounded-t-xl px-4 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-white/20 rounded-md px-3 py-0.5 text-white/80 text-xs font-body">yoursite.com/contact</div>
        </div>
      </div>
      <div className="flex-1 bg-white rounded-b-xl p-4 space-y-3">
        <p className="font-subtitle text-sm text-critter-maroon">New Client Inquiry</p>
        {[
          { label: "Pet Parent Name", value: "Sarah Johnson" },
          { label: "Pet Name & Type", value: "Max — Golden Retriever" },
          { label: "Service Interest", value: "Dog Walking" },
        ].map((field, i) => (
          <div key={i}>
            <p className="font-body text-xs text-critter-gray mb-1">{field.label}</p>
            <div className="bg-critter-beige/50 rounded-lg px-3 py-2">
              <span className="font-body text-xs text-critter-maroon">{field.value}</span>
            </div>
          </div>
        ))}
        <div className="bg-critter-orange rounded-lg py-2 text-center">
          <span className="font-subtitle text-xs text-white">Schedule Meet & Greet</span>
        </div>
      </div>
    </div>
  );
}

function EngageClientsMockup() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="bg-critter-orange rounded-t-xl px-4 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-white/20 rounded-md px-3 py-0.5 text-white/80 text-xs font-body">hub.critter.pet</div>
        </div>
      </div>
      <div className="flex-1 bg-white rounded-b-xl p-4 space-y-3">
        <p className="font-subtitle text-sm text-critter-maroon">Active Campaigns</p>
        {[
          { name: "Birthday Rewards", status: "Active", sent: "142", rate: "68%" },
          { name: "Win-Back Series", status: "Active", sent: "89", rate: "34%" },
          { name: "Welcome Sequence", status: "Active", sent: "231", rate: "72%" },
        ].map((campaign, i) => (
          <div key={i} className="flex items-center justify-between bg-critter-beige/50 rounded-lg px-3 py-2">
            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-critter-orange" />
              <span className="font-body text-xs text-critter-maroon">{campaign.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-body text-xs text-critter-gray">{campaign.sent} sent</span>
              <span className="font-subtitle text-xs text-critter-orange">{campaign.rate} open</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function KnowBusinessMockup() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="bg-critter-orange rounded-t-xl px-4 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-white/20 rounded-md px-3 py-0.5 text-white/80 text-xs font-body">hub.critter.pet/togo</div>
        </div>
      </div>
      <div className="flex-1 bg-white rounded-b-xl p-4 space-y-3">
        <div className="flex justify-end">
          <div className="bg-critter-maroon rounded-xl rounded-br-sm px-3 py-2 max-w-[80%]">
            <p className="font-body text-xs text-white">How is revenue trending?</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-critter-orange to-amber-500 flex items-center justify-center flex-shrink-0">
            <BarChart3 className="h-3 w-3 text-white" />
          </div>
          <div className="bg-critter-beige/50 rounded-xl rounded-bl-sm px-3 py-2 flex-1">
            <p className="font-body text-xs text-critter-maroon mb-2">Revenue is up 23% month over month. Your top growth drivers:</p>
            <div className="space-y-1.5">
              {[
                { label: "Dog Walking", pct: "38%" },
                { label: "Pet Sitting", pct: "29%" },
                { label: "Grooming", pct: "18%" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="flex-1 bg-white rounded-full h-2">
                    <div className="bg-critter-orange rounded-full h-2" style={{ width: item.pct }} />
                  </div>
                  <span className="font-body text-xs text-critter-gray w-16">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const defaultMockups: Record<string, React.ReactNode> = {
  "Connect your data": <ConnectDataMockup />,
  "Capture leads": <CaptureLeadsMockup />,
  "Engage your clients": <EngageClientsMockup />,
  "Know your business": <KnowBusinessMockup />,
};

export default function FeatureSection({
  title,
  description,
  layout,
  imagePlaceholder,
  icon,
}: FeatureSectionProps) {
  const hubUrl = process.env.NEXT_PUBLIC_HUB_URL || "https://hub.critter.pet";
  const mockup = imagePlaceholder || defaultMockups[title];

  const imageContent = (
    <div className="flex-1">
      <div className="bg-white rounded-2xl shadow-lg border border-critter-cream overflow-hidden">
        {mockup ? (
          <div className="aspect-[4/3]">
            {mockup}
          </div>
        ) : (
          <div className="p-8 aspect-[4/3] flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-br from-critter-beige to-critter-cream rounded-xl flex items-center justify-center">
              <Database className="h-16 w-16 text-critter-orange/40" />
            </div>
          </div>
        )}
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
