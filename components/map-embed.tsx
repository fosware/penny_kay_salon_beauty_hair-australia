import Link from "next/link";
import { MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { business } from "@/data/site";

export function MapEmbed() {
  const mapSrc =
    "https://www.google.com/maps?q=3%2F23%20Commercial%20Drive%2C%20Springfield%20QLD%204300&output=embed";

  return (
    <section className="mt-5 overflow-hidden rounded-lg border border-border bg-white/80 shadow-sm">
      <div className="grid gap-0 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="grid content-center gap-4 p-5 md:p-7">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-champagne/55 text-espresso">
            <MapPin className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="font-serif text-3xl leading-none text-espresso">Find us on Commercial Drive.</h3>
            <p className="mt-3 text-coffee">{business.address}</p>
          </div>
          <Button asChild variant="outline" className="w-fit">
            <Link href={business.directionsUrl} target="_blank" rel="noopener noreferrer">
              Get Directions
            </Link>
          </Button>
        </div>
        <iframe
          className="min-h-[320px] w-full border-0 lg:min-h-[420px]"
          src={mapSrc}
          title="Google Map showing Penny Kay Salon in Springfield QLD"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}
