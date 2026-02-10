"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";

export default function LandingFooter() {
  const hubUrl = process.env.NEXT_PUBLIC_HUB_URL || "https://hub.critter.pet";

  return (
    <footer className="py-12 px-6 bg-critter-orange">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col gap-8">
          {/* Top row: Logo + CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/images/critter-logo-white.png"
                alt="Critter"
                width={120}
                height={40}
                className="h-8 w-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.filter = 'brightness(0) invert(1)';
                  target.src = '/images/critter-logo.png';
                }}
              />
            </div>

            {/* Start Free Trial button */}
            <a href={`${hubUrl}/auth/signup`}>
              <Button className="bg-white text-critter-orange hover:bg-white/90 font-subtitle px-6">
                Start Free Trial
              </Button>
            </a>
          </div>

          {/* Bottom row: Links + Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/20 pt-6">
            {/* Navigation Links */}
            <div className="flex items-center gap-x-6 gap-y-2 flex-wrap justify-center">
              <Link
                href="/pricing"
                className="font-body text-sm text-white/90 hover:text-white transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/contact-us"
                className="font-body text-sm text-white/90 hover:text-white transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="mailto:support@critter.pet"
                className="font-body text-sm text-white/90 hover:text-white transition-colors"
              >
                Support
              </Link>
              <a
                href={`${hubUrl}/auth/signin`}
                className="font-body text-sm text-white/90 hover:text-white transition-colors"
              >
                Sign In
              </a>
              <Link
                href="/privacy"
                className="font-body text-sm text-white/90 hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms-of-use"
                className="font-body text-sm text-white/90 hover:text-white transition-colors"
              >
                Terms
              </Link>
            </div>

            {/* Copyright */}
            <p className="font-body text-sm text-white/70">
              &copy; {new Date().getFullYear()} Critter
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
