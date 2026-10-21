"use client";

import { useState } from "react";
import Link from "next/link";
import { AcquisitionSource, getHubLinks } from "@/lib/marketing-links";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
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
  Menu,
  X,
} from "lucide-react";
import { DEMO_PATH } from "@/lib/demo";
import { DEMO_CTA, SIGNUP_CTA } from "@/lib/marketing-offers";

interface LandingNavProps {
  acquisitionSource?: AcquisitionSource;
  onFeatureClick?: (featureIndex: number) => void;
}

export default function LandingNav({
  onFeatureClick, acquisitionSource
}: LandingNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const hubLinks = getHubLinks(acquisitionSource);
  const demoUrl = DEMO_PATH;

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

          {/* Center: Nav Items (Desktop) */}
          <div className="hidden lg:flex items-center gap-1">
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
                  <a href={demoUrl} className="flex items-center gap-2 cursor-pointer">
                    <Calendar className="h-4 w-4 text-critter-orange" />
                    <span className="font-body">{DEMO_CTA}</span>
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

          {/* Right: Log In + sign-up + Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Log In - Product Selector Dropdown (Desktop) */}
            <a href={hubLinks.signin} className="hidden lg:block">
              <Button variant="ghost" className="font-subtitle text-black hover:text-critter-orange">
                Log In
              </Button>
            </a>

            {/* Sign-up - Direct link to Hub signup */}
            <a href={hubLinks.signup} className="hidden sm:block">
              <Button className="bg-critter-orange hover:bg-critter-orange/90 text-white font-subtitle">
                {SIGNUP_CTA}
              </Button>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-critter-maroon"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-critter-beige/95 backdrop-blur-md border-t border-critter-cream">
          <div className="container mx-auto px-6 py-4 space-y-1">
            {/* Features */}
            <p className="font-subtitle text-xs text-critter-gray uppercase tracking-wider px-3 pt-2 pb-1">Features</p>
            {[
              { href: "/features/crm", icon: <Users className="h-4 w-4 text-critter-orange" />, label: "CRM" },
              { href: "/features/marketing", icon: <Mail className="h-4 w-4 text-critter-orange" />, label: "Marketing Automation" },
              { href: "/features/lead-generation", icon: <ClipboardList className="h-4 w-4 text-critter-orange" />, label: "Lead Generation" },
              { href: "/features/referrals", icon: <GitBranch className="h-4 w-4 text-critter-orange" />, label: "Referral Program" },
              { href: "/features/data-integration", icon: <Database className="h-4 w-4 text-critter-orange" />, label: "Data Integration" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg font-body text-sm text-critter-maroon hover:bg-critter-cream transition-colors"
              >
                {item.icon}
                {item.label}
              </Link>
            ))}

            {/* Other links */}
            <div className="border-t border-critter-cream pt-2 mt-2">
              <Link
                href="/togo-ai"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg font-body text-sm text-critter-maroon hover:bg-critter-cream transition-colors"
              >
                <Dog className="h-4 w-4 text-critter-orange" />
                Togo AI
              </Link>
              <Link
                href="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg font-body text-sm text-critter-maroon hover:bg-critter-cream transition-colors"
              >
                <span className="w-4" />
                Pricing
              </Link>
              <a
                href={demoUrl}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg font-body text-sm text-critter-maroon hover:bg-critter-cream transition-colors"
              >
                <Calendar className="h-4 w-4 text-critter-orange" />
                {DEMO_CTA}
              </a>
              <Link
                href="/faqs"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg font-body text-sm text-critter-maroon hover:bg-critter-cream transition-colors"
              >
                <HelpCircle className="h-4 w-4 text-critter-orange" />
                FAQs
              </Link>
            </div>

            {/* Login + CTA */}
            <div className="border-t border-critter-cream pt-3 mt-2 space-y-2">
              <a
                href={hubLinks.signin}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-critter-cream font-subtitle text-sm text-critter-maroon hover:bg-critter-cream transition-colors"
              >
                Log In
              </a>
              <a href={hubLinks.signup} className="block">
                <Button className="w-full bg-critter-orange hover:bg-critter-orange/90 text-white font-subtitle">
                  {SIGNUP_CTA}
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
