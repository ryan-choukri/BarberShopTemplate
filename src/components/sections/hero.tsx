import Image from "next/image";

import { barberConfig } from "@/src/config/barber";
import { ButtonLink } from "@/src/components/ui/button-link";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="absolute -left-24 top-20 h-52 w-52 rounded-full bg-[var(--accent)]/20 blur-3xl"
        aria-hidden="true"
      />
      {/* <div
        className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_60%)]"
        aria-hidden="true"
      /> */}

      <div className="section-shell grid gap-8 py-12 md:grid-cols-12 md:py-20">
        <div className="order-2 md:order-1 md:col-span-5 md:self-end md:pb-10">
          <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-zinc-400">
            Studio barber premium | {barberConfig.city}
          </p>
          <h1 className="font-display text-5xl uppercase leading-[0.86] tracking-[0.01em] text-zinc-50 sm:text-6xl md:text-[7.2rem]">
            Coupes nettes. Presence forte.
          </h1>
          <p className="mt-8 max-w-sm text-sm leading-relaxed text-zinc-300 md:text-base">
            {barberConfig.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink
              href={barberConfig.bookingUrl}
              variant="primary"
              ariaLabel="Reserver en quelques secondes"
            >
              Reserver
            </ButtonLink>
            <ButtonLink
              href="#prestations"
              variant="secondary"
              ariaLabel="Voir les prestations"
            >
              Voir les prestations
            </ButtonLink>
          </div>
        </div>

        <div className="order-1 md:order-2 md:col-span-7">
          <div className="group relative h-[62vh] min-h-[430px] overflow-hidden border border-zinc-800 bg-zinc-900 md:h-[78vh] md:translate-y-6">
            <Image
              src="/images/barber-client.webp"
              alt="Barber en plein travail sur une coupe degradee"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 58vw"
            />
            <Image
              src="/images/logo.png"
              alt="Barber en plein travail sur une coupe degradee"
              width={220}
              height={220}
              priority
              className="absolute right-4 top-4 z-20 h-auto w-16 object-contain opacity-95 drop-shadow-[0_8px_18px_rgba(0,0,0,0.45)] transition-transform duration-700 group-hover:scale-115 md:right-6 md:top-6 md:w-24"
              sizes="(max-width: 768px) 64px, 96px"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute left-0 top-0 h-24 w-24 border-l border-t border-[var(--accent)]/60" />
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5 md:p-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-300">
                  {barberConfig.name}
                </p>
                <p className="mt-1 text-sm text-zinc-200">
                  {barberConfig.city}, France
                </p>
              </div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-zinc-300">
                Depuis 2014
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
