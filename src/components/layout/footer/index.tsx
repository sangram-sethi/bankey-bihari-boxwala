import Link from "next/link";
import { Container } from "@/components/common/container";
import { Button } from "@/components/common/button";
import { navigationLinks } from "@/lib/constants/navigation";
import { siteConfig } from "@/lib/constants/site";
import { getWhatsAppHref } from "@/lib/constants/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-(--border) bg-white/65">
      <Container className="grid gap-10 py-14 lg:grid-cols-[1.15fr_0.85fr_1fr]">
        <div className="space-y-5">
          <div>
            <div className="inline-flex flex-col leading-none">
              <span className="font-brand text-3xl text-(--foreground)">
                Bankey Bihari
              </span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-(--gold)">
                Boxwala
              </span>
            </div>

            <p className="mt-2 text-xs uppercase tracking-[0.26em] text-(--gold)">
              Manufacturer • Wholesale • India
            </p>
          </div>

          <p className="max-w-sm text-sm leading-7 text-(--muted)">
            Premium jewellery stock box manufacturer for wholesale buyers across
            India with a luxury-first catalogue experience and WhatsApp-based
            order flow.
          </p>

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
            Contact
          </h4>

          <div className="space-y-3 text-sm leading-7 text-(--muted)">
            <p>{siteConfig.location}</p>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-(--maroon)">
              {siteConfig.email}
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