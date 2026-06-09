import Link from "next/link";

import { business } from "@/data/site";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 gap-2 border-t border-border bg-white/95 p-2 backdrop-blur lg:hidden">
      <Link className="flex min-h-11 items-center justify-center rounded-lg bg-espresso px-3 text-sm font-extrabold text-white" href={business.bookingUrl} target="_blank" rel="noopener noreferrer">
        Book
      </Link>
      <Link className="flex min-h-11 items-center justify-center rounded-lg border border-border px-3 text-sm font-extrabold text-espresso" href={business.phoneHref}>
        Call
      </Link>
      <Link className="flex min-h-11 items-center justify-center rounded-lg border border-border px-3 text-sm font-extrabold text-espresso" href={business.directionsUrl} target="_blank" rel="noopener noreferrer">
        Directions
      </Link>
    </div>
  );
}
