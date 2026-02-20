"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import Script from "next/script";
import { ads, adsFun, allAds, exportFileName, AdCanvas } from "../ad-components";

function FigmaExportContent() {
  const searchParams = useSearchParams();
  const adId = searchParams.get("ad");

  const ad = adId ? allAds.find((a) => a.id === adId) : null;

  // Set dynamic page title and constrain body width for clean Figma capture
  useEffect(() => {
    if (ad) {
      document.title = exportFileName(ad);
      document.body.style.width = "1080px";
      document.body.style.maxWidth = "1080px";
      document.body.style.overflow = "hidden";
      document.body.style.margin = "0";
      document.body.style.padding = "0";
      document.documentElement.style.overflow = "hidden";
    }
    return () => {
      document.body.style.width = "";
      document.body.style.maxWidth = "";
      document.body.style.overflow = "";
      document.body.style.margin = "";
      document.body.style.padding = "";
      document.documentElement.style.overflow = "";
    };
  }, [ad]);

  if (!adId) {
    return (
      <div style={{ padding: 40, fontFamily: "sans-serif" }}>
        <h1 style={{ fontSize: 24, marginBottom: 16 }}>Figma Export — Select an ad</h1>
        <p style={{ marginBottom: 24, color: "#666" }}>
          Add <code>?ad=ID</code> to the URL to render a specific ad at full 1080x1350.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginTop: 16 }}>Mockup Ads</h3>
          {ads.map((a) => (
            <a key={a.id} href={`/ads/figma?ad=${a.id}`} style={{ color: "#E75837" }}>
              {a.id} — {a.headline.split("\n")[0]}
            </a>
          ))}
          <h3 style={{ fontSize: 18, fontWeight: 600, marginTop: 16 }}>Fun Ads</h3>
          {adsFun.map((a) => (
            <a key={a.id} href={`/ads/figma?ad=${a.id}`} style={{ color: "#E75837" }}>
              {a.id} — {a.headline.split("\n")[0]}
            </a>
          ))}
        </div>
      </div>
    );
  }

  if (!ad) {
    return (
      <div style={{ padding: 40, fontFamily: "sans-serif" }}>
        <h1 style={{ fontSize: 24, color: "red" }}>Ad not found: {adId}</h1>
        <a href="/ads/figma" style={{ color: "#E75837" }}>Back to list</a>
      </div>
    );
  }

  return (
    <div
      style={{
        width: 1080,
        height: 1350,
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <AdCanvas ad={ad} idPrefix="figma" />
    </div>
  );
}

export default function FigmaExportPage() {
  return (
    <>
      <Script
        src="https://mcp.figma.com/mcp/html-to-design/capture.js"
        strategy="afterInteractive"
      />
      <Suspense fallback={<div style={{ padding: 40 }}>Loading...</div>}>
        <FigmaExportContent />
      </Suspense>
    </>
  );
}
