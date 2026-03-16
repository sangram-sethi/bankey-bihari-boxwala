import Link from "next/link";
import { Container } from "@/components/common/container";
import { Button } from "@/components/common/button";
import { navigationLinks } from "@/lib/constants/navigation";
import { siteConfig } from "@/lib/constants/site";
import { getWhatsAppHref } from "@/lib/constants/whatsapp";
import { MobileMenu } from "@/components/layout/mobile-menu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-(--border) bg-[rgba(251,247,242,0.86)] backdrop-blur-xl">
      <Container className="flex h-22 items-center justify-between gap-6">
        <Link href="/" className="flex min-w-0 flex-col">
          <span className="truncate font-serif text-2xl font-semibold tracking-wide text-(--foreground) sm:text-3xl">
            {siteConfig.name}
          </span>
          <span className="text-[10px] uppercase tracking-[0.28em] text-(--gold) sm:text-xs">
            Premium Packaging Manufacturer
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-(--foreground) transition hover:text-(--maroon)"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Button
            href={getWhatsAppHref(
              "Hello, I want to place a bulk order enquiry."
            )}
            size="sm"
          >
            WhatsApp Order
          </Button>
        </div>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}