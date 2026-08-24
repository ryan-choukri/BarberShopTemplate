"use client";
import { useCurrentBarber } from "@/src/contexts/BarberContext";
import { ButtonLink } from "@/src/components/ui/button-link";
import localFont from "next/font/local";

const links = [
  { href: "#prestations", label: "Préstations" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#equipe", label: "Équipe" },
  { href: "#contact", label: "Contact" },
];
const titleFont = localFont({
  src: "../../../public/JOAQUIN.otf",
  display: "swap",
});

export function Navbar() {
  const barberConfig = useCurrentBarber();
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900/80 bg-black/65 backdrop-blur-md">
      <div className="section-shell flex items-center justify-between py-4">
        <a href="#top" className="group flex items-end gap-3">
          <span
            className={`${titleFont.className}  [word-spacing:-25%]  text-xl leading-none tracking-tighter text-zinc-50 md:text-2xl`}
          >
            {barberConfig.name}
          </span>
          <span className="hidden pb-0.5 text-[10px] uppercase tracking-[0.24em] text-zinc-400 group-hover:text-zinc-200 md:block">
            {barberConfig.city}
          </span>
        </a>

        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-7 md:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.22em] text-zinc-300 transition-colors hover:text-[var(--accent)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <ButtonLink
          href={barberConfig.bookingUrl}
          variant="primary"
          className="px-4 py-2 text-[10px] md:px-6 md:py-3"
          ariaLabel="Reserver en ligne"
        >
          Reserver
        </ButtonLink>
      </div>

      <nav
        aria-label="Navigation mobile"
        className="border-t border-zinc-900 md:hidden"
      >
        <div className="section-shell flex items-center justify-between gap-4 py-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.18em] text-zinc-300 hover:text-[var(--accent)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
