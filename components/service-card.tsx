import { Card } from "@/components/ui/card";

type ServiceCardProps = {
  index: number;
  title: string;
  description: string;
  tags?: string[];
};

export function ServiceCard({ index, title, description, tags = [] }: ServiceCardProps) {
  return (
    <Card className="grid min-h-64 gap-5 bg-white/75 p-5">
      <span className="font-serif text-5xl leading-none text-gold">{String(index).padStart(2, "0")}</span>
      <div>
        <h3 className="font-serif text-3xl leading-none text-espresso">{title}</h3>
        <p className="mt-4 text-coffee">{description}</p>
      </div>
      <div className="mt-auto flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span className="rounded-full border border-gold/40 px-3 py-1 text-xs font-bold text-coffee" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </Card>
  );
}
