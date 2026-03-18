import { siteConfig } from "@/lib/constants/site";

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}#organization`,
        name: siteConfig.legalName,
        url: siteConfig.url,
        email: siteConfig.email,
        telephone: siteConfig.whatsappDisplay,
        description: siteConfig.description,
        areaServed: siteConfig.country,
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            telephone: siteConfig.whatsappDisplay,
            email: siteConfig.email,
            areaServed: siteConfig.country,
            availableLanguage: ["English"],
          },
        ],
        address: {
          "@type": "PostalAddress",
          addressRegion: siteConfig.region,
          addressCountry: "IN",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          "@id": `${siteConfig.url}#organization`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}