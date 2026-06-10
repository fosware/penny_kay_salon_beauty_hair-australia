import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { business, serviceShowcase } from "@/data/site";

const categoryOrder = ["Colour & blonding", "Cuts & styling", "Treatments", "Events"];

export function ServiceShowcaseGrid() {
  const featured = serviceShowcase.filter((service) => service.featured);
  const groupedServices = categoryOrder.map((category) => ({
    category,
    services: serviceShowcase.filter((service) => service.category === category && !service.featured),
  }));

  return (
    <div className="grid gap-14">
      <section>
        <div className="mb-6 max-w-2xl">
          <p className="eyebrow">Most booked</p>
          <h2 className="font-serif text-4xl leading-none text-espresso md:text-5xl">Signature salon services.</h2>
          <p className="mt-4 text-coffee">
            Start here if you are looking for the core colour and styling appointments clients book most often.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {featured.map((service) => (
            <Card className="overflow-hidden bg-white/80 shadow-sm" key={service.title}>
              <Image
                className="aspect-[4/3] w-full object-cover"
                src={service.image}
                width={900}
                height={900}
                sizes="(min-width: 768px) 50vw, 100vw"
                alt={service.alt}
              />
              <div className="p-5">
                <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-gold">{service.category}</span>
                <h3 className="mt-3 font-serif text-3xl leading-none text-espresso">{service.title}</h3>
                <p className="mt-4 text-sm text-coffee">{service.description}</p>
                <Button asChild variant="outline" size="sm" className="mt-5">
                  <Link href={business.bookingUrl} target="_blank" rel="noopener noreferrer">
                    Book Your Visit
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {groupedServices.map(({ category, services }) => (
        <section className="grid gap-5 lg:grid-cols-[0.3fr_1fr]" key={category}>
          <div>
            <p className="eyebrow">Service group</p>
            <h2 className="font-serif text-4xl leading-none text-espresso">{category}</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <Card className="overflow-hidden bg-white/80" key={service.title}>
                <div className="grid h-full sm:grid-cols-[0.85fr_1.15fr]">
                  <Image
                    className="aspect-[4/3] h-full w-full object-cover sm:aspect-auto"
                    src={service.image}
                    width={900}
                    height={900}
                    sizes="(min-width: 1024px) 24vw, (min-width: 640px) 42vw, 100vw"
                    alt={service.alt}
                  />
                  <div className="flex h-full flex-col p-5">
                    <h3 className="font-serif text-3xl leading-none text-espresso">{service.title}</h3>
                    <p className="mt-4 text-sm text-coffee">{service.description}</p>
                    <ul className="mt-5 grid gap-2 text-sm text-coffee">
                      {service.services.map((item) => (
                        <li className="border-b border-border pb-2" key={item}>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="outline" size="sm" className="mt-5 w-fit">
                      <Link href={business.bookingUrl} target="_blank" rel="noopener noreferrer">
                        Book Your Visit
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
