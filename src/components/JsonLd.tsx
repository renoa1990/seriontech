import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    alternateName: site.englishName,
    url: site.url,
    email: site.email,
    taxID: site.businessNumber,
    description: site.description,
    image: `${site.url}/opengraph-image`,
    founder: {
      "@type": "Person",
      name: site.representative,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "구성로279번길 23",
      addressLocality: "용인시 기흥구",
      addressRegion: "경기도",
      addressCountry: "KR",
    },
    areaServed: {
      "@type": "Country",
      name: "KR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: site.email,
      name: site.representative,
      availableLanguage: ["Korean"],
    },
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
