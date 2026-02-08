"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Mail, Check } from "lucide-react";
import LandingNav from "@/app/components/marketing/LandingNav";
import LandingFooter from "@/app/components/marketing/LandingFooter";

export default function UnsubscribePage() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would call an API endpoint
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-critter-beige">
      <LandingNav />

      <div className="pt-36 pb-16">
        <div className="container mx-auto px-6 max-w-lg">
          <div className="text-center mb-8">
            <h1 className="font-title text-3xl sm:text-4xl text-critter-maroon mb-4">
              Unsubscribe
            </h1>
          </div>

          {submitted ? (
            <div className="bg-white rounded-2xl border border-critter-cream p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="font-title text-2xl text-critter-maroon mb-2">
                You&apos;ve been unsubscribed
              </h2>
              <p className="font-body text-critter-gray">
                {email} has been removed from our mailing list. You will no longer receive marketing emails from Critter.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-critter-cream p-8 space-y-6">
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-critter-orange/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-7 w-7 text-critter-orange" />
                </div>
                <p className="font-body text-critter-gray">
                  Enter your email address to unsubscribe from Critter marketing emails.
                </p>
              </div>
              <div>
                <label htmlFor="email" className="block font-subtitle text-sm text-critter-maroon mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-critter-cream rounded-lg px-4 py-3 font-body text-sm text-critter-maroon placeholder:text-critter-gray/50 outline-none focus:border-critter-orange transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-critter-orange hover:bg-critter-orange/90 text-white font-subtitle"
              >
                Unsubscribe
              </Button>
            </form>
          )}
        </div>
      </div>

      <LandingFooter />
    </div>
  );
}
