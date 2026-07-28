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
    founder: ministry.ministerTitle,
    address: {
      "@type": "PostalAddress",
      streetAddress: ministry.contact.tentLocation,
      addressLocality: "Ibadan",
      addressRegion: "Oyo",
      addressCountry: "NG",
    },
    sameAs: [
      ministry.contact.facebookProgram,
      ministry.contact.whatsappGroup,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
