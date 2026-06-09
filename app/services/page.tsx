import type { Metadata } from "next";

import { BookingBanner } from "@/components/booking-banner";
import { GiftVoucherBanner } from "@/components/gift-voucher-banner";
import { PageIntro } from "@/components/page-intro";
import { ServiceShowcaseGrid } from "@/components/service-showcase-grid";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Penny Kay Salon services in Springfield QLD: blondes, foils, balayage, colour refreshes, cuts, treatments and event styling.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Colour, cuts, treatments and styling."
        description="A boutique Springfield salon for blondes, foils, balayage, colour refreshes, smooth finishes and special occasion hair."
      />
      <section className="section">
        <div className="container">
          <ServiceShowcaseGrid />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <GiftVoucherBanner />
        </div>
      </section>
      <BookingBanner />
    </>
  );
}
