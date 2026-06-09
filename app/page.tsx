import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { BookingBanner } from "@/components/booking-banner";
import { ContactCard } from "@/components/contact-card";
import { EditorialGallery } from "@/components/editorial-gallery";
import { FAQAccordion } from "@/components/faq-accordion";
import { HomeServicePreview } from "@/components/home-service-preview";
import { MapEmbed } from "@/components/map-embed";
import { OpeningHours } from "@/components/opening-hours";
import { PrimaryCTA } from "@/components/primary-cta";
import { PricingTable } from "@/components/pricing-table";
import { SectionHeader } from "@/components/section-header";
import { TeamEditorialGrid } from "@/components/team-editorial-grid";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { business } from "@/data/site";
import { HeroSection } from "@/sections/hero-section";

export const metadata: Metadata = {
  title: "Penny Kay Salon | Boutique Hair Salon in Springfield QLD",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <div className="container grid gap-4 border-y border-border py-5 md:grid-cols-4">
        {["3/23 Commercial Drive, Springfield", "Blondes, foils, balayage and colour", "Online booking through Timely", "Warm boutique local salon"].map(
          (item) => (
            <p className="text-sm font-extrabold uppercase tracking-wide text-coffee" key={item}>
              {item}
            </p>
          ),
        )}
      </div>

      <section className="section" id="services">
        <div className="container">
          <SectionHeader
            eyebrow="Services"
            title="Hair that feels personal, polished and beautifully you."
            description="From soft lived-in blondes to fresh cuts, treatments and special occasion styling, our team is here to help you feel confident from the chair to every day after."
          />
          <HomeServicePreview />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="grid grid-cols-[1fr_0.74fr] gap-4">
            <Image
              className="aspect-[4/5] w-full rounded-lg object-cover shadow-salon"
              src="/images/team/prue-hope.jpg"
              width={946}
              height={1016}
              alt="Prue Hope owner of Penny Kay Salon"
            />
            <Image
              className="aspect-[3/4] w-full self-end rounded-lg object-cover shadow-salon"
              src="/images/gallery/blonde-bob.jpg"
              width={618}
              height={608}
              alt="Blonde bob hair result by Penny Kay Salon"
            />
          </div>
          <div>
            <p className="eyebrow">About the salon</p>
            <h2 className="font-serif text-5xl leading-none text-espresso md:text-7xl">A local salon shaped by care, family and confidence.</h2>
            <p className="mt-6 text-lg text-coffee">
              Prue Hope brings over a decade of experience in the hair and beauty industry and a lifelong dream of creating a salon where clients feel genuinely cared for. Penny Kay Salon is inspired by family, confidence and the joy of helping people feel beautiful in their own way.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/team">Meet the Team</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href={business.phoneHref}>Call the Salon</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="gallery">
        <div className="container">
          <SectionHeader
            eyebrow="Gallery"
            title="Featured transformations and salon work."
            description="Real hair work from the current Penny Kay Salon materials, re-presented as a clean editorial gallery for blondes, foils, colour refreshes and event styling."
          />
          <EditorialGallery />
        </div>
      </section>

      <section className="section section-alt" id="pricing">
        <div className="container">
          <SectionHeader
            eyebrow="Pricing guide"
            title="Clear starting points before you book."
            description="Use this as a guide before booking. Final pricing may vary depending on hair length, condition, colour history and the desired result."
          />
          <PricingTable />
          <p className="mt-5 rounded-lg border border-sage/20 bg-sage/10 p-5 text-coffee">
            For colour correction, major colour changes, event services or anything you are unsure about, contact the salon before booking so the team can guide timing and service selection.
          </p>
        </div>
      </section>

      <BookingBanner />

      <section className="section" id="team">
        <div className="container">
          <SectionHeader
            eyebrow="Team"
            title="Warm, experienced and colour-focused."
            description="Meet the people behind the chair, from Prue's family-led salon vision to a team focused on colour, styling and client confidence."
          />
          <TeamEditorialGrid />
        </div>
      </section>

      <section className="section section-alt" id="new-clients">
        <div className="container">
          <SectionHeader
            eyebrow="New clients"
            title="Not sure what to book?"
            description="If you are planning a big colour change, colour correction or a first-time blonding service, we recommend contacting the salon before booking so the team can guide you towards the right appointment."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Choose by goal", "Book foils for blonde maintenance, balayage for soft dimension, and global colour for a fuller colour refresh."],
              ["Book a conversation first", "Colour correction, major changes and event hair are best confirmed with the salon before locking in your appointment."],
              ["Expect from pricing", "Length, hair history, condition and the desired result can affect final timing and price."],
              ["Prepare for events", "For in-salon hair and makeup, confirm timing, hair prep and any extra details with the team."],
            ].map(([title, description]) => (
              <Card className="bg-white/80 p-5" key={title}>
                <h3 className="font-serif text-3xl text-espresso">{title}</h3>
                <p className="mt-4 text-coffee">{description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <SectionHeader
            eyebrow="Contact"
            title="Visit us in Springfield."
            description="Find Penny Kay Salon at 3/23 Commercial Drive, Springfield QLD 4300. Book online, call the salon or use directions when you are ready to visit."
          />
          <div className="grid gap-4 lg:grid-cols-[0.8fr_0.8fr_1.2fr]">
            <ContactCard />
            <Card className="bg-white/80 p-5">
              <h2 className="font-serif text-3xl text-espresso">Opening hours</h2>
              <div className="mt-5">
                <OpeningHours />
              </div>
              <p className="mt-4 text-sm text-coffee">Please check with the salon for public holiday or seasonal changes.</p>
            </Card>
            <Card className="bg-white/80 p-5">
              <h2 className="font-serif text-3xl text-espresso">Message the salon</h2>
              <p className="mt-2 text-sm text-coffee">For appointment help, booking online or calling the salon is the fastest option.</p>
              <form className="mt-5 grid gap-4">
                <label className="grid gap-2 text-sm font-bold text-espresso">
                  First name *
                  <Input required autoComplete="given-name" />
                </label>
                <label className="grid gap-2 text-sm font-bold text-espresso">
                  Email *
                  <Input type="email" required autoComplete="email" />
                </label>
                <label className="grid gap-2 text-sm font-bold text-espresso">
                  Phone
                  <Input autoComplete="tel" />
                </label>
                <label className="grid gap-2 text-sm font-bold text-espresso">
                  Message
                  <Textarea />
                </label>
                <Button disabled variant="outline">
                  Enquiry Form Coming Soon
                </Button>
              </form>
            </Card>
          </div>
          <MapEmbed />
        </div>
      </section>

      <section className="section section-alt" id="faq">
        <div className="container">
          <SectionHeader eyebrow="FAQ" title="Helpful details before booking." description="Short answers for common booking, pricing and service questions." />
          <FAQAccordion />
          <div className="mt-8">
            <PrimaryCTA />
          </div>
        </div>
      </section>
    </>
  );
}
