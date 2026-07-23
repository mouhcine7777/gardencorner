import type { MetadataRoute } from "next";

// Required for static HTML export (`output: "export"`).
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://gardencorner.ma/sitemap.xml",
    host: "https://gardencorner.ma",
  };
}
