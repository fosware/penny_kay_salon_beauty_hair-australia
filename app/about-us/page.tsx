import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { BookingBanner } from "@/components/booking-banner";
import { PageIntro } from "@/components/page-intro";
import { PrimaryCTA } from "@/components/primary-cta";
import { SectionHeader } from "@/components/section-header";
import { TeamEditorialGrid } from "@/components/team-editorial-grid";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { salonExperience, salonValues } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Penny Kay Salon in Springfield QLD, the story behind the salon name, Prue Hope's family-led vision and the team values behind each appointment.",
};

export default function AboutUsPage() {
  return (
    <>
      <PageIntro
        eyebrow="About us"
        title="A Springfield salon shaped by family, care and confidence."
        description="Penny Kay Salon is a local hair salon built around thoughtful service, polished hair and the feeling of being genuinely looked after."
      />

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="grid grid-cols-[1fr_0.74fr] gap-4">
            <Image
              className="aspect-[4/5] w-full rounded-lg object-cover shadow-salon"
              src="/images/team/prue-hope.jpg"
              width={946}
              height={1016}
              sizes="(min-width: 1024px) 32vw, 58vw"
              alt="Prue Hope owner of Penny Kay Salon"
              priority
            />
            <Image
              className="aspect-[3/4] w-full self-end rounded-lg object-cover shadow-salon"
              src="/images/hero/salon-interior.jpg"
              width={1600}
              height={950}
              sizes="(min-width: 1024px) 24vw, 42vw"
              alt="Interior of Penny Kay Salon in Springfield"
            />
          </div>
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="font-serif text-5xl leading-none text-espresso md:text-7xl">Prue&apos;s lifelong salon dream.</h2>
            <div className="mt-6 grid gap-5 text-coffee">
              <p>
                With over a decade of experience in the hair and beauty industry, Prue Hope created Penny Kay Salon from a lifelong dream of owning a space where clients feel special, cared for and confident.
              </p>
              <p>
                The name Penny Kay is inspired by Prue&apos;s daughters, Penny and Kaya, with family sitting at the heart of the salon&apos;s story. Her partner Tau and their growing family are part of the warmth behind the business, and that sense of care carries into the way the team welcomes clients.
              </p>
              <p>
                The salon&apos;s focus is professional hair service with a personal feeling: thoughtful colour work, polished styling and honest guidance so every appointment feels considered.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryCTA />
              <Button asChild variant="outline">
                <Link href="/team">Meet the Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeader
            eyebrow="Values"
            title="The salon values we work by."
            description="A good salon experience is about more than the result. These values shape how the team approaches colour, styling and client care."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {salonValues.map((value) => (
              <Card className="bg-white/80 p-5" key={value.title}>
                <h3 className="font-serif text-3xl leading-none text-espresso">{value.title}</h3>
                <p className="mt-4 text-coffee">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow">Salon experience</p>
            <h2 className="font-serif text-5xl leading-none text-espresso md:text-6xl">A considered appointment from start to finish.</h2>
            <p className="mt-5 text-coffee">
              From service guidance to online booking, the salon experience is designed to feel clear, warm and easy to navigate.
            </p>
          </div>
          <div className="grid gap-3">
            {salonExperience.map((item) => (
              <div className="rounded-lg border border-border bg-white/80 p-5 font-bold text-espresso" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeader
            eyebrow="Team"
            title="Meet the people behind the chair."
            description="A warm team focused on colour, styling and helping each client feel confident from consultation to finish."
          />
          <TeamEditorialGrid showTeamLink={false} />
        </div>
      </section>

      <BookingBanner />
    </>
  );
}
