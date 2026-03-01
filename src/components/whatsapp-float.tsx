import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  const href = buildWhatsAppUrl(siteConfig.whatsappNumber, siteConfig.whatsappMessage);

  if (!href) {
    return null;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp a Psicobalbi"
      className="group fixed bottom-4 right-4 z-40 inline-flex h-12 items-center justify-center gap-2 rounded-full border border-emerald-700/10 bg-[#25D366] px-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_-12px_rgba(37,211,102,0.6)] transition-transform duration-200 hover:scale-[1.02] hover:shadow-[0_16px_34px_-14px_rgba(37,211,102,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] motion-reduce:transition-none sm:bottom-6 sm:right-6 sm:h-12 sm:px-4"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-current"
      >
        <path d="M12 2.2a9.72 9.72 0 0 0-8.4 14.61L2 22l5.35-1.54A9.8 9.8 0 1 0 12 2.2Zm0 17.82a8.1 8.1 0 0 1-4.12-1.12l-.29-.18-3.18.91.93-3.1-.19-.32A8.16 8.16 0 1 1 12 20.02Zm4.47-5.97c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1-.37-1.91-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.1-.49.1-.1.24-.26.36-.39.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.43-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.59 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.15 1.51.09.46-.07 1.4-.57 1.6-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28Z" />
      </svg>
      <span className="sr-only sm:not-sr-only">WhatsApp</span>
    </a>
  );
}
