"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { business, navItems } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function handleHomeClick(event: React.MouseEvent<HTMLAnchorElement>) {
    setOpen(false);

    if (pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function handleNavClick(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
    setOpen(false);

    if (pathname === href) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-ivory/90 backdrop-blur-xl">
      <nav className="container flex min-h-20 items-center justify-between gap-4" aria-label="Main navigation">
        <Link
          href="/"
          className="flex items-center gap-3 uppercase tracking-wide"
          aria-label="Penny Kay Salon home"
          onClick={handleHomeClick}
        >
          <Image src="/images/brand/penny-kay-logo.png" width={52} height={52} alt="" priority />
          <span className="leading-none">
            <strong className="block text-sm tracking-[0.14em] text-espresso">Penny Kay</strong>
            <span className="mt-1 block text-[0.67rem] tracking-[0.18em] text-coffee">Salon Springfield</span>
          </span>
        </Link>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-white text-espresso lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <div
          className={`absolute left-4 right-4 top-24 grid gap-1 rounded-lg border border-border bg-white p-3 shadow-salon lg:static lg:flex lg:items-center lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none ${
            open ? "grid" : "hidden lg:flex"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-bold text-coffee transition hover:bg-champagne/30 hover:text-espresso"
              onClick={(event) => handleNavClick(event, item.href)}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="sm" className="mt-2 lg:mt-0">
            <Link href={business.bookingUrl} target="_blank" rel="noopener noreferrer">
              Book Now
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
