"use client";
import { SectionHeading } from "@/src/components/layout/section-heading";
import { ButtonLink } from "@/src/components/ui/button-link";
import Link from "next/link";
import { useCurrentBarber } from "@/src/contexts/BarberContext";

export function LocationSection() {
  const barberConfig = useCurrentBarber();
  return (
    <section id="contact">
      <div className="section-shell grid gap-8 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-6">
          <SectionHeading
            kicker="Localisation"
            title="Passez nous voir"
            subtitle="Acces simple en centre-ville. Le plus rapide reste de reserver votre creneau, puis venir a l heure."
            align="split"
          />

          <dl className="sm:mt-10 mt-4 space-y-6 text-sm text-zinc-200">
            <div>
              <dt className="text-[10px] uppercase tracking-[0.22em] text-zinc-400">
                Adresse
              </dt>
              <Link
                href={barberConfig.mapsUrl}
                className="block mt-2 text-sm text-zinc-300 hover:text-[var(--accent)]"
              >
                {barberConfig.address}
              </Link>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.22em] text-zinc-400">
                Telephone
              </dt>
              <dd className="mt-2">
                <a
                  href={`tel:${barberConfig.phone.replace(/\s+/g, "")}`}
                  className="transition-colors hover:text-[var(--accent)]"
                >
                  {barberConfig.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.22em] text-zinc-400">
                Email
              </dt>
              <dd className="mt-2">
                <a
                  href={`mailto:${barberConfig.email}`}
                  className="transition-colors hover:text-[var(--accent)]"
                >
                  {barberConfig.email}
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap gap-3 border-t border-zinc-800 pt-6">
            <ButtonLink href={barberConfig.bookingUrl} variant="primary">
              Reserver
            </ButtonLink>
            <ButtonLink href={barberConfig.mapsUrl} variant="secondary">
              Ouvrir Google Maps
            </ButtonLink>
          </div>
        </div>

        <div className="md:col-span-6">
          <div className="border border-zinc-800 bg-zinc-950/70 p-6 md:p-8">
            <h3 className="font-display text-2xl uppercase text-zinc-50">
              Horaires
            </h3>
            <ul className="mt-6 divide-y divide-zinc-800">
              {barberConfig.openingHours.map((item) => (
                <li
                  key={item.day}
                  className="flex items-center justify-between py-3 text-sm"
                >
                  <span className="text-zinc-300">{item.day}</span>
                  <span className="text-zinc-100">{item.hours}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 h-52 border border-dashed border-zinc-700 bg-[linear-gradient(135deg,rgba(var(--accent-rgb),0.2),transparent_40%)] p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-300">
                Plan d acces stylise
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Zone pietonne, parking Republique a 4 minutes a pied. Tram A,
                arret Foch-Maison Bleue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
