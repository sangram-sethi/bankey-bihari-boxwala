import Link from "next/link";
import { Container } from "@/components/common/container";
import { Button } from "@/components/common/button";
import { navigationLinks } from "@/lib/constants/navigation";
import { siteConfig } from "@/lib/constants/site";
import { getWhatsAppHref } from "@/lib/constants/whatsapp";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-(--border) bg-[rgba(251,247,242,0.88)] backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex flex-col">
          <span className="font-serif text-2xl font-semibold tracking-wide text-foreground">
            {siteConfig.name}
          </span>
          <span className="text-xs uppercase tracking-[0.22em] text-[rgba(31,27,24,0.6)]">
            Premium Packaging Manufacturer
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground transition hover:text-(--maroon)"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            href={getWhatsAppHref("Hello, I want to place a bulk order enquiry.")}
            className="hidden sm:inline-flex"
          >
            WhatsApp Us
          </Button>

          <Link
            href="/collection"
            className="inline-flex rounded-full border border-(--border) px-4 py-2 text-sm font-medium text-foreground md:hidden"
          >
            View Products
          </Link>
        </div>
      </Container>
    </header>
  );
}