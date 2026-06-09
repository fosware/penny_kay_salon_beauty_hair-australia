import { PrimaryCTA } from "@/components/primary-cta";

export function BookingBanner() {
  return (
    <section className="bg-espresso py-16 text-white">
      <div className="container">
        <p className="eyebrow text-champagne">Online booking</p>
        <h2 className="max-w-2xl font-serif text-5xl leading-none md:text-7xl">Ready for your next salon visit?</h2>
        <p className="mt-5 max-w-2xl text-white/75">
          Choose your service, select your preferred time and book directly through the salon&apos;s online appointment system.
        </p>
        <div className="mt-8">
          <PrimaryCTA variant="light" />
        </div>
      </div>
    </section>
  );
}
