import { siteConfig } from "@/lib/constants/site";

function cleanPhoneNumber(input: string) {
  return input.replace(/\D/g, "");
}

export function getWhatsAppHref(message?: string) {
  const phone = cleanPhoneNumber(siteConfig.whatsappNumber);
  const text =
    message ||
    "Hello, I want to know more about your jewellery stock boxes.";

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}