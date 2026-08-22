import { AboutSection } from "@/src/components/sections/about";
import { FinalCtaSection } from "@/src/components/sections/final-cta";
import { Footer } from "@/src/components/sections/footer";
import { GallerySection } from "@/src/components/sections/gallery";
import { Hero } from "@/src/components/sections/hero";
import { getBarberBySlug } from "@/src/components/lib/barber-config";
import { LocationSection } from "@/src/components/sections/location";
import { Navbar } from "@/src/components/sections/navbar";
import { ReviewsSection } from "@/src/components/sections/reviews";
import { ServicesSection } from "@/src/components/sections/services";
import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import { BarberProvider } from "@/src/contexts/BarberContext";
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

export default async function Home({ params }: Props) {
  const { slug } = await params;
  console.log(slug);
  const barberConfig = getBarberBySlug(slug);

  if (!barberConfig) {
    notFound();
  }
  console.log(barberConfig);

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
    sameAs: [barberConfig.instagramUrl],
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
