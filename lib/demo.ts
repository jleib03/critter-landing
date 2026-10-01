/**
 * The one "Join a live demo" destination on critter.pet (BL-395): our own /demo page, which embeds
 * the hub's live group demo picker. Every demo CTA links here in the same tab. (NEXT_PUBLIC_DEMO_URL
 * is deliberately no longer read — a stale value would send visitors to the retired 1:1 form.)
 */
export const DEMO_PATH = "/demo";

/** Hub origin that serves the embeddable picker (/book-demo?embed=1) and its public API. */
export const HUB_URL = (process.env.NEXT_PUBLIC_HUB_URL || "https://hub.critter.pet").trim().replace(/\/$/, "");
