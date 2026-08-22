"use client";
import { useCurrentBarber } from "@/src/contexts/BarberContext";
import { ButtonLink } from "@/src/components/ui/button-link";

export function FinalCtaSection() {
  const barberConfig = useCurrentBarber();
  return (
    <section className="backgroundImage relative overflow-hidden border-b border-zinc-900 py-20 md:py-28">
      <div
        className="inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(var(--accent-rgb),0.25),transparent_45%)]"
        aria-hidden="true"
      />
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start px-5 md:px-8">
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
          Derniere etape
        </p>
        <h2 className="mt-4 [word-spacing:-20%] tracking-normal leading-[0.92] font-joaquin text-5xl uppercase leading-[0.9] text-zinc-50 md:text-7xl">
          On se voit au fauteuil ?
        </h2>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-zinc-300 md:text-base">
          Choisissez votre prestation et validez votre horaire en moins d une
          minute.
        </p>
        <div className="mt-10">
          <ButtonLink
            href={barberConfig.bookingUrl}
            variant="primary"
            className="px-8 py-4 text-xs"
          >
            Reserver maintenant
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
