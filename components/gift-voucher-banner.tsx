import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { business } from "@/data/site";

export function GiftVoucherBanner() {
  return (
    <Card className="overflow-hidden bg-white/80">
      <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="p-6 md:p-8">
          <p className="eyebrow">Gift vouchers</p>
          <h2 className="font-serif text-4xl leading-none text-espresso md:text-5xl">
            A salon experience to gift.
          </h2>
          <p className="mt-5 max-w-xl text-coffee">
            Gift vouchers may be available for salon experiences at Penny Kay Salon. Contact the team to confirm current availability and the best way to arrange one.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <Link href={business.phoneHref}>Ask About Gift Vouchers</Link>
            </Button>
            <span className="inline-flex items-center rounded-full border border-gold/35 px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-coffee">
              Confirm with salon
            </span>
          </div>
        </div>
        <Image
          className="aspect-[16/9] h-full w-full object-cover"
          src="/images/services/gift-vouchers.png"
          width={900}
          height={535}
          sizes="(min-width: 1024px) 52vw, 100vw"
          alt="Penny Kay Salon gift voucher graphic"
        />
      </div>
    </Card>
  );
}
