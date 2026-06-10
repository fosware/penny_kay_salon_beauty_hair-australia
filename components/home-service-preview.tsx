import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const serviceHighlights = [
  ["Blondes & foils", "Brightness, regrowth support and dimensional blonde work."],
  ["Balayage", "Soft placement for lived-in colour and lower-maintenance grow-out."],
  ["Cuts & styling", "Fresh shape, polished blow dry finishes and event-ready looks."],
  ["Treatments", "Keratin, shine, detox and care to support smoother-feeling hair."],
];

export function HomeServicePreview() {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <Image
        className="aspect-[5/4] w-full rounded-lg object-cover shadow-salon"
        src="/images/gallery/colour-melt.jpg"
        width={606}
        height={608}
        sizes="(min-width: 1024px) 46vw, 100vw"
        alt="Colour melt hair result by Penny Kay Salon"
      />
      <div className="grid gap-4">
        {serviceHighlights.map(([title, description]) => (
          <div className="border-b border-border py-5" key={title}>
            <h3 className="font-serif text-3xl leading-none text-espresso">{title}</h3>
            <p className="mt-3 max-w-xl text-coffee">{description}</p>
          </div>
        ))}
        <div className="pt-3">
          <Button asChild variant="outline">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
