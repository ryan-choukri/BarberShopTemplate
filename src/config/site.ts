import type { Metadata } from "next";

const siteUrl = "https://demo-atelier-nord.fr";
const ogImage = "/images/placeholder-editorial.svg";

export const siteConfig = {
  siteUrl,
  ogImage,
};

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Barber Premium",
    template: "%s | Barber Premium",
  },
  description: "Barber shop premium en France.",
  applicationName: "Barber Premium",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Barber Premium",
    title: "Barber Premium",
    description: "Barber shop premium en France.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Barber Premium - barber shop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barber Premium",
    description: "Barber shop premium en France.",
    images: [ogImage],
  },
  alternates: {
    canonical: "/",
  },
  category: "Barber Shop",
};
