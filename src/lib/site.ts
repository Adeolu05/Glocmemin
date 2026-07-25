import { ministry } from "@/content/ministry";

function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit) return explicit;

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL?.replace(
    /\/$/,
    "",
  );
  if (production) return `https://${production}`;

  const deployment = process.env.VERCEL_URL?.replace(/\/$/, "");
  if (deployment) return `https://${deployment}`;

  return "http://localhost:3000";
}

export const siteConfig = {
  name: ministry.name,
  shortName: ministry.shortName,
  description:
    "Global Christ Message Ministry (GLOCMEMIN) - End Time Christ Army. Presenting every man perfect in Christ Jesus. Colossians 1:28.",
  motto: ministry.motto,
  url: resolveSiteUrl(),
  locale: "en_NG",
} as const;

export function whatsappUrl(message?: string) {
  const phone = `234${ministry.contact.whatsapp.slice(1)}`;
  if (!message) return `https://wa.me/${phone}`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function mapsSearchUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    ministry.contact.venueNote,
  )}`;
}

export function mapsEmbedUrl() {
  return `https://maps.google.com/maps?q=${encodeURIComponent(
    ministry.contact.venueNote,
  )}&z=15&output=embed`;
}
