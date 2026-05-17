import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Card } from "@/components/PageShell";
import { achievements } from "@/lib/portfolio-data";
import { Trophy } from "lucide-react";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — Portfolio" },
      { name: "description", content: "Hackathon wins and notable recognitions." },
    ],
  }),
  component: AchievementsPage,
});

function AchievementsPage() {
  return (
    <PageShell
      eyebrow="Achievements"
      title="Wins & recognitions"
      intro="Hackathons, competitions, and milestones."
    >
      <div className="grid gap-5">
        {achievements.map((a) => (
          <Card key={a.title}>
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-brand/10 p-2.5 text-brand">
                <Trophy size={20} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold">{a.title}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{a.date}</span>
                </div>
                <p className="text-sm text-brand">{a.org}</p>
                <p className="mt-2 text-sm text-muted-foreground">{a.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
