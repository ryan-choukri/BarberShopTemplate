import Image from "next/image";

import { barberConfig } from "@/src/config/barber";
import { SectionHeading } from "@/src/components/layout/section-heading";

export function AboutSection() {
  return (
    <section id="equipe" className="border-b border-zinc-900">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          kicker="A propos"
          title="Une equipe, une ligne"
          subtitle="Pas de chaine, pas de coupe standardisee. Ici, chaque rendez-vous commence par un vrai echange et un regard sur votre style de vie."
        />

        <div className="grid grid-cols-2 gap-4 mt-12 md:gap-4 md:grid-cols-3">
          {barberConfig.team.map((member) => (
            <article
              key={member.name}
              className="col-span-1 border border-zinc-800 bg-zinc-950/60"
            >
              <div className="relative h-80 overflow-hidden border-b border-zinc-800">
                <Image
                  src={member.image}
                  alt={member.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 md:p-8">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--accent)]">
                  {member.role}
                </p>
                <h3 className="mt-3 font-display text-3xl uppercase leading-none text-zinc-50">
                  {member.name}
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-400">
                  {member.experience}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-zinc-300">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
