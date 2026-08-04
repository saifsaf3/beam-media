import type { Metadata } from "next";
import { DM_Sans, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://beammedia.agency"),
  title: {
    default: "Beam Media | Content Creation Agency Birmingham",
    template: "%s | Beam Media",
  },
  description:
    "Birmingham content creation agency producing short-form video, food photography and social media content for restaurants, retailers and local brands.",
  applicationName: "Beam Media",
  authors: [{ name: "Beam Media", url: "https://beammedia.agency" }],
  creator: "Beam Media",
  publisher: "Beam Media",
  category: "Marketing and advertising",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/beam-media-logo-official.png",
    apple: "/beam-media-logo-official.png",
  },
  openGraph: {
    title: "Beam Media | Content Creation Agency Birmingham",
    description:
      "Short-form video, food photography and social media content for Birmingham businesses.",
    type: "website",
    locale: "en_GB",
    siteName: "Beam Media",
    url: "/",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Beam Media — Make them stop. Make them watch.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beam Media | Content Creation Agency Birmingham",
    description:
      "Short-form video and social media content for Birmingham businesses.",
    images: ["/og.png"],
  },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://beammedia.agency/#organization",
      name: "Beam Media",
      url: "https://beammedia.agency",
      logo: {
        "@type": "ImageObject",
        url: "https://beammedia.agency/beam-media-logo-official.png",
      },
      image: "https://beammedia.agency/og.png",
      email: "beam.mediauk@gmail.com",
      telephone: "+44 7508 182314",
      founder: [
        { "@type": "Person", name: "Ayub Ahmed" },
        { "@type": "Person", name: "Anasur Rahman" },
      ],
      areaServed: [
        { "@type": "City", name: "Birmingham" },
        { "@type": "Country", name: "United Kingdom" },
      ],
      sameAs: [
        "https://www.tiktok.com/@beammedia0",
        "https://www.instagram.com/beammedia_/",
      ],
      knowsAbout: [
        "Short-form video production",
        "Social media content creation",
        "Restaurant videography",
        "Food photography",
        "TikTok and Instagram Reels",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://beammedia.agency/#website",
      url: "https://beammedia.agency",
      name: "Beam Media",
      description:
        "A Birmingham content creation agency for restaurants, retailers and local brands.",
      publisher: { "@id": "https://beammedia.agency/#organization" },
      inLanguage: "en-GB",
    },
    {
      "@type": "Service",
      "@id": "https://beammedia.agency/#content-creation",
      name: "Short-form content creation",
      serviceType: [
        "Short-form video production",
        "Food and product videography",
        "Social media content planning",
      ],
      provider: { "@id": "https://beammedia.agency/#organization" },
      areaServed: [
        { "@type": "City", name: "Birmingham" },
        { "@type": "Country", name: "United Kingdom" },
      ],
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${montserrat.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
