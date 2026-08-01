import type { Metadata } from "next";
import { DM_Sans, Montserrat } from "next/font/google";
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
  metadataBase: new URL("https://beam-media.vercel.app"),
  title: {
    default: "Beam Media | Short-form content for Birmingham businesses",
    template: "%s | Beam Media",
  },
  description:
    "Beam Media creates scroll-stopping short-form video, food photography and social content for restaurants, shops and local businesses in Birmingham.",
  keywords: [
    "Birmingham content creator",
    "short-form video",
    "social media content",
    "restaurant videography",
    "Beam Media",
  ],
  icons: {
    icon: "/beam-media-logo-official.png",
    apple: "/beam-media-logo-official.png",
  },
  openGraph: {
    title: "Beam Media — Make them stop. Make them watch.",
    description:
      "Scroll-stopping short-form content for Birmingham businesses.",
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
    title: "Beam Media — Make them stop. Make them watch.",
    description:
      "Scroll-stopping short-form content for Birmingham businesses.",
    images: ["/og.png"],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
