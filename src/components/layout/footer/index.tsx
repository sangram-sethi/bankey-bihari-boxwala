import Link from "next/link";
import { Container } from "@/components/common/container";
import { navigationLinks } from "@/lib/constants/navigation";
import { siteConfig } from "@/lib/constants/site";
import { getWhatsAppHref } from "@/lib/constants/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-(--border) bg-white/70">
      <Container className="grid gap-10 py-12 md:grid-cols-3">
        <div className="space-y-4">
          <h3 className="font-serif text-2xl text-foreground">
            {siteConfig.name}
          </h3>
          <p className="max-w-sm text-sm leading-7 text-[rgba(31,27,24,0.72)]">
            Premium jewellery stock box manufacturer for wholesale buyers across India.
          </p>
          <p className="text-sm text-[rgba(31,27,24,0.72)]">
            {siteConfig.pricingNote}
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-(--gold)">
            Quick Links
          </h4>
          <div className="flex flex-col gap-3">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-foreground transition hover:text-(--maroon)"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-(--gold)">
            Contact
          </h4>
          <div className="space-y-2 text-sm text-[rgba(31,27,24,0.72)]">
            <p>{siteConfig.location}</p>
            <p>{siteConfig.email}</p>
            <Link
              href={getWhatsAppHref()}
              className="inline-flex text-(--maroon) hover:underline"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </Container>

      <div className="border-t border-(--border) py-4 text-center text-xs text-[rgba(31,27,24,0.6)]">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}