import Link from "next/link";

import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";
import { navigationLinks } from "@/lib/constants/navigation";
import { siteConfig } from "@/lib/constants/site";
import { getWhatsAppHref } from "@/lib/constants/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-(--border) bg-white/65">
      <Container className="grid gap-10 py-14 lg:grid-cols-[1.1fr_0.8fr_1fr]">
        <div className="space-y-5">
          <div>
            <h3 className="font-serif text-3xl text-(--foreground)">
              {siteConfig.name}
            </h3>
            <p className="mt-2 text-xs uppercase tracking-[0.26em] text-(--gold)">
              Manufacturer • Wholesale • India
            </p>
          </div>

          <p className="max-w-sm text-sm leading-7 text-(--muted)">
            Premium jewellery stock box manufacturer for wholesale buyers who
            want elegant packaging, smoother enquiries, and direct business
            handling on WhatsApp.
          </p>

          <div className="flex flex-wrap gap-3">
            {siteConfig.trustHighlights.slice(0, 4).map((item) => (
              <span
                key={item}
                className="rounded-full border border-(--border) bg-[#fcf7f1] px-4 py-2 text-xs text-(--foreground)"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="text-sm text-(--muted)">{siteConfig.pricingNote}</p>
        </div>

        <div className="space-y-5">
          <h4 className="text-xs font-semibold uppercase tracking-[0.28em] text-(--gold)">
            Quick Links
          </h4>

          <div className="flex flex-col gap-3">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-(--foreground) transition hover:text-(--maroon)"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <h4 className="text-xs font-semibold uppercase tracking-[0.28em] text-(--gold)">
            Business Contact
          </h4>

          <div className="space-y-3 text-sm leading-7 text-(--muted)">
            <p>{siteConfig.location}</p>
            <p>{siteConfig.serviceArea}</p>
            <p>{siteConfig.businessHours}</p>

            <a
              href={`mailto:${siteConfig.email}`}
              className="block transition hover:text-(--maroon)"
            >
              {siteConfig.email}
            </a>

            <a
              href={getWhatsAppHref()}
              target="_blank"
              rel="noreferrer"
              className="block transition hover:text-(--maroon)"
            >
              {siteConfig.whatsappDisplay}
            </a>
          </div>

          <Button href={getWhatsAppHref()} size="sm">
            Chat on WhatsApp
          </Button>
        </div>
      </Container>

      <div className="border-t border-(--border) py-4 text-center text-xs text-[rgba(31,27,24,0.6)]">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}