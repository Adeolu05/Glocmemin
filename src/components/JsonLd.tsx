import { ministry } from "@/content/ministry";
import { siteConfig } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: ministry.name,
    alternateName: [ministry.shortName, ministry.churchArm],
    url: siteConfig.url,
    email: ministry.contact.email,
    telephone: ministry.contact.phones.map((phone) => `+234${phone.slice(1)}`),
    description: siteConfig.description,
    motto: ministry.motto,
    founder: ministry.minister,
    address: {
      "@type": "PostalAddress",
      streetAddress: ministry.contact.venueNote,
      addressLocality: "Odogbolu",
      addressCountry: "NG",
      postalCode: "20128",
      postOfficeBoxNumber: "20128",
    },
    sameAs: [
      `https://www.facebook.com/${encodeURIComponent(ministry.contact.facebook.replace(/\s+/g, ""))}`,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
