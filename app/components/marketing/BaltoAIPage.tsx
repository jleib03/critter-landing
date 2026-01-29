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

// Feature sections data
const features = [
  {
    title: "Talk with your data",
    description: "Ask questions like never before. Balto knows your data, knows your history, and knows the trends and insights underpinning today's performance and tomorrow's growth.",
    layout: "image-left" as const,
    icon: <Sparkles className="h-6 w-6" />,
  },
  {
    title: "Robust reporting",
    description: "Access and engage your data in all new ways. Ask questions, schedule reports, and deliver insights to your inbox on an ongoing basis.",
    layout: "image-right" as const,
    icon: <FileText className="h-6 w-6" />,
  },
  {
    title: "Revenue insights",
    description: "Understand revenue drivers at the service, category, and overarching level. Layer in insights by individual client, segment, or population, and you have a real understanding of your revenue.",
    layout: "image-left" as const,
    icon: <TrendingUp className="h-6 w-6" />,
  },
  {
    title: "Client journey",
    description: "Pull client history from first interaction through service delivery, setting notifications and reminders that keep you in tune with the day to day of client relationships, even as you scale.",
    layout: "image-right" as const,
    icon: <Users className="h-6 w-6" />,
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
            <p className="font-subtitle text-lg text-critter-maroon">Balto</p>
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
            placeholder="Ask Balto anything about your business..."
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
}: {
  title: string;
  description: string;
  layout: "image-left" | "image-right";
  icon: React.ReactNode;
}) {
  const imageContent = (
    <div className="flex-1">
      <div className="bg-white rounded-2xl shadow-lg border border-critter-cream p-8 aspect-[4/3] flex items-center justify-center">
        <div className="w-full h-full bg-gradient-to-br from-critter-beige to-critter-cream rounded-xl flex items-center justify-center">
          <BarChart3 className="h-16 w-16 text-critter-orange/40" />
        </div>
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

export default function BaltoAIPage() {
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
              <span className="text-critter-orange">from client #1 to #1000</span>
            </h1>
            <p className="font-body text-lg sm:text-xl text-critter-gray max-w-2xl mx-auto mb-8">
              AI trained on your most important data, delivering real insights and an all new way to engage CRM and client engagement.
            </p>
            <a href={`${process.env.NEXT_PUBLIC_HUB_URL || 'https://hub.critter.pet'}/auth/signup`}>
              <Button size="lg" className="bg-critter-orange hover:bg-critter-orange/90 text-white font-subtitle px-8 h-12">
                Try Balto
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

      {/* "See what Balto can do for you" Banner */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-critter-cream rounded-2xl p-12 text-center">
            <h2 className="font-title text-3xl sm:text-4xl text-critter-maroon mb-4">
              See what Balto can do for you
            </h2>
            <p className="font-body text-critter-gray mb-8 max-w-xl mx-auto">
              Schedule time with our team to see what impact Balto can have on your business
            </p>
            <Link href="https://calendly.com/critter-pet/demo" target="_blank" rel="noopener noreferrer">
              <Button className="bg-critter-orange hover:bg-critter-orange/90 text-white font-subtitle">
                Book a Demo
                <Calendar className="ml-2 h-4 w-4" />
              </Button>
            </Link>
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
            <Link href="https://calendly.com/critter-pet/demo" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-critter-orange hover:bg-critter-orange/90 text-white font-subtitle">
                Book a Demo
                <Calendar className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <LandingFooter />
    </div>
  );
}
