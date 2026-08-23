"use client";
import Image from "next/image";

import { SectionHeading } from "@/src/components/layout/section-heading";
import { ButtonLink } from "@/src/components/ui/button-link";
import { useCurrentBarber } from "@/src/contexts/BarberContext";

export function SocialProofSection() {
  const barberConfig = useCurrentBarber();
  return (
    <section className="border-b border-zinc-900">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          kicker="Instagram"
          title="Le studio en mouvement"
          subtitle="Retrouvez les dernieres coupes, les avant/apres et les sessions du studio."
        />

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {barberConfig.socialImages.map((image) => (
            <a
              key={image.src}
              href={`https://www.instagram.com/${barberConfig.instagram}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-square overflow-hidden border border-zinc-800"
              aria-label={`Voir la publication ${image.alt} sur Instagram`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/35 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
          ))}
        </div>

        <div className="mt-8">
          <ButtonLink
            href={`https://www.instagram.com/${barberConfig.instagram}/`}
            variant="secondary"
          >
            Suivre {barberConfig.instagram}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
