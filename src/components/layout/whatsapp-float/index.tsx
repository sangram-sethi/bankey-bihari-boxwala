import { getWhatsAppHref } from "@/lib/constants/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppHref(
        "Hello, I want to know more about your wholesale jewellery stock boxes."
      )}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-50 inline-flex items-center gap-2 rounded-full bg-(--maroon) px-4 py-3 text-sm font-medium text-white shadow-[0_18px_40px_rgba(111,29,43,0.18)] transition hover:-translate-y-0.5 hover:bg-(--maroon-dark) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(176,141,87,0.45)] focus-visible:ring-offset-2 focus-visible:ring-offset-(--background) sm:px-5"
    >
      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-(--gold-soft)" />
      WhatsApp
    </a>
  );
}