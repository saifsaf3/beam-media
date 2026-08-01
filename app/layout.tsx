import type { Metadata } from "next";
import "./globals.css";

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
    icon: "/beam-media-mark.jpg",
    apple: "/beam-media-mark.jpg",
  },
  openGraph: {
    title: "Beam Media — Make them stop. Make them watch.",
    description:
      "Scroll-stopping short-form content for Birmingham businesses.",
    type: "website",
    locale: "en_GB",
    siteName: "Beam Media",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beam Media — Make them stop. Make them watch.",
    description:
      "Scroll-stopping short-form content for Birmingham businesses.",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
