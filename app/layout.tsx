import type { Metadata } from "next";

import "./globals.css";

import { Footer } from "@/components/footer";
import { MobileStickyCTA } from "@/components/mobile-sticky-cta";
import { Navbar } from "@/components/navbar";
import { SEOJsonLd } from "@/components/seo-json-ld";
import { defaultMetadata, localBusinessJsonLd } from "@/data/site";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" data-scroll-behavior="smooth">
      <body>
        <a
          className="fixed left-4 top-4 z-[60] -translate-y-24 bg-espresso px-4 py-3 text-white transition focus:translate-y-0"
          href="#main"
        >
          Skip to content
        </a>
        <SEOJsonLd data={localBusinessJsonLd} />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
