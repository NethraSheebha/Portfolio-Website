import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Card } from "@/components/PageShell";
import { competitiveProgramming } from "@/lib/portfolio-data";
import { ExternalLink, Code2 } from "lucide-react";

export const Route = createFileRoute("/competitive")({
  head: () => ({
    meta: [
      { title: "Competitive Programming — Portfolio" },
      { name: "description", content: "LeetCode and CodeChef profiles, ratings, and stats." },
    ],
  }),
  component: CompetitivePage,
});

function Platform({
  name,
  data,
}: {
  name: string;
  data: { handle: string; url: string; rating: string; solved: string };
}) {
  return (
    <Card>
      <div className="flex items-start gap-3">
        <div className="rounded-lg bg-brand/10 p-2.5 text-brand">
          <Code2 size={20} />
        </div>
        <div className="flex-1">
          <h3 className="font-display text-xl font-semibold">{name}</h3>
          <p className="font-mono text-sm text-muted-foreground">@{data.handle}</p>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-border bg-secondary/40 p-3">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Rating</p>
          <p className="mt-1 font-display text-xl font-bold text-brand">{data.rating}</p>
        </div>
        <div className="rounded-lg border border-border bg-secondary/40 p-3">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Stats</p>
          <p className="mt-1 text-sm font-medium text-foreground">{data.solved}</p>
        </div>
      </div>
      <a
        href={data.url}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex items-center gap-1.5 text-sm text-foreground transition-colors hover:text-brand"
      >
        <ExternalLink size={16} /> View profile
      </a>
    </Card>
  );
}

function CompetitivePage() {
  return (
    <PageShell
      eyebrow="Competitive Programming"
      title="Problem solving"
      intro="Sharpening algorithmic skills across platforms."
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Platform name="LeetCode" data={competitiveProgramming.leetcode} />
        <Platform name="CodeChef" data={competitiveProgramming.codechef} />
      </div>
    </PageShell>
  );
}
