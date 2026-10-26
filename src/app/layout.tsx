import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Self-hosted at build time by next/font: no runtime request to Google.
const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

const title = "Faiz Azzam Attanthowi | Software Developer Portfolio";
const description =
  "Portfolio of Faiz Azzam Attanthowi, a Computer Science student at BINUS University @Malang focused on mobile development, full-stack web development, and backend engineering.";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Faiz Azzam Attanthowi" }],
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0b0d",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body id="top">{children}</body>
    </html>
  );
}
