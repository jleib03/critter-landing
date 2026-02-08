"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import {
  ArrowRight,
  Dog,
  Send,
  Sparkles,
  BarChart3,
  FileText,
  TrendingUp,
  Users,
  Calendar,
  MessageSquare,
  Clock,
  PawPrint,
  Mail,
  Zap,
  Star,
} from "lucide-react";
import LandingNav from "@/app/components/marketing/LandingNav";
import LandingFooter from "@/app/components/marketing/LandingFooter";

// Demo conversation for the live chat simulation
const demoConversation = [
  {
    role: "user",
    content: "Who are my top customers this month?",
  },
  {
    role: "assistant",
    content: "Here are your top 5 customers by revenue this month:",
    data: [
      { rank: 1, name: "Sarah Johnson", revenue: "$847", visits: 8 },
      { rank: 2, name: "Mike Chen", revenue: "$623", visits: 6 },
      { rank: 3, name: "Emily Davis", revenue: "$580", visits: 5 },
      { rank: 4, name: "James Wilson", revenue: "$445", visits: 4 },
      { rank: 5, name: "Lisa Brown", revenue: "$398", visits: 4 },
    ],
    followUp: "Would you like me to draft a VIP appreciation campaign for these customers?",
  },
  {
    role: "user",
    content: "Yes, draft a thank you email for them",
  },
  {
    role: "assistant",
    content: "I've drafted a VIP appreciation email:",
    draft: {
      subject: "You're One of Our Favorites! 🌟",
      preview: "Thank you for being such an amazing customer this month. As a token of our appreciation, here's 15% off your next visit...",
    },
    followUp: "Want me to adjust the tone or add a specific offer?",
  },
];

