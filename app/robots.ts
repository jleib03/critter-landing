import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/activate", "/redirect", "/reset-password", "/payment-success", "/payment-canceled", "/unsubscribe"],
      },
    ],
    sitemap: "https://critter.pet/sitemap.xml",
  };
}
