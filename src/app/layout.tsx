import type { ReactNode } from "react";

import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { BusinessAssurance } from "@/components/common/business-assurance";
import { defaultMetadata } from "@/features/seo/metadata";
import { OrganizationJsonLd } from "@/features/seo/organization-json-ld";
import { inter, cormorant, samarkan } from "@/app/fonts";

export const metadata = defaultMetadata;

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} ${samarkan.variable}`}
    >
      <body className="min-h-screen bg-(--background) font-sans text-(--foreground) antialiased">
        <OrganizationJsonLd />

        <div className="relative min-h-screen overflow-x-clip">
          <Navbar />
          {children}
          <BusinessAssurance />
          <Footer />
          <WhatsAppFloat />
        </div>
      </body>
    </html>
  );
}