"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/common/button";
import { navigationLinks } from "@/lib/constants/navigation";
import { getWhatsAppHref } from "@/lib/constants/whatsapp";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-(--border) bg-white/85 shadow-sm"
      >
        <span className="relative block h-4 w-5">
          <span
            className={`absolute left-0 top-0 h-0.5 w-5 bg-(--foreground) transition ${
              isOpen ? "translate-y-1.75 rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-1.75 h-0.5 w-5 bg-(--foreground) transition ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-3.5 h-0.5 w-5 bg-(--foreground) transition ${
              isOpen ? "-translate-y-1.75 -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-60 md:hidden">
          <button
            type="button"
            aria-label="Close menu overlay"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-[rgba(31,27,24,0.35)] backdrop-blur-sm"
          />

          <div className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col border-l border-(--border) bg-(--background) p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-(--border) pb-6">
              <div className="leading-none">
                <p className="font-brand text-3xl text-(--foreground)">
                  Bankey Bihari
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-(--gold)">
                  Boxwala
                </p>
              </div>

              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-(--border) bg-white/85"
              >
                ✕
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-2 py-6">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl border border-transparent px-4 py-3 text-base text-(--foreground) transition hover:border-(--border) hover:bg-white/70"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="border-t border-(--border) pt-6">
              <Button
                href={getWhatsAppHref(
                  "Hello, I want to discuss a wholesale order for jewellery stock boxes."
                )}
                fullWidth
              >
                WhatsApp Order
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}