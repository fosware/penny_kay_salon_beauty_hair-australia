import { featuredServices } from "@/data/site";
import { ServiceCard } from "@/components/service-card";

export function FeaturedServiceGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {featuredServices.map((service, index) => (
        <ServiceCard key={service.title} index={index + 1} {...service} />
      ))}
    </div>
  );
}
