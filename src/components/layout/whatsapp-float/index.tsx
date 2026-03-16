import { getWhatsAppHref } from "@/lib/constants/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppHref(
        "Hello, I want to know more about your wholesale jewellery stock boxes."
      )}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-(--maroon) px-5 py-3 text-sm font-medium text-white shadow-(--shadow-card) transition hover:-translate-y-0.5 hover:bg-(--maroon-dark)"
    >
      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-(--gold-soft)" />
      WhatsApp
    </a>
  );
}