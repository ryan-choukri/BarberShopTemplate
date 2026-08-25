"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    planity?: {
      key: string;
      primaryColor: string;
      appointmentContainer: HTMLElement;
    };
  }
}

export default function PlanityWidget({
  containerId = "planity-widget",
  apiKey,
  primaryColor = "#000000",
}: {
  containerId?: string;
  apiKey: string;
  primaryColor?: string;
}) {
  useEffect(() => {
    const container = document.getElementById(containerId);

    if (!container) return;

    window.planity = {
      key: apiKey,
      primaryColor,
      appointmentContainer: container,
    };

    const polyfills = document.createElement("script");
    polyfills.src =
      "https://d2skjte8udjqxw.cloudfront.net/widget/production/2/polyfills.latest.js";

    const app = document.createElement("script");
    app.src =
      "https://d2skjte8udjqxw.cloudfront.net/widget/production/2/app.latest.js";

    document.body.appendChild(polyfills);
    document.body.appendChild(app);

    return () => {
      polyfills.remove();
      app.remove();

      delete window.planity;
    };
  }, [containerId, apiKey, primaryColor]);

  return <div id={containerId} />;
}
