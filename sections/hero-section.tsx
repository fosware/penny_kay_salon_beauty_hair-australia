import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

import { PrimaryCTA } from "@/components/primary-cta";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[680px] overflow-hidden border-b border-border bg-ivory text-espresso md:min-h-[720px]">
      <Image
        className="object-cover object-center"
        src="/images/hero/salon-interior.jpg"
        fill
        sizes="100vw"
        alt="Interior of a boutique hair salon with styling chairs, mirrors and soft lighting"
        priority
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,247,239,0.95)_0%,rgba(251,247,239,0.86)_34%,rgba(251,247,239,0.36)_58%,rgba(251,247,239,0.02)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ivory/95 to-transparent" />

      <div className="container relative flex min-h-[680px] items-center py-14 md:min-h-[720px] md:py-20">
        <div className="max-w-3xl">
          <div className="mb-5 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/35 bg-white/75 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-coffee backdrop-blur">
              <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              Springfield QLD
            </span>
          </div>
          <p className="eyebrow mb-4">Boutique local hair salon</p>
          <h1 className="max-w-3xl font-serif text-5xl leading-[0.98] text-espresso md:text-7xl lg:text-[5.8rem]">
            Boutique hair colour in Springfield.
          </h1>
          <p className="mt-6 max-w-[36rem] text-lg leading-relaxed text-coffee md:text-xl">
            Blondes, foils, balayage, cuts, treatments and event-ready styling in a warm local salon.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryCTA />
            <Button asChild variant="outline">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
          <div className="mt-10 grid max-w-2xl gap-3 border-t border-espresso/15 pt-6 text-sm font-bold uppercase tracking-wide text-coffee sm:grid-cols-3">
            <span>Online booking</span>
            <span>Colour, cuts & styling</span>
            <span>3/23 Commercial Drive</span>
          </div>
        </div>
      </div>
    </section>
  );
}
