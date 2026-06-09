import Image from "next/image";

import { Card } from "@/components/ui/card";

type TeamCardProps = {
  name: string;
  role: string;
  bio: string;
  image: string;
  alt: string;
};

export function TeamCard({ name, role, bio, image, alt }: TeamCardProps) {
  return (
    <Card className="overflow-hidden bg-white/80">
      <Image className="aspect-[4/4.5] w-full object-cover" src={image} width={868} height={966} alt={alt} />
      <div className="grid gap-3 p-5">
        <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-gold">{role}</span>
        <h2 className="font-serif text-3xl leading-none text-espresso">{name}</h2>
        <p className="text-sm text-coffee">{bio}</p>
      </div>
    </Card>
  );
}
