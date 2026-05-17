import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Card } from "@/components/PageShell";
import { skills } from "@/lib/portfolio-data";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Portfolio" },
      { name: "description", content: "Technical skills across AI/ML, programming, and web." },
    ],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  return (
    <PageShell eyebrow="Skills" title="Tools of the trade" intro="What I work with day-to-day.">
      <div className="grid gap-5 md:grid-cols-2">
        {skills.map((s) => (
          <Card key={s.category}>
            <h3 className="font-display text-lg font-semibold text-brand">{s.category}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {s.items.map((i) => (
                <span
                  key={i}
                  className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 font-mono text-xs text-foreground"
                >
                  {i}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
