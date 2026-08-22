import { barberConfigs, type BarberConfig } from "@/src/config/index";

export function getBarberBySlug(slug: string): BarberConfig | undefined {
  return barberConfigs[slug];
}

export function getBarberByDomain(hostname: string): BarberConfig | undefined {
  const normalizedHost = hostname.toLowerCase().split(":")[0];

  return Object.values(barberConfigs).find(
    (config) => config.domain === normalizedHost,
  );
}
