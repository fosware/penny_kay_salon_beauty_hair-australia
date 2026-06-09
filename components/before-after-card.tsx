import Image from "next/image";

import { Card } from "@/components/ui/card";

type BeforeAfterCardProps = {
  beforeSrc: string;
  afterSrc: string;
  title: string;
};

export function BeforeAfterCard({ beforeSrc, afterSrc, title }: BeforeAfterCardProps) {
  return (
    <Card className="grid overflow-hidden bg-white/80 md:grid-cols-2">
      <div className="relative">
        <Image className="aspect-square w-full object-cover" src={beforeSrc} width={620} height={620} alt={`${title} before`} />
        <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-bold text-espresso">Before</span>
      </div>
      <div className="relative">
        <Image className="aspect-square w-full object-cover" src={afterSrc} width={620} height={620} alt={`${title} after`} />
        <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-bold text-espresso">After</span>
      </div>
    </Card>
  );
}
