"use client";
import Image from "next/image";

import { useCurrentBarber } from "@/src/contexts/BarberContext";
import { ButtonLink } from "@/src/components/ui/button-link";

export function Hero() {
  const barberConfig = useCurrentBarber();
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="absolute -left-24 top-20 h-52 w-52 rounded-full bg-[var(--accent)]/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute left-100 top-0 h-[150%] w-[150%] bg-[radial-gradient(circle_at_top,color-mix(in_srgb,var(--accent)_35%,transparent)_0%,transparent_40%)]"
        aria-hidden="true"
      />

      <div className="section-shell grid md:gap-8 gap-2 py-2 md:grid-cols-12 md:py-20">
        <div className="order-2 md:order-1 md:col-span-5 md:self-end md:pb-10">
          <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-zinc-400">
            {barberConfig.subTitle}
          </p>
          <h1 className="font-joaquin [word-spacing:-20%] tracking-normal text-5xl uppercase  text-zinc-50 sm:text-6xl md:text-[5.2rem]">
            {barberConfig.title}
          </h1>
          <p className="sm:mt-8 mt-4 max-w-sm text-sm leading-relaxed text-zinc-300 md:text-base">
            {barberConfig.description}
          </p>

          <div className="mt-4 sm:mt-10 flex flex-wrap gap-3">
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
        {/* invisible md:visible */}
        <div className=" order-1 md:order-2 md:col-span-7">
          <div className="invisible md:visible">
            <div className="premiumImage md:h-[62vh] md:min-h-[430px] group relative h-[18vh] min-h-[60px] overflow-hidden border border-zinc-800 bg-zinc-900  md:translate-y-6">
              <div className="insidePremiumImage"></div>
              {barberConfig.logo && (
                <>
                  <Image
                    src={barberConfig.logo}
                    alt="Barber en plein travail sur une coupe degradee"
                    width={220}
                    height={220}
                    priority
                    className="visible md:invisible absolute left-1/2 top-1/2 z-20 h-auto w-35 -translate-x-1/2 -translate-y-1/2 object-contain opacity-95 drop-shadow-[0_8px_18px_rgba(0,0,0,0.45)] transition-transform duration-700 group-hover:scale-125 md:right-6 md:top-6 md:w-24"
                    sizes="(max-width: 868px) 130px, 96px"
                  />
                  <Image
                    src={barberConfig.logo}
                    alt="Barber en plein travail sur une coupe degradee"
                    width={220}
                    height={220}
                    priority
                    className=" absolute right-4 top-4 z-20 h-auto w-16 object-contain opacity-95 drop-shadow-[0_8px_18px_rgba(0,0,0,0.45)] transition-transform duration-700 group-hover:scale-125 md:right-6 md:top-6 md:w-24"
                    sizes="(max-width: 768px) 64px, 96px"
                  />
                </>
              )}
              <Image
                src="/images/barber-client.webp"
                alt="Barber en plein travail sur une coupe degradee"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 58vw"
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
      </div>
    </section>
  );
}
