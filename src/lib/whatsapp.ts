export function normalizeWhatsAppNumber(value: string | null | undefined) {
  if (!value) {
    return null;
  }

  const normalized = value.replace(/[^\d]/g, "");
  return normalized.length >= 8 ? normalized : null;
}

export function buildWhatsAppUrl(number: string | null | undefined, message?: string) {
  const normalized = normalizeWhatsAppNumber(number);

  if (!normalized) {
    return null;
  }

  const base = `https://wa.me/${normalized}`;

  if (!message?.trim()) {
    return base;
  }

  const query = new URLSearchParams({ text: message.trim() });
  return `${base}?${query.toString()}`;
}
