import type { Metadata, Viewport } from "next";
import { Providers } from "@/components/Providers";
import ErrorBoundary from "@/components/ErrorBoundary";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nikolamedical.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e3a5f",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Nikola Medical Equipment, Inc. | Dental Equipment Refurbishment & Solutions",
    template: "%s | Nikola Medical Equipment",
  },
  description:
    "Dental equipment solutions: expert guidance, equipment disposal, sourcing used gear, refurbishment, installation & maintenance. Help your dental practice thrive with reliable, affordable equipment. Carlsbad, CA.",
  keywords: [
    "dental equipment",
    "refurbished dental equipment",
    "dental equipment disposal",
    "used dental equipment",
    "dental practice equipment",
    "dental equipment installation",
    "dental equipment maintenance",
    "dental equipment refurbishment",
    "affordable dental equipment",
    "Carlsbad dental equipment",
    "California dental equipment",
  ],
  authors: [{ name: "Nikola Medical Equipment, Inc.", url: baseUrl }],
  creator: "Nikola Medical Equipment, Inc.",
  publisher: "Nikola Medical Equipment, Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Nikola Medical Equipment, Inc.",
    title: "Nikola Medical Equipment, Inc. | Dental Equipment Refurbishment & Solutions",
    description:
      "Help dental practices thrive with reliable, affordable dental equipment. Expert guidance, disposal, refurbishment, installation & maintenance.",
    images: [
      {
        url: `${baseUrl}/assets/nikola-logo.png`,
        width: 512,
        height: 512,
        alt: "Nikola Medical Equipment, Inc. Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikola Medical Equipment, Inc. | Dental Equipment Solutions",
    description: "Dental equipment refurbishment, installation & maintenance. Helping practices thrive.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  icons: {
    icon: "/assets/nikola-logo.png",
    shortcut: "/assets/nikola-logo.png",
    apple: "/assets/nikola-logo.png",
  },
  category: "medical equipment",
  verification: {
    // Add when you have them: google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JsonLd />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Carlsbad" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ErrorBoundary>
          <Providers>{children}</Providers>
        </ErrorBoundary>
      </body>
    </html>
  );
}
