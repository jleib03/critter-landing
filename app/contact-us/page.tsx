"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Mail, Check, Loader2 } from "lucide-react";
import LandingNav from "@/app/components/marketing/LandingNav";
import LandingFooter from "@/app/components/marketing/LandingFooter";

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const result = await res.json().catch(() => ({}));
        throw new Error(result.error || "Failed to send");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again or email us at support@critter.pet.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-critter-beige">
      <LandingNav />

      <div className="pt-36 pb-16">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="font-title text-4xl sm:text-5xl text-critter-maroon mb-4">
              Contact Us
            </h1>
            <p className="font-body text-lg text-critter-gray max-w-xl mx-auto">
              Have a question or want to learn more about Critter? We&apos;d love to hear from you.
            </p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-2xl border border-critter-cream p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="font-title text-2xl text-critter-maroon mb-2">
                Thank you!
              </h2>
              <p className="font-body text-critter-gray">
                We&apos;ve received your message and will get back to you shortly. You can also reach us directly at{" "}
                <a href="mailto:support@critter.pet" className="text-critter-orange hover:underline">
                  support@critter.pet
                </a>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-critter-cream p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block font-subtitle text-sm text-critter-maroon mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border border-critter-cream rounded-lg px-4 py-3 font-body text-sm text-critter-maroon placeholder:text-critter-gray/50 outline-none focus:border-critter-orange transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-subtitle text-sm text-critter-maroon mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border border-critter-cream rounded-lg px-4 py-3 font-body text-sm text-critter-maroon placeholder:text-critter-gray/50 outline-none focus:border-critter-orange transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block font-subtitle text-sm text-critter-maroon mb-2">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full border border-critter-cream rounded-lg px-4 py-3 font-body text-sm text-critter-maroon placeholder:text-critter-gray/50 outline-none focus:border-critter-orange transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-subtitle text-sm text-critter-maroon mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full border border-critter-cream rounded-lg px-4 py-3 font-body text-sm text-critter-maroon placeholder:text-critter-gray/50 outline-none focus:border-critter-orange transition-colors resize-none"
                  placeholder="How can we help?"
                />
              </div>
              {error && (
                <p className="font-body text-sm text-red-600">{error}</p>
              )}
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full bg-critter-orange hover:bg-critter-orange/90 text-white font-subtitle"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          )}
        </div>
      </div>

      <LandingFooter />
    </div>
  );
}