// Togo mockup components
function TalkWithDataMockup() {
  return (
    <div className="w-full h-full flex flex-col justify-center p-2">
      <div className="bg-white rounded-xl p-4 border border-critter-cream shadow-sm space-y-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-critter-orange to-amber-500 flex items-center justify-center">
            <Dog className="h-4 w-4 text-white" />
          </div>
          <div>
            <p className="font-subtitle text-sm text-critter-maroon">Togo</p>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="font-body text-xs text-critter-gray">Online</span>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-critter-maroon rounded-2xl rounded-br-sm px-3 py-2 max-w-[75%]">
            <p className="font-body text-xs text-white">Which services grew fastest last quarter?</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-critter-orange to-amber-500 flex items-center justify-center flex-shrink-0">
            <Dog className="h-3 w-3 text-white" />
          </div>
          <div className="bg-critter-beige/50 rounded-2xl rounded-bl-sm px-3 py-2 flex-1">
            <p className="font-body text-xs text-critter-maroon mb-2">Here&apos;s your Q4 service growth:</p>
            <div className="space-y-1.5">
              {[
                { label: "Grooming", pct: "85%", growth: "+34%" },
                { label: "Dog Walking", pct: "65%", growth: "+21%" },
                { label: "Pet Sitting", pct: "45%", growth: "+12%" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="font-body text-xs text-critter-gray w-16 flex-shrink-0">{item.label}</span>
                  <div className="flex-1 bg-white rounded-full h-2">
                    <div className="bg-critter-orange rounded-full h-2" style={{ width: item.pct }} />
                  </div>
                  <span className="font-subtitle text-xs text-green-600">{item.growth}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReportingMockup() {
  return (
    <div className="w-full h-full flex flex-col justify-center p-2">
      <div className="bg-white rounded-xl p-4 border border-critter-cream shadow-sm space-y-3">
        <div className="flex items-center justify-between mb-1">
          <h4 className="font-subtitle text-sm text-critter-maroon">Scheduled Reports</h4>
          <Badge className="bg-critter-orange/10 text-critter-orange font-body text-xs">3 Active</Badge>
        </div>
        {[
          { name: "Weekly Revenue Summary", freq: "Every Monday", icon: <BarChart3 className="h-3 w-3" /> },
          { name: "Client Retention Report", freq: "1st of Month", icon: <Users className="h-3 w-3" /> },
          { name: "Campaign Performance", freq: "Every Friday", icon: <Mail className="h-3 w-3" /> },
        ].map((report, i) => (
          <div key={i} className="flex items-center justify-between p-2.5 bg-critter-beige/50 rounded-lg">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-critter-orange/10 flex items-center justify-center text-critter-orange">
                {report.icon}
              </div>
              <div>
                <p className="font-subtitle text-xs text-critter-maroon">{report.name}</p>
                <div className="flex items-center gap-1">
                  <Clock className="h-2.5 w-2.5 text-critter-gray" />
                  <span className="font-body text-xs text-critter-gray">{report.freq}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="font-body text-xs text-green-600">Active</span>
            </div>
          </div>
        ))}
        <div className="flex items-center gap-2 p-2 bg-critter-orange/5 rounded-lg">
          <MessageSquare className="h-3.5 w-3.5 text-critter-orange" />
          <p className="font-body text-xs text-critter-gray">Ask Togo to create a new report anytime</p>
        </div>
      </div>
    </div>
  );
}

function RevenueInsightsMockup() {
  return (
    <div className="w-full h-full flex flex-col justify-center p-2">
      <div className="bg-white rounded-xl p-4 border border-critter-cream shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="font-subtitle text-sm text-critter-maroon">Revenue by Service</h4>
          <Badge className="bg-green-100 text-green-700 font-body text-xs">+18% MoM</Badge>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { service: "Walking", amount: "$12,450", pct: "42%" },
            { service: "Grooming", amount: "$8,230", pct: "28%" },
            { service: "Sitting", amount: "$5,890", pct: "20%" },
          ].map((item, i) => (
            <div key={i} className="text-center p-2 bg-critter-beige/50 rounded-lg">
              <p className="font-title text-base text-critter-orange">{item.amount}</p>
              <p className="font-body text-xs text-critter-maroon">{item.service}</p>
              <p className="font-body text-xs text-critter-gray">{item.pct}</p>
            </div>
          ))}
        </div>
        <div>
          <p className="font-subtitle text-xs text-critter-maroon mb-2">Monthly Trend</p>
          <div className="flex items-end gap-1 h-10">
            {[35, 42, 38, 55, 48, 62, 58, 70, 65, 75, 82, 90].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-critter-orange/60 rounded-t-sm hover:bg-critter-orange transition-colors"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
          <Zap className="h-3.5 w-3.5 text-green-600" />
          <p className="font-body text-xs text-green-700">Grooming revenue up 34% — highest growth service</p>
        </div>
      </div>
    </div>
  );
}

function ClientJourneyMockup() {
  return (
    <div className="w-full h-full flex flex-col justify-center p-2">
      <div className="bg-white rounded-xl p-4 border border-critter-cream shadow-sm">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-full bg-critter-maroon text-white flex items-center justify-center font-subtitle text-sm">SJ</div>
          <div>
            <p className="font-subtitle text-sm text-critter-maroon">Sarah Johnson</p>
            <p className="font-body text-xs text-critter-gray flex items-center gap-1">
              <PawPrint className="h-3 w-3 text-critter-orange" /> Max &middot; Golden Retriever
            </p>
          </div>
          <Badge className="ml-auto bg-critter-orange/10 text-critter-orange font-body text-xs">VIP</Badge>
        </div>
        <div className="space-y-2.5">
          {[
            { date: "Jan 15", event: "First inquiry via website form", stage: "Lead", color: "bg-blue-400" },
            { date: "Jan 18", event: "Meet & Greet completed", stage: "Prospect", color: "bg-amber-400" },
            { date: "Jan 22", event: "First booking — Dog Walking", stage: "New Client", color: "bg-critter-orange" },
            { date: "Mar 10", event: "Added Grooming service", stage: "Active", color: "bg-green-400" },
            { date: "Jun 5", event: "Referred 3 new clients", stage: "VIP", color: "bg-purple-400" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <div className="flex flex-col items-center">
                <div className={`w-2.5 h-2.5 rounded-full ${item.color} flex-shrink-0 mt-1`} />
                {i < 4 && <div className="w-0.5 h-6 bg-critter-cream" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-body text-xs text-critter-maroon">{item.event}</p>
                  <span className="font-body text-xs text-critter-gray">{item.date}</span>
                </div>
                <Badge variant="outline" className="text-xs border-critter-cream mt-0.5">{item.stage}</Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Feature sections data
const features = [
  {
    title: "Talk with your data",
    description: "Ask questions like never before. Togo knows your data, knows your history, and knows the trends and insights underpinning today's performance and tomorrow's growth.",
    layout: "image-left" as const,
    icon: <Sparkles className="h-6 w-6" />,
    mockup: <TalkWithDataMockup />,
  },
  {
    title: "Robust reporting",
    description: "Access and engage your data in all new ways. Ask questions, schedule reports, and deliver insights to your inbox on an ongoing basis.",
    layout: "image-right" as const,
    icon: <FileText className="h-6 w-6" />,
    mockup: <ReportingMockup />,
  },
  {
    title: "Revenue insights",
    description: "Understand revenue drivers at the service, category, and overarching level. Layer in insights by individual client, segment, or population, and you have a real understanding of your revenue.",
    layout: "image-left" as const,
    icon: <TrendingUp className="h-6 w-6" />,
    mockup: <RevenueInsightsMockup />,
  },
  {
    title: "Client journey",
    description: "Pull client history from first interaction through service delivery, setting notifications and reminders that keep you in tune with the day to day of client relationships, even as you scale.",
    layout: "image-right" as const,
    icon: <Users className="h-6 w-6" />,
    mockup: <ClientJourneyMockup />,
  },
];

// Live chat demo component
function LiveChatDemo() {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate messages appearing one by one
    const showNextMessage = () => {
      if (visibleMessages < demoConversation.length) {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setVisibleMessages((prev) => prev + 1);
        }, 1500);
      }
    };

    const timer = setTimeout(showNextMessage, visibleMessages === 0 ? 1000 : 2500);
    return () => clearTimeout(timer);
  }, [visibleMessages]);

  useEffect(() => {
    // Auto-scroll to bottom
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [visibleMessages, isTyping]);

  const restartDemo = () => {
    setVisibleMessages(0);
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-critter-cream overflow-hidden max-w-3xl mx-auto">
      {/* Chat Header */}
      <div className="px-6 py-4 border-b border-critter-cream flex items-center justify-between bg-critter-beige/30">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-critter-orange to-amber-500 flex items-center justify-center">
              <Dog className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white" />
          </div>
          <div>
            <p className="font-subtitle text-lg text-critter-maroon">Togo</p>
            <p className="font-body text-sm text-critter-gray">Your Smart Guide Dog</p>
          </div>
        </div>
        <Badge className="bg-critter-orange/10 text-critter-orange font-body">
          <Sparkles className="h-3 w-3 mr-1" /> Live Demo
        </Badge>
      </div>

      {/* Chat Messages */}
      <div ref={chatRef} className="p-6 space-y-4 bg-critter-beige/20 min-h-[400px] max-h-[500px] overflow-y-auto">
        {demoConversation.slice(0, visibleMessages).map((message, i) => (
          <div key={i}>
            {message.role === "user" ? (
              <div className="flex justify-end">
                <div className="bg-critter-maroon rounded-2xl rounded-br-sm px-5 py-3 max-w-[80%]">
                  <p className="font-body text-white">{message.content}</p>
                </div>
              </div>
            ) : (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-critter-orange to-amber-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <Dog className="h-4 w-4 text-white" />
                </div>
                <div className="bg-white rounded-2xl rounded-bl-sm px-5 py-4 max-w-[85%] border border-critter-cream shadow-sm">
                  <p className="font-body text-critter-maroon mb-3">{message.content}</p>

                  {message.data && (
                    <div className="space-y-2 mb-3">
                      {message.data.map((customer) => (
                        <div key={customer.rank} className="flex items-center justify-between py-2 px-3 bg-critter-beige/50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-critter-orange flex items-center justify-center font-subtitle text-xs text-white">
                              {customer.rank}
                            </span>
                            <span className="font-body text-sm text-critter-maroon">{customer.name}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="font-subtitle text-sm text-critter-orange">{customer.revenue}</span>
                            <span className="font-body text-xs text-critter-gray">{customer.visits} visits</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {message.draft && (
                    <div className="bg-critter-beige/50 rounded-lg p-4 mb-3">
                      <p className="font-subtitle text-sm text-critter-maroon mb-1">{message.draft.subject}</p>
                      <p className="font-body text-sm text-critter-gray">{message.draft.preview}</p>
                    </div>
                  )}

                  {message.followUp && (
                    <p className="font-body text-sm text-critter-orange">{message.followUp}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-critter-orange to-amber-500 flex items-center justify-center flex-shrink-0">
              <Dog className="h-4 w-4 text-white" />
            </div>
            <div className="bg-white rounded-2xl rounded-bl-sm px-5 py-4 border border-critter-cream shadow-sm">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-critter-orange/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-2 h-2 bg-critter-orange/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 bg-critter-orange/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}

        {visibleMessages >= demoConversation.length && !isTyping && (
          <div className="text-center pt-4">
            <button
              onClick={restartDemo}
              className="font-body text-sm text-critter-orange hover:underline"
            >
              Replay demo →
            </button>
          </div>
        )}
      </div>

      {/* Chat Input (decorative) */}
      <div className="px-6 py-4 border-t border-critter-cream bg-white">
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Ask Togo anything about your business..."
            className="flex-1 bg-critter-beige/50 rounded-full px-5 py-3 font-body text-critter-maroon placeholder:text-critter-gray outline-none"
            disabled
          />
          <button className="w-12 h-12 bg-critter-orange rounded-full flex items-center justify-center text-white shadow-sm">
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Feature section component
function FeatureSection({
  title,
  description,
  layout,
  icon,
  mockup,
}: {
  title: string;
  description: string;
  layout: "image-left" | "image-right";
  icon: React.ReactNode;
  mockup?: React.ReactNode;
}) {
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
              <BarChart3 className="h-16 w-16 text-critter-orange/40" />
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const textContent = (
    <div className="flex-1 flex flex-col justify-center">
      <div className="w-12 h-12 rounded-xl bg-critter-orange/10 flex items-center justify-center mb-4 text-critter-orange">
        {icon}
      </div>
      <h2 className="font-title text-3xl sm:text-4xl text-critter-maroon mb-4">
        {title}
      </h2>
      <p className="font-body text-lg text-critter-gray leading-relaxed mb-6">
        {description}
      </p>
      <a href={`${process.env.NEXT_PUBLIC_HUB_URL || 'https://hub.critter.pet'}/auth/signup`}>
        <Button className="bg-critter-orange hover:bg-critter-orange/90 text-white font-subtitle w-fit">
          Get Started
        </Button>
      </a>
    </div>
  );

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className={`flex flex-col ${layout === "image-left" ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}>
          {imageContent}
          {textContent}
        </div>
      </div>
    </section>
  );
}

export default function TogoAIPage() {
  const demoUrl = process.env.NEXT_PUBLIC_DEMO_URL || "https://calendly.com/jordy-johm/critter-crm-demo";

  return (
    <div className="min-h-screen bg-critter-beige">
      {/* Navigation */}
      <LandingNav />

      {/* Hero Section with Live Demo */}
      <section className="pt-28 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Live Chat Demo */}
          <div className="mb-16">
            <LiveChatDemo />
          </div>

          {/* Hero Text */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-title text-4xl sm:text-5xl md:text-6xl text-critter-maroon mb-6 leading-[1.1]">
              Stay in tune with your business
              <br />
              from client #1 to #1000
            </h1>
            <p className="font-body text-lg sm:text-xl text-critter-gray max-w-2xl mx-auto mb-8">
              AI trained on your most important data, delivering real insights and a new way to engage CRM and drive client engagement.
            </p>
            <a href={`${process.env.NEXT_PUBLIC_HUB_URL || 'https://hub.critter.pet'}/auth/signup`}>
              <Button size="lg" className="bg-critter-orange hover:bg-critter-orange/90 text-white font-subtitle px-8 h-12">
                Try Togo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      {features.slice(0, 2).map((feature, i) => (
        <FeatureSection key={i} {...feature} />
      ))}

      {/* "See what Togo can do for you" Banner */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-critter-cream rounded-2xl p-12 text-center">
            <h2 className="font-title text-3xl sm:text-4xl text-critter-maroon mb-4">
              See what Togo can do for you
            </h2>
            <p className="font-body text-critter-gray mb-8 max-w-xl mx-auto">
              Schedule time with our team to see what impact Togo can have on your business
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

      {/* More Feature Sections */}
      {features.slice(2).map((feature, i) => (
        <FeatureSection key={i + 2} {...feature} />
      ))}

      {/* Schedule a Demo CTA */}
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
    </div>
  );
}
