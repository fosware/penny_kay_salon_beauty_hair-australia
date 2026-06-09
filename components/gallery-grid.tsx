"use client";

import Image from "next/image";
import { useState } from "react";

import { Card } from "@/components/ui/card";
import { galleryItems } from "@/data/site";
import { cn } from "@/lib/utils";

const filters = [
  { label: "All", value: "all" },
  { label: "Blondes", value: "blonde" },
  { label: "Balayage", value: "balayage" },
  { label: "Events", value: "events" },
];

export function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState("all");
  const visibleItems =
    activeFilter === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter);
  const [featuredItem, ...remainingItems] = visibleItems;

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2" aria-label="Gallery filters">
        {filters.map((filter) => (
          <button
            type="button"
            className={cn(
              "rounded-full border border-border px-4 py-2 text-sm font-extrabold text-coffee transition hover:border-espresso hover:text-espresso",
              activeFilter === filter.value && "border-espresso bg-espresso text-white hover:text-white",
            )}
            onClick={() => setActiveFilter(filter.value)}
            key={filter.value}
          >
            {filter.label}
          </button>
        ))}
      </div>
      {featuredItem ? (
        <Card className="mb-5 overflow-hidden bg-white/80">
          <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <Image
              className="aspect-[16/10] h-full w-full object-cover"
              src={featuredItem.src}
              width={900}
              height={650}
              alt={featuredItem.alt}
            />
            <figcaption className="p-6 md:p-8">
              <p className="eyebrow">Featured result</p>
              <h3 className="font-serif text-4xl leading-none text-espresso md:text-5xl">{featuredItem.title}</h3>
              <p className="mt-5 text-coffee">{featuredItem.description}</p>
            </figcaption>
          </div>
        </Card>
      ) : null}
      <div className="grid gap-5 md:grid-cols-2">
        {remainingItems.map((item) => (
          <Card className="overflow-hidden bg-white/80" key={item.title}>
            <Image className="aspect-square w-full object-cover" src={item.src} width={630} height={608} alt={item.alt} />
            <figcaption className="p-4">
              <strong className="block text-espresso">{item.title}</strong>
              <p className="text-sm text-coffee">{item.description}</p>
            </figcaption>
          </Card>
        ))}
      </div>
    </div>
  );
}
