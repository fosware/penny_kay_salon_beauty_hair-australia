import Image from "next/image";
import Link from "next/link";

import { business, navItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[#211712] pb-28 pt-14 text-white lg:pb-14">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_0.8fr_1fr]">
        <div>
          <Link href="/" className="mb-4 flex items-center gap-3 uppercase tracking-wide">
            <Image src="/images/brand/penny-kay-logo.png" width={52} height={52} alt="" />
            <span>
              <strong className="block text-sm tracking-[0.14em]">Penny Kay</strong>
              <span className="block text-[0.67rem] tracking-[0.18em] text-white/70">Salon Springfield</span>
            </span>
          </Link>
          <p className="max-w-sm text-white/70">Boutique hair colour, cuts, treatments and event styling in Springfield QLD.</p>
        </div>
        <div className="grid gap-2">
          <strong>Explore</strong>
          {navItems.slice(0, 4).map((item) => (
            <Link className="text-white/70 hover:text-white" key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="grid content-start gap-2">
          <strong>Book</strong>
          <Link className="text-white/70 hover:text-white" href={business.bookingUrl} target="_blank" rel="noopener noreferrer">
            Book Appointment
          </Link>
          <Link className="text-white/70 hover:text-white" href="/new-clients">
            New Clients
          </Link>
          <Link className="text-white/70 hover:text-white" href="/contact">
            Contact
          </Link>
        </div>
        <div>
          <strong>Visit</strong>
          <p className="mt-2 text-white/70">
            {business.address}
            <br />
            <Link href={business.phoneHref}>{business.phone}</Link>
            <br />
            <Link href={business.emailHref}>{business.email}</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
