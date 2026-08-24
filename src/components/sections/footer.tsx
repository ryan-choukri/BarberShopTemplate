"use client";
import { useCurrentBarber } from "@/src/contexts/BarberContext";

export function Footer() {
  const barberConfig = useCurrentBarber();
  return (
    <footer className="bg-black py-12">
      <div className="section-shell grid gap-4 text-sm text-zinc-300 md:grid-cols-12">
        <div>
          <p className="font-display text-3xl uppercase text-zinc-50">
            {barberConfig.name}
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.22em] text-zinc-500">
            {barberConfig.city}
          </p>
        </div>

        <div className="md:col-span-4">
          <h3 className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">
            Adresse
          </h3>
          <p className="mt-3">{barberConfig.address}</p>
        </div>

        <div className="md:col-span-4">
          <h3 className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">
            Contact
          </h3>
          <p className="mt-3">
            <a
              href={`tel:${barberConfig.phone.replace(/\s+/g, "")}`}
              className="transition-colors hover:text-[var(--accent)]"
            >
              {barberConfig.phone}
            </a>
          </p>
          <p className="mt-2">
            <a
              href={`mailto:${barberConfig.email}`}
              className="transition-colors hover:text-[var(--accent)]"
            >
              {barberConfig.email}
            </a>
          </p>
          <p className="mt-2">
            <a
              href={`https://www.instagram.com/${barberConfig.instagram}/`}
              className="transition-colors hover:text-[var(--accent)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              @{barberConfig.instagram}
            </a>
          </p>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">
            Infos
          </h3>
          <p className="mt-3">Mentions legales</p>
          <p className="mt-2">Politique de confidentialite</p>
        </div>
      </div>
    </footer>
  );
}
