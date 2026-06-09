import type { Metadata } from "next";

import { PageIntro } from "@/components/page-intro";
import { TeamEditorialGrid } from "@/components/team-editorial-grid";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the Penny Kay Salon team in Springfield QLD: Prue Hope, Carolyn, Riannon, Maddi and Clara.",
};

export default function TeamPage() {
  return (
    <>
      <PageIntro
        eyebrow="Team"
        title="Meet the team behind the chair."
        description="Warm, experienced and focused on helping each client feel confident from consultation to finish."
      />
      <section className="section">
        <div className="container">
          <TeamEditorialGrid showTeamLink={false} />
        </div>
      </section>
    </>
  );
}
