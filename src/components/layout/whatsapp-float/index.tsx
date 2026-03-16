import Link from "next/link";
import { getWhatsAppHref } from "@/lib/constants/whatsapp";

export function WhatsAppFloat() {
  return (
    <Link
      href={getWhatsAppHref("Hello, I want to know more about your wholesale jewellery stock boxes.")}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center rounded-full bg-(--maroon) px-5 py-3 text-sm font-medium text-white shadow-lg shadow-[rgba(111,29,43,0.22)] transition hover:-translate-y-0.5"
    >
      WhatsApp
    </Link>
  );
}