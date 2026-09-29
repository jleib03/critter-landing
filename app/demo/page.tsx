"use client";

/**
 * critter.pet/demo — the one place every "Join a live demo" button lands (BL-395). The live group
 * demo picker itself is the hub's public /book-demo page in embed mode, so registration, seats and
 * Critter's confirmation email all stay in one system; the hub reports its height so the frame
 * grows with the content. Public — no sign-in anywhere on this path.
 */

import { useEffect, useRef, useState } from "react";
import { Video, Clock, MessageCircle } from "lucide-react";
import LandingNav from "@/app/components/marketing/LandingNav";
import LandingFooter from "@/app/components/marketing/LandingFooter";
import { HUB_URL } from "@/lib/demo";

export default function DemoPage() {
  const [height, setHeight] = useState(900);
  const frame = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const hubOrigin = new URL(HUB_URL).origin;
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== hubOrigin || e.data?.type !== "critter-embed-height") return;
      const h = Number(e.data.height);
      if (Number.isFinite(h) && h > 200) setHeight(Math.ceil(h) + 4);
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div className="min-h-screen bg-critter-beige">
      <LandingNav />

      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center mb-8">
            <h1 className="font-title text-3xl sm:text-4xl md:text-5xl text-critter-maroon mb-4">Join a live demo</h1>
            <p className="font-body text-lg text-critter-gray max-w-2xl mx-auto">
              See how Critter helps your pet care business keep customers booking and grow revenue — live on Zoom with our team.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 font-body text-sm text-critter-maroon">
              <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-critter-orange" /> 45 minutes</span>
              <span className="inline-flex items-center gap-2"><Video className="h-4 w-4 text-critter-orange" /> Tuesdays &amp; Thursdays, 11:00am and 1:00pm CT</span>
              <span className="inline-flex items-center gap-2"><MessageCircle className="h-4 w-4 text-critter-orange" /> Bring your questions</span>
            </div>
          </div>

          <iframe
            ref={frame}
            title="Pick a live demo time"
            src={`${HUB_URL}/book-demo?embed=1`}
            style={{ height }}
            className="w-full border-0 bg-transparent"
            loading="eager"
          />

          <p className="mt-6 text-center font-body text-sm text-critter-gray">
            Already a Critter customer? <a className="underline" href={`${HUB_URL}/live-classes`}>Join a live class</a>.
          </p>
        </div>
      </div>

      <LandingFooter />
    </div>
  );
}
