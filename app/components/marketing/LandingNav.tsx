"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/app/components/ui/dropdown-menu";
import {
  ChevronDown,
  BookOpen,
  Lightbulb,
  FileText,
  Newspaper,
  GitBranch,
  Mail,
  Zap,
  ClipboardList,
  MessageSquare,
  Users,
  Dog,
  Database,
  Calendar,
} from "lucide-react";

interface LandingNavProps {
  onFeatureClick?: (featureIndex: number) => void;
}

export default function LandingNav({
  onFeatureClick
}: LandingNavProps) {
  const hubUrl = process.env.NEXT_PUBLIC_HUB_URL || "https://hub.critter.pet";
  const opsUrl = process.env.NEXT_PUBLIC_OPS_URL || "https://app.critter.pet";

  const scrollToDemo = (featureIndex: number) => {
    // Scroll to demo section
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
    // Set active feature if callback provided
    if (onFeatureClick) {
      onFeatureClick(featureIndex);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-critter-beige/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/critter-logo.png"
              alt="Critter"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
          <div className="flex items-center gap-3">
            {/* Features Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="hidden sm:flex items-center gap-1 font-subtitle text-critter-maroon hover:text-critter-orange">
                  Features
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 bg-white border-critter-cream">
                <DropdownMenuItem
                  onClick={() => scrollToDemo(0)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <GitBranch className="h-4 w-4 text-critter-orange" />
                  <span className="font-body">Lifecycle Funnel</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => scrollToDemo(5)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Mail className="h-4 w-4 text-critter-orange" />
                  <span className="font-body">Campaigns</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => scrollToDemo(2)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Zap className="h-4 w-4 text-critter-orange" />
                  <span className="font-body">Programs</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => scrollToDemo(4)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <ClipboardList className="h-4 w-4 text-critter-orange" />
                  <span className="font-body">Lead Generation</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => scrollToDemo(6)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="h-4 w-4 text-critter-orange" />
                  <span className="font-body">Texting</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => scrollToDemo(3)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Users className="h-4 w-4 text-critter-orange" />
                  <span className="font-body">Customer CRM</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Balto AI Link */}
            <Link href="/balto-ai" className="hidden sm:block">
              <Button
                variant="ghost"
                className="flex items-center gap-1 font-subtitle text-critter-maroon hover:text-critter-orange"
              >
                <Dog className="h-4 w-4" />
                Balto AI
              </Button>
            </Link>

            {/* Resources Dropdown (includes Blog) */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="hidden sm:flex items-center gap-1 font-subtitle text-critter-maroon hover:text-critter-orange">
                  Resources
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-white border-critter-cream">
                <DropdownMenuItem asChild>
                  <Link href="/blog" className="flex items-center gap-2 cursor-pointer">
                    <BookOpen className="h-4 w-4 text-critter-orange" />
                    <span className="font-body">All Articles</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/blog/category/growth-tips" className="flex items-center gap-2 cursor-pointer">
                    <Lightbulb className="h-4 w-4 text-critter-orange" />
                    <span className="font-body">Growth Tips</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/blog/category/case-study" className="flex items-center gap-2 cursor-pointer">
                    <FileText className="h-4 w-4 text-green-600" />
                    <span className="font-body">Case Studies</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/blog/category/guide" className="flex items-center gap-2 cursor-pointer">
                    <BookOpen className="h-4 w-4 text-purple-600" />
                    <span className="font-body">Guides</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/blog/category/news" className="flex items-center gap-2 cursor-pointer">
                    <Newspaper className="h-4 w-4 text-blue-600" />
                    <span className="font-body">News</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/pricing" className="hidden sm:block">
              <Button variant="ghost" className="font-subtitle text-critter-maroon hover:text-critter-orange">
                Pricing
              </Button>
            </Link>

            {/* Product Selector - Log In Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="hidden sm:flex items-center gap-1 font-subtitle text-critter-maroon hover:text-critter-orange">
                  Log In
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 bg-white border-critter-cream">
                <DropdownMenuLabel className="font-subtitle text-critter-gray text-xs">Choose your product</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <a
                    href={`${hubUrl}/auth/signin`}
                    className="flex items-center gap-3 cursor-pointer py-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-critter-orange/10 flex items-center justify-center">
                      <Database className="h-5 w-5 text-critter-orange" />
                    </div>
                    <div>
                      <p className="font-subtitle text-critter-maroon">Critter Hub CRM</p>
                      <p className="font-body text-xs text-critter-gray">Marketing & customer management</p>
                    </div>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href={`${opsUrl}/auth/signin`}
                    className="flex items-center gap-3 cursor-pointer py-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-critter-blue/20 flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-critter-blue" />
                    </div>
                    <div>
                      <p className="font-subtitle text-critter-maroon">Critter Ops</p>
                      <p className="font-body text-xs text-critter-gray">Scheduling & operations</p>
                    </div>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Product Selector - Free Trial Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-critter-orange hover:bg-critter-orange/90 text-white font-subtitle flex items-center gap-1">
                  Free Trial
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 bg-white border-critter-cream">
                <DropdownMenuLabel className="font-subtitle text-critter-gray text-xs">Start your free trial</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <a
                    href={`${hubUrl}/auth/signup`}
                    className="flex items-center gap-3 cursor-pointer py-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-critter-orange/10 flex items-center justify-center">
                      <Database className="h-5 w-5 text-critter-orange" />
                    </div>
                    <div>
                      <p className="font-subtitle text-critter-maroon">Critter Hub CRM</p>
                      <p className="font-body text-xs text-critter-gray">7-day free trial</p>
                    </div>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href={`${opsUrl}/auth/signup`}
                    className="flex items-center gap-3 cursor-pointer py-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-critter-blue/20 flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-critter-blue" />
                    </div>
                    <div>
                      <p className="font-subtitle text-critter-maroon">Critter Ops</p>
                      <p className="font-body text-xs text-critter-gray">14-day free trial</p>
                    </div>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
