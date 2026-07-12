import Providers from "@/components/Providers";
import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Dancing_Script,
  Great_Vibes,
} from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Sakura Journey 🌸",
  description: "A beautiful interactive friendship journey for Bhumi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${dancingScript.variable}
        ${greatVibes.variable}
        h-full
        antialiased
      `}
    >
      <body className="min-h-screen">
  <Providers>
    {children}
  </Providers>
</body>
    </html>
  );
}