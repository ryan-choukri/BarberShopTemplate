"use client";
import { useCurrentBarber } from "@/src/contexts/BarberContext";
import Image from "next/image";

import { SectionHeading } from "@/src/components/layout/section-heading";

const spanClass: Record<"wide" | "tall" | "large" | "default", string> = {
  wide: "md:col-span-2",
  tall: "md:row-span-2",
  large: "md:col-span-2 md:row-span-2",
  default: "",
};

export function GallerySection() {
  const barberConfig = useCurrentBarber();
  return (
    <section id="realisations">
      <div className="section-shell py-16 md:py-28">
        <SectionHeading
          kicker="Realisations"
          title="Textures, details, lignes"
          subtitle="Une grille editoriale asymetrique pour montrer les coupes comme de vraies pieces visuelles."
          align="split"
        />

        <div className="mt-14 grid auto-rows-[190px] grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[220px]">
          {barberConfig.galleryImages.map((image) => {
            const key = `${image.src}-${image.alt}`;
            const classes = spanClass[image.span ?? "default"];

            return (
              <figure
                key={key}
                className={`group relative overflow-hidden border border-zinc-800 ${classes}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                <figcaption className="absolute bottom-0 left-0 p-4 text-[10px] uppercase tracking-[0.24em] text-zinc-200">
                  {image.alt}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
