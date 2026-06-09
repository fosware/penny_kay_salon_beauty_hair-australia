import { Card } from "@/components/ui/card";
import { pricingCategories } from "@/data/site";

export function PricingTable() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {pricingCategories.map((category) => (
        <Card className="overflow-hidden bg-white/80" key={category.title}>
          <header className="flex items-center justify-between gap-4 bg-champagne/30 p-5">
            <h2 className="font-serif text-3xl text-espresso">{category.title}</h2>
            <span className="text-sm font-extrabold uppercase tracking-wide text-gold">From</span>
          </header>
          <dl>
            {category.rows.map(([name, price]) => (
              <div className="grid grid-cols-[1fr_auto] gap-4 border-t border-border px-5 py-4" key={name}>
                <dt className="font-extrabold text-espresso">{name}</dt>
                <dd className="font-extrabold text-gold">{price}</dd>
              </div>
            ))}
          </dl>
        </Card>
      ))}
    </div>
  );
}
