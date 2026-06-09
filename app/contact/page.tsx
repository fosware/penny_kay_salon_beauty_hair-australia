import Link from "next/link";
import type { Metadata } from "next";

import { ContactCard } from "@/components/contact-card";
import { MapEmbed } from "@/components/map-embed";
import { OpeningHours } from "@/components/opening-hours";
import { PageIntro } from "@/components/page-intro";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { business } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Penny Kay Salon in Springfield QLD. Call +61 487 097 954, book online or visit 3/23 Commercial Drive, Springfield QLD 4300.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Visit us in Springfield."
        description="Book online, call the salon or get directions to 3/23 Commercial Drive, Springfield QLD 4300."
      />
      <section className="section">
        <div className="container grid gap-4 lg:grid-cols-3">
          <ContactCard />
          <Card className="bg-white/80 p-5">
            <h2 className="font-serif text-3xl text-espresso">Opening hours</h2>
            <div className="mt-5">
              <OpeningHours />
            </div>
            <p className="mt-4 text-sm text-coffee">Please check with the salon for public holiday or seasonal changes.</p>
          </Card>
          <Card className="bg-white/80 p-5">
            <h2 className="font-serif text-3xl text-espresso">Book online</h2>
            <p className="mt-4 text-coffee">Appointments are booked through the salon&apos;s Timely booking system.</p>
            <Button className="mt-6" asChild variant="outline">
              <Link href={business.bookingUrl} target="_blank" rel="noopener noreferrer">
                Book Appointment
              </Link>
            </Button>
          </Card>
        </div>
        <div className="container">
          <MapEmbed />
        </div>
      </section>
    </>
  );
}
