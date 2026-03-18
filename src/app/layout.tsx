import type { ReactNode } from "react";
import "./globals.css";
import { defaultMetadata } from "@/features/seo/metadata";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
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
        <div className="relative min-h-screen overflow-x-clip">
          <Navbar />
          {children}
          <Footer />
          <WhatsAppFloat />
        </div>
      </body>
    </html>
  );
}