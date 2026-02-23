const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nikolamedical.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nikola Medical Equipment, Inc.",
  url: baseUrl,
  logo: `${baseUrl}/assets/nikola-logo.png`,
  description:
    "Nikola Medical Equipment, Inc. specializes in providing, refurbishing, and maintaining dental equipment. Expert guidance, equipment disposal, sourcing used gear, installation, and maintenance for dental practices.",
  foundingDate: "2010",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4873 Robertson Rd, Apt 101",
    addressLocality: "Carlsbad",
    addressRegion: "CA",
    postalCode: "92010",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-925-521-4542",
    contactType: "customer service",
    email: "nikolamei858@gmail.com",
    areaServed: "US",
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.linkedin.com/company/nikola-medical-equipment-inc",
    "https://www.facebook.com/p/Nikola-Medical-Equipment-Inc-100094618478377/",
    "https://www.ebay.com/str/nikolamedicalequipmentinc",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${baseUrl}/#organization`,
  name: "Nikola Medical Equipment, Inc.",
  image: `${baseUrl}/assets/nikola-logo.png`,
  url: baseUrl,
  telephone: "+1-925-521-4542",
  email: "nikolamei858@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4873 Robertson Rd, Apt 101",
    addressLocality: "Carlsbad",
    addressRegion: "CA",
    postalCode: "92010",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.1581,
    longitude: -117.3506,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  priceRange: "$$",
  description:
    "Dental equipment solutions: expert guidance, equipment disposal, sourcing used gear, refurbishment, installation, and maintenance. Helping dental practices thrive with reliable, affordable equipment.",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nikola Medical Equipment, Inc.",
  url: baseUrl,
  description:
    "Dental equipment solutions: refurbishing, installation, maintenance, and expert guidance for dental practices.",
  publisher: {
    "@type": "Organization",
    name: "Nikola Medical Equipment, Inc.",
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/assets/nikola-logo.png`,
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Nikola Medical Equipment offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer expert guidance on dental equipment, equipment disposal, sourcing and refurbishing used dental gear, installation, and maintenance. We help dental practices improve efficiency and reduce costs.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Nikola Medical Equipment located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nikola Medical Equipment, Inc. is located at 4873 Robertson Rd, Apt 101, Carlsbad, CA 92010. We serve dental practices across the United States.",
      },
    },
    {
      "@type": "Question",
      name: "How can I contact Nikola Medical Equipment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can reach us by phone at (925) 521-4542 or by email at nikolamei858@gmail.com. We're available Monday through Friday, 9am to 5pm.",
      },
    },
  ],
};

export function JsonLd() {
  const schemas = [
    organizationSchema,
    localBusinessSchema,
    websiteSchema,
    faqSchema,
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemas),
      }}
    />
  );
}
