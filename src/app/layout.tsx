import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ray Deck — Strategic Clarity for Software-Driven Businesses",
  description:
    "I help founders, CEOs, and technical leaders solve their hardest problems. 25 years of deep technical expertise and strategic clarity — short, sharp engagements that move you forward fast.",
  openGraph: {
    title: "Ray Deck — Strategic Clarity for Software-Driven Businesses",
    description:
      "I help founders, CEOs, and technical leaders solve their hardest problems. Short, sharp engagements that move you forward fast.",
    url: "https://raydeck.com",
    siteName: "Ray Deck",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ray Deck — Strategic Clarity for Software-Driven Businesses",
    description:
      "Deep technical expertise meets strategic clarity. Short, sharp engagements that move you forward fast.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {/*
          Netlify Forms detection lives in public/__forms.html — a plain
          static HTML file that declares the `contact` form so Netlify's
          build-time scanner picks it up reliably (React-rendered forms
          aren't detected consistently). The actual user-facing form
          (src/components/contact-form.tsx) POSTs form-urlencoded data to
          "/" with `form-name=contact`.
        */}
        {children}
      </body>
    </html>
  );
}
