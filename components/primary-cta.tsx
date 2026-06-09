import Link from "next/link";

import { Button } from "@/components/ui/button";
import { business } from "@/data/site";

type PrimaryCTAProps = {
  label?: string;
  variant?: "default" | "outline" | "light" | "ghost";
};

export function PrimaryCTA({ label = "Book Appointment", variant = "default" }: PrimaryCTAProps) {
  return (
    <Button asChild variant={variant}>
      <Link href={business.bookingUrl} target="_blank" rel="noopener noreferrer">
        {label}
      </Link>
    </Button>
  );
}
