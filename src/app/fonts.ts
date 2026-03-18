import localFont from "next/font/local";
import { Inter, Cormorant_Garamond } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-heading",
});

export const samarkan = localFont({
  src: "./fonts/Samarkan.ttf",
  display: "swap",
  variable: "--font-brand",
  weight: "400",
  fallback: ["serif"],
});