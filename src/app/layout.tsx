import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tropix AI — Shooting for the Stars",
  description: "Tropix AI — No-code verified sales swarms. Research, enrich, personalize, verify, and execute autonomous outreach with built-in trust.",
  openGraph: {
    title: "Tropix AI — Shooting for the Stars",
    description: "Autonomous sales agents with verification and real results. Join the private beta.",
    url: "https://tropix.ai",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased selection:bg-cyan-neon/30`}>
        {children}
      </body>
    </html>
  );
}
