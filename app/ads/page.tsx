"use client";

import { useRef } from "react";
import { Download } from "lucide-react";
import { ads, adsFun, allAds, exportFileName, AdCanvas, type Ad } from "./ad-components";

/* ─────────────────────────────────────────────
   Main page
   ───────────────────────────────────────────── */

export default function AdsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const captureAd = async (adId: string) => {
    const el = document.getElementById(`export-${adId}`);
    if (!el) return null;

    const html2canvas = (await import("html2canvas")).default;
    return html2canvas(el, {
      scale: 1,
      useCORS: true,
      backgroundColor: null,
      width: 1080,
      height: 1350,
    });
  };

  const exportAd = async (ad: Ad) => {
    const canvas = await captureAd(ad.id);
    if (!canvas) return;

    const link = document.createElement("a");
    link.download = `${exportFileName(ad)}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const exportAll = async () => {
    const JSZip = (await import("jszip")).default;
    const zip = new JSZip();

    for (const ad of allAds) {
      const canvas = await captureAd(ad.id);
      if (!canvas) continue;

      const blob = await new Promise<Blob | null>((resolve) =>
        canvas.toBlob((b) => resolve(b), "image/png")
      );
      if (blob) {
        zip.file(`${exportFileName(ad)}.png`, blob);
      }
    }

    const zipBlob = await zip.generateAsync({ type: "blob" });
    const link = document.createElement("a");
    link.download = "critter-social-ads.zip";
    link.href = URL.createObjectURL(zipBlob);
    link.click();
    URL.revokeObjectURL(link.href);
  };

  const previewScale = 0.35;

  return (
    <div className="min-h-screen bg-neutral-900 p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-white text-2xl font-bold mb-1">Critter Social Ads</h1>
            <p className="text-neutral-400 text-sm">1080 × 1350px · Instagram / Facebook Feed</p>
          </div>
          <button
            onClick={exportAll}
            className="flex items-center gap-2 bg-critter-orange hover:bg-critter-orange/90 text-white px-5 py-2.5 rounded-lg font-medium transition-colors"
          >
            <Download className="h-4 w-4" />
            Download All PNGs
          </button>
        </div>
      </div>

      {/* Set 1: Product Mockups */}
      <div className="max-w-7xl mx-auto mb-4">
        <h2 className="text-neutral-300 text-lg font-semibold mb-1">Set 1 — Product Mockups</h2>
        <p className="text-neutral-500 text-sm">UI-forward visuals showcasing the product</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" ref={containerRef}>
        {ads.map((ad) => (
          <div key={ad.id} className="group">
            <div
              className="relative overflow-hidden rounded-xl bg-neutral-800 cursor-pointer"
              style={{
                width: 1080 * previewScale,
                height: 1350 * previewScale,
              }}
              onClick={() => exportAd(ad)}
            >
              <div
                style={{
                  transform: `scale(${previewScale})`,
                  transformOrigin: "top left",
                }}
              >
                <AdCanvas ad={ad} />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 bg-white/90 text-neutral-900 px-4 py-2 rounded-lg font-medium text-sm">
                  <Download className="h-4 w-4" />
                  Download PNG
                </div>
              </div>
            </div>
            <p className="text-neutral-400 text-xs mt-2 truncate">{exportFileName(ad)}</p>
          </div>
        ))}
      </div>

      {/* Set 2: Fun / Illustrative */}
      <div className="max-w-7xl mx-auto mt-16 mb-4">
        <h2 className="text-neutral-300 text-lg font-semibold mb-1">Set 2 — Fun &amp; Illustrative</h2>
        <p className="text-neutral-500 text-sm">Bold shapes, playful compositions, brand-forward</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {adsFun.map((ad) => (
          <div key={ad.id} className="group">
            <div
              className="relative overflow-hidden rounded-xl bg-neutral-800 cursor-pointer"
              style={{
                width: 1080 * previewScale,
                height: 1350 * previewScale,
              }}
              onClick={() => exportAd(ad)}
            >
              <div
                style={{
                  transform: `scale(${previewScale})`,
                  transformOrigin: "top left",
                }}
              >
                <AdCanvas ad={ad} />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 bg-white/90 text-neutral-900 px-4 py-2 rounded-lg font-medium text-sm">
                  <Download className="h-4 w-4" />
                  Download PNG
                </div>
              </div>
            </div>
            <p className="text-neutral-400 text-xs mt-2 truncate">{exportFileName(ad)}</p>
          </div>
        ))}
      </div>

      {/* Full-size renders (off-screen for export) */}
      <div className="fixed left-[-9999px] top-0">
        {allAds.map((ad) => (
          <AdCanvas key={ad.id} ad={ad} idPrefix="export" forExport />
        ))}
      </div>
    </div>
  );
}
