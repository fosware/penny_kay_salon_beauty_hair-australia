import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeader({ eyebrow, title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-10 grid gap-5 lg:grid-cols-[0.9fr_1fr] lg:items-end", className)}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="font-serif text-4xl leading-[0.98] text-espresso md:text-6xl">{title}</h2>
      </div>
      {description ? <p className="max-w-2xl text-coffee">{description}</p> : null}
    </div>
  );
}
