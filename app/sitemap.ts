import type { MetadataRoute } from "next";

// Required for static HTML export (`output: "export"`).
export const dynamic = "force-static";

const BASE_URL = "https://gardencorner.ma";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/brunch", changeFrequency: "weekly", priority: 0.9 },
    { path: "/brunch/menu", changeFrequency: "monthly", priority: 0.7 },
    { path: "/bakes", changeFrequency: "weekly", priority: 0.8 },
    { path: "/bakes/menu", changeFrequency: "monthly", priority: 0.7 },
    { path: "/eataly", changeFrequency: "weekly", priority: 0.8 },
    { path: "/eataly/menu", changeFrequency: "monthly", priority: 0.7 },
    { path: "/home", changeFrequency: "weekly", priority: 0.8 },
    { path: "/evenements/magic-garden", changeFrequency: "monthly", priority: 0.6 },
    { path: "/evenements/nostalgia-lovers-festival", changeFrequency: "monthly", priority: 0.6 },
    { path: "/evenements/fanzone", changeFrequency: "monthly", priority: 0.6 },
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
