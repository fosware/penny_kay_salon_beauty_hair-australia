import type { Metadata } from "next";

import { EditorialGallery } from "@/components/editorial-gallery";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View Penny Kay Salon hair results: blondes, foils, balayage, colour work and event styling in Springfield QLD.",
};

export default function GalleryPage() {
  return (
    <>
      <PageIntro
        eyebrow="Gallery"
        title="Editorial hair results."
        description="A curated selection of real salon work from Penny Kay Salon's current materials."
      />
      <section className="section">
        <div className="container">
          <EditorialGallery />
        </div>
      </section>
    </>
  );
}
