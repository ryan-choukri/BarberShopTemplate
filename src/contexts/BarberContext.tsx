"use client";

import { createContext, useContext } from "react";
import type { BarberConfig } from "@/src/config";

const BarberContext = createContext<BarberConfig | null>(null);

export function BarberProvider({
  config,
  children,
}: {
  config: BarberConfig;
  children: React.ReactNode;
}) {
  return (
    <BarberContext.Provider value={config}>{children}</BarberContext.Provider>
  );
}

export function useCurrentBarber() {
  const config = useContext(BarberContext);

  if (!config) {
    throw new Error("useCurrentBarber must be used inside BarberProvider");
  }

  return config;
}
