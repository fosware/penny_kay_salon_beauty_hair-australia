import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { team } from "@/data/site";

type TeamEditorialGridProps = {
  showTeamLink?: boolean;
};

export function TeamEditorialGrid({ showTeamLink = true }: TeamEditorialGridProps) {
  const [owner, ...stylists] = team;

  return (
    <div className="grid gap-5">
      <Card className="overflow-hidden bg-white/80">
        <div className="grid gap-0 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <Image
            className="aspect-[4/3] h-full w-full object-cover lg:aspect-auto"
            src={owner.image}
            width={946}
            height={1016}
            alt={owner.alt}
          />
          <div className="p-6 md:p-8">
            <p className="eyebrow">Owner</p>
            <h3 className="font-serif text-5xl leading-none text-espresso">{owner.name}</h3>
            <p className="mt-5 max-w-2xl text-coffee">{owner.bio}</p>
            {showTeamLink ? (
              <Button asChild variant="outline" className="mt-6">
                <Link href="/team">Meet the Full Team</Link>
              </Button>
            ) : null}
          </div>
        </div>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stylists.map((member) => (
          <Card className="overflow-hidden bg-white/80" key={member.name}>
            <Image className="aspect-[4/4.3] w-full object-cover" src={member.image} width={868} height={966} alt={member.alt} />
            <div className="p-5">
              <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-gold">{member.role}</span>
              <h3 className="mt-3 font-serif text-3xl leading-none text-espresso">{member.name}</h3>
              <p className="mt-4 text-sm text-coffee">{member.bio}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
