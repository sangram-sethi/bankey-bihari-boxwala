import type { Metadata } from "next";

import type { Product } from "@/features/products/types/product.types";
import { siteConfig } from "@/lib/constants/site";

function absoluteUrl(path: string = "/") {
  if (path === "/") {
    return siteConfig.url;
  }

  return `${siteConfig.url}${path}`;
}

function mergeKeywords(extraKeywords: string[] = []) {
  return [...new Set([...siteConfig.keywords, ...extraKeywords])];
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  referrer: "origin-when-cross-origin",
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: absoluteUrl("/"),
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: siteConfig.ogImagePath,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} social preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImagePath],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "business",
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
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    keywords: mergeKeywords(keywords),
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: siteConfig.ogImagePath,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} social preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [siteConfig.ogImagePath],
    },
  };
}

export function createProductMetadata(product: Product): Metadata {
  return createPageMetadata({
    title: product.name,
    description: product.shortDescription,
    path: `/collection/${product.slug}`,
    keywords: [
      product.name,
      product.category.replaceAll("-", " "),
      product.material,
      product.finish,
      ...product.colours,
      ...product.sizes,
      "wholesale jewellery packaging",
      "bulk order jewellery boxes",
    ],
  });
}