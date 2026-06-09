import Link from "next/link";
import type { Metadata } from "next";

import { PageIntro } from "@/components/page-intro";
import { PrimaryCTA } from "@/components/primary-cta";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { business } from "@/data/site";

export const metadata: Metadata = {
  title: "New Clients",
  description:
    "New to Penny Kay Salon? Learn how to choose services, when to contact the salon and what to consider before colour, balayage or event hair.",
};

export default function NewClientsPage() {
  const guides = [
    ["For blonding or balayage", "Think about your current colour, previous colour history and how much maintenance you want before booking."],
    ["For colour correction", "Contact the salon first. Colour correction is listed from $250 and may require consultation and longer timing."],
    ["For event styling", "Confirm hair prep, timing, makeup details and any extra requirements before the event date."],
    ["For pricing", "Many services use short, medium, long and extra long pricing. Final cost may vary by hair length, condition and desired result."],
  ];

  return (
    <>
      <PageIntro
        eyebrow="New clients"
        title="Start with the right appointment."
        description="If you are unsure what to book, a little planning helps the team guide you towards the right timing and service."
      />
      <section className="section">
        <div className="container grid gap-4 md:grid-cols-2">
          {guides.map(([title, description]) => (
            <Card className="bg-white/80 p-5" key={title}>
              <h2 className="font-serif text-3xl text-espresso">{title}</h2>
              <p className="mt-4 text-coffee">{description}</p>
            </Card>
          ))}
        </div>
        <div className="container mt-8 flex flex-wrap gap-3">
          <PrimaryCTA />
          <Button asChild variant="outline">
            <Link href={business.phoneHref}>Call the Salon</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
