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
  HelpCircle,
  GitBranch,
  Mail,
  ClipboardList,
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
  const demoUrl = process.env.NEXT_PUBLIC_DEMO_URL || "https://calendly.com/jordy-johm/critter-crm-demo";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-critter-beige/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/critter-logo.png"
              alt="Critter"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Center: Nav Items */}
          <div className="hidden sm:flex items-center gap-1">
            {/* Features Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 font-subtitle text-black hover:text-critter-orange">
                  Features
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64 bg-white border-critter-cream">
                <DropdownMenuItem asChild>
                  <Link href="/features/crm" className="flex items-center gap-2 cursor-pointer">
                    <Users className="h-4 w-4 text-critter-orange" />
                    <span className="font-body">CRM</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/features/marketing" className="flex items-center gap-2 cursor-pointer">
                    <Mail className="h-4 w-4 text-critter-orange" />
                    <span className="font-body">Marketing Automation</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/features/lead-generation" className="flex items-center gap-2 cursor-pointer">
                    <ClipboardList className="h-4 w-4 text-critter-orange" />
                    <span className="font-body">Lead Generation</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/features/referrals" className="flex items-center gap-2 cursor-pointer">
                    <GitBranch className="h-4 w-4 text-critter-orange" />
                    <span className="font-body">Referral Program</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/features/data-integration" className="flex items-center gap-2 cursor-pointer">
                    <Database className="h-4 w-4 text-critter-orange" />
                    <span className="font-body">Data Integration</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/features/scheduling" className="flex items-center gap-2 cursor-pointer">
                    <Calendar className="h-4 w-4 text-critter-orange" />
                    <span className="font-body">Schedule & Operations</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Togo AI Link */}
            <Link href="/togo-ai">
              <Button
                variant="ghost"
                className="flex items-center gap-1 font-subtitle text-black hover:text-critter-orange"
              >
                <Dog className="h-4 w-4" />
                Togo AI
              </Button>
            </Link>

            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 font-subtitle text-black hover:text-critter-orange">
                  Resources
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-64 bg-white border-critter-cream">
                <DropdownMenuItem asChild>
                  <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer">
                    <Calendar className="h-4 w-4 text-critter-orange" />
                    <span className="font-body">Schedule a Demo</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/faqs" className="flex items-center gap-2 cursor-pointer">
                    <HelpCircle className="h-4 w-4 text-critter-orange" />
                    <span className="font-body">FAQs</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/pricing">
              <Button variant="ghost" className="font-subtitle text-black hover:text-critter-orange">
                Pricing
              </Button>
            </Link>
          </div>

          {/* Right: Log In + Free Trial */}
          <div className="flex items-center gap-3">
            {/* Log In - Product Selector Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="hidden sm:flex items-center gap-1 font-subtitle text-black hover:text-critter-orange">
                  Log In
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-72 bg-white border-critter-cream">
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

            {/* Free Trial - Direct link to Hub signup */}
            <a href={`${hubUrl}/auth/signup`}>
              <Button className="bg-critter-orange hover:bg-critter-orange/90 text-white font-subtitle">
                Free Trial
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
