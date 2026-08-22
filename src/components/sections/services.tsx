import { barberConfig } from "@/src/config/barber";
import { SectionHeading } from "@/src/components/layout/section-heading";
import { ButtonLink } from "@/src/components/ui/button-link";

export function ServicesSection() {
  return (
    <section id="prestations">
      <div className="section-shell py-16 md:py-24">
        <SectionHeading
          kicker="Prestations"
          title="Nos Prestations"
          subtitle="Des prestations claires, sans options inutiles. Vous choisissez votre format, nous assurons la precision."
          align="split"
        />

        <div className="mt-14 grid gap-4 md:grid-cols-12">
          {barberConfig.services.map((service) => (
            <article
              key={service.name}
              className={`group border p-6 transition-colors duration-300 md:col-span-6 ${
                service.highlighted
                  ? "border-[var(--accent)]/40 bg-[linear-gradient(145deg,rgba(var(--accent-rgb),0.09),rgba(24,24,27,0.5))]"
                  : "border-zinc-800 bg-zinc-950/60 hover:border-zinc-600"
              }`}
            >
              <div className="flex items-end justify-between gap-4 border-b border-zinc-800 pb-4">
                <h3 className="font-display text-3xl uppercase leading-none text-zinc-50 md:text-[2.1rem]">
                  {service.name}
                </h3>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                    Duree
                  </p>
                  <p className="text-xs uppercase tracking-[0.24em] text-zinc-300">
                    {service.duration}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                {service.description}
              </p>
              <div className="mt-8 flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
                  {service.price}
                </p>
                <ButtonLink
                  href={barberConfig.bookingUrl}
                  variant="ghost"
                  className="px-4 py-2 text-[10px]"
                >
                  Reserver
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
