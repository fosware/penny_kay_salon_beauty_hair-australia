import type { Metadata } from "next";

import { BookingBanner } from "@/components/booking-banner";
import { PageIntro } from "@/components/page-intro";
import { PricingTable } from "@/components/pricing-table";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "View Penny Kay Salon pricing guide for blondes, foils, balayage, colour, cuts, treatments and event styling in Springfield QLD.",
};

export default function PricingPage() {
  return (
    <>
      <PageIntro
        eyebrow="Pricing"
        title="Service pricing guide."
        description="Starting points for salon services. Final pricing may vary depending on hair length, condition and the desired result."
      />
      <section className="section">
        <div className="container">
          <PricingTable />
          <p className="mt-5 rounded-lg border border-sage/20 bg-sage/10 p-5 text-coffee">
            Pricing is a guide and may vary after consultation, especially for colour correction, major colour changes or extra-long hair.
          </p>
        </div>
      </section>
      <BookingBanner />
    </>
  );
}
