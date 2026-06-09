import { Card } from "@/components/ui/card";

type ServiceCategoryProps = {
  title: string;
  items: string[];
};

export function ServiceCategory({ title, items }: ServiceCategoryProps) {
  return (
    <Card className="bg-white/75 p-5">
      <h2 className="font-serif text-3xl text-espresso">{title}</h2>
      <ul className="mt-5 grid gap-3 text-coffee">
        {items.map((item) => (
          <li className="border-b border-border pb-3" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}
