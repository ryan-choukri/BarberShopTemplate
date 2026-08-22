import { Bebas_Neue, Manrope } from "next/font/google";
import "./globals.css";
import { baseMetadata } from "@/src/config/site";
import localFont from "next/font/local";

const displayFont = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const joaquinFont = localFont({
  variable: "--font-joaquin",
  src: "../public/JOAQUIN.otf",
  display: "swap",
});

export const metadata = baseMetadata;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${joaquinFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
