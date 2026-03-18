import type { Metadata } from "next";
import type { Product } from "@/features/products/types/product.types";
import { siteConfig } from "@/lib/constants/site";

const baseKeywords = [
  "jewellery stock box",
  "jewellery packaging",
  "wholesale jewellery box",
  "stock boxes manufacturer",
  "Bankey Bihari Boxwala",
  "jewellery box supplier India",
  "premium jewellery packaging",
  "bulk jewellery boxes",
];

function getAbsoluteUrl(path: string) {
  if (path === "/") {
    return siteConfig.url;
  }

  return `${siteConfig.url}${path}`;
}

function mergeKeywords(keywords: string[] = []) {
  return [...new Set([...baseKeywords, ...keywords])];
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: baseKeywords,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

type CreatePageMetadataArgs = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: CreatePageMetadataArgs): Metadata {
  const url = getAbsoluteUrl(path);

  return {
    title,
    description,
    keywords: mergeKeywords(keywords),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
    },
  };
}

export function createProductMetadata(product: Product): Metadata {
  const path = `/collection/${product.slug}`;
  const url = getAbsoluteUrl(path);

  return {
    title: product.name,
    description: product.shortDescription,
    keywords: mergeKeywords([
      product.name,
      product.category.replaceAll("-", " "),
      product.material,
      product.finish,
      ...product.colours,
      ...product.sizes,
      "wholesale jewellery packaging",
      "bulk order jewellery boxes",
    ]),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${product.name} | ${siteConfig.name}`,
      description: product.shortDescription,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | ${siteConfig.name}`,
      description: product.shortDescription,
    },
  };
}