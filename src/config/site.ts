import type { Metadata } from "next";

import { barberConfig } from "@/src/config/barber";

const siteUrl = "https://demo-atelier-nord.fr";
const ogImage = "/images/placeholder-editorial.svg";

export const siteConfig = {
  siteUrl,
  ogImage,
};

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${barberConfig.name} | Barber premium a ${barberConfig.city}`,
    template: `%s | ${barberConfig.name}`,
  },
  description: barberConfig.description,
  applicationName: barberConfig.name,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: barberConfig.name,
    title: `${barberConfig.name} | Barber premium a ${barberConfig.city}`,
    description: barberConfig.description,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `${barberConfig.name} - barber shop premium a ${barberConfig.city}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${barberConfig.name} | Barber premium a ${barberConfig.city}`,
    description: barberConfig.description,
    images: [ogImage],
  },
  alternates: {
    canonical: "/",
  },
  category: "Barber Shop",
};
