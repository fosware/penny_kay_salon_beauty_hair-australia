import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

import { Card } from "@/components/ui/card";
import { business } from "@/data/site";

export function ContactCard() {
  return (
    <Card className="grid gap-4 bg-white/80 p-5">
      <h2 className="font-serif text-3xl text-espresso">Contact details</h2>
      <Link className="flex gap-3 font-bold text-espresso" href={business.phoneHref}>
        <Phone className="mt-1 h-4 w-4 text-gold" aria-hidden="true" />
        {business.phone}
      </Link>
      <Link className="flex gap-3 font-bold text-espresso" href={business.emailHref}>
        <Mail className="mt-1 h-4 w-4 text-gold" aria-hidden="true" />
        {business.email}
      </Link>
      <Link className="flex gap-3 font-bold text-espresso" href={business.directionsUrl} target="_blank" rel="noopener noreferrer">
        <MapPin className="mt-1 h-4 w-4 text-gold" aria-hidden="true" />
        {business.address}
      </Link>
    </Card>
  );
}
