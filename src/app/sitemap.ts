import type { MetadataRoute } from "next";
import { products } from "@/features/products/data/products";
import { siteConfig } from "@/lib/constants/site";

const staticRoutes = [
  {
    path: "/",
    changeFrequency: "weekly" as const,
    priority: 1,
  },
  {
    path: "/about",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: "/collection",
    changeFrequency: "weekly" as const,
    priority: 0.9,
  },
  {
    path: "/contact",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: "/whatsapp-order",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
];

function getAbsoluteUrl(path: string) {
  if (path === "/") {
    return siteConfig.url;
  }

  return `${siteConfig.url}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routeEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: getAbsoluteUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
    url: getAbsoluteUrl(`/collection/${product.slug}`),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...routeEntries, ...productEntries];
}