import type { ReactNode } from "react";
import { Inter, Cormorant_Garamond } from "next/font/google";

import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { BusinessAssurance } from "@/components/common/business-assurance";
import { defaultMetadata } from "@/features/seo/metadata";
import { OrganizationJsonLd } from "@/features/seo/organization-json-ld";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-heading",
});

export const metadata = defaultMetadata;

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
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