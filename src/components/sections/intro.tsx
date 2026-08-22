"use client";
import { useCurrentBarber } from "@/src/contexts/BarberContext";

export function IntroStatement() {
  const barberConfig = useCurrentBarber();
  return (
    <section>
      <div className="section-shell grid gap-10 py-18 md:grid-cols-12 md:py-28">
        <div className="md:col-span-8">
          <p className="font-joaquin [word-spacing:-20%] tracking-normal leading-[0.92] text-4xl uppercase  tracking-[0.01em] text-zinc-50 sm:text-5xl md:text-8xl">
            {barberConfig.slogan.split(". ").map((line) => (
              <span
                key={line}
                className="block border-b border-zinc-800/80 py-2 md:py-3"
              >
                {line}
              </span>
            ))}
          </p>
        </div>
        <div className="md:col-span-4 md:self-end">
          <p className="max-w-md text-sm leading-relaxed text-zinc-300 md:text-base">
            Chez {barberConfig.name}, chaque coupe est pensee comme une
            signature. Volumes nets, details maitrises, rythme urbain: l
            esthetique reste forte, sans bruit inutile.
          </p>
        </div>
      </div>
    </section>
  );
}
