import { AboutSection } from "@/src/components/sections/about";
import { FinalCtaSection } from "@/src/components/sections/final-cta";
import { Footer } from "@/src/components/sections/footer";
import { GallerySection } from "@/src/components/sections/gallery";
import { Hero } from "@/src/components/sections/hero";
import { getBarberBySlug } from "@/src/lib/barber-config";
import { LocationSection } from "@/src/components/sections/location";
import { Navbar } from "@/src/components/sections/navbar";
import { ReviewsSection } from "@/src/components/sections/reviews";
import { ServicesSection } from "@/src/components/sections/services";
import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BarberProvider } from "@/src/contexts/BarberContext";

const siteUrl = "https://demo-atelier-nord.fr";
const ogImage = "/images/placeholder-editorial.svg";
function hexToRgbTriplet(hex: string): string {
  const normalized = hex.replace("#", "").trim();
  const full =
    normalized.length === 3
      ? normalized
          .split("")
          .map((char) => char + char)
          .join("")
      : normalized;

  const isValid = /^[0-9a-fA-F]{6}$/.test(full);
  if (!isValid) {
    return "182, 138, 86";
  }

  const value = Number.parseInt(full, 16);
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;
  return `${r}, ${g}, ${b}`;
}

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const barberConfig = getBarberBySlug(slug);

  if (!barberConfig) {
    return {
      title: "Barber",
      description: "Barber shop",
    };
  }

  const title = `${barberConfig.name} | Barber premium a ${barberConfig.city}`;

  return {
    title,
    description: barberConfig.description,
    applicationName: barberConfig.name,
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url: `${siteUrl}/${slug}`,
      siteName: barberConfig.name,
      title,
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
      title,
      description: barberConfig.description,
      images: [ogImage],
    },
    alternates: {
      canonical: `/${slug}`,
    },
    category: "Barber Shop",
  };
}

export default async function Home({ params }: Props) {
  const { slug } = await params;
  console.log(slug);
  const barberConfig = getBarberBySlug(slug);

  if (!barberConfig) {
    notFound();
  }

  const themeVars = {
    "--accent": barberConfig.accentColor,
    "--accent-rgb": hexToRgbTriplet(barberConfig.accentColor),
  } as CSSProperties;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    name: barberConfig.legalName,
    image: ["/images/placeholder-editorial.svg"],
    description: barberConfig.description,
    telephone: barberConfig.phone,
    email: barberConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: barberConfig.address,
      addressCountry: "FR",
    },
    areaServed: barberConfig.city,
    sameAs: [barberConfig.instagram],
    url: barberConfig.bookingUrl,
  };

  return (
    <BarberProvider config={barberConfig}>
      <div style={themeVars}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar />
        <main className="flex-1 bg-black text-zinc-100">
          <Hero />
          {/* <IntroStatement /> */}
          <ServicesSection />
          <GallerySection />
          <AboutSection />
          <ReviewsSection />
          {/* <SocialProofSection /> */}
          <LocationSection />
          <FinalCtaSection />
        </main>
        <Footer />
      </div>
    </BarberProvider>
  );
}
