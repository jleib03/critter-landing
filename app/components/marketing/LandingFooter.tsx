"use client";

import Link from "next/link";
import Image from "next/image";

export default function LandingFooter() {
  const hubUrl = process.env.NEXT_PUBLIC_HUB_URL || "https://hub.critter.pet";

  return (
    <footer className="py-12 px-6 bg-critter-orange">
      <div className="container mx-auto max-w-6xl">
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
                // Fallback if white logo doesn't exist
                const target = e.target as HTMLImageElement;
                target.style.filter = 'brightness(0) invert(1)';
                target.src = '/images/critter-logo.png';
              }}
            />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <Link
              href="/pricing"
              className="font-body text-sm text-white/90 hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="font-body text-sm text-white/90 hover:text-white transition-colors"
            >
              Blog
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
              href="/terms"
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
    </footer>
  );
}
