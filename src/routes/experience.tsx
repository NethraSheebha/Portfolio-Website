import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Card } from "@/components/PageShell";
import { experience } from "@/lib/portfolio-data";
import { Briefcase, GitPullRequest } from "lucide-react";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Portfolio" },
      { name: "description", content: "Internship experience and open source contributions." },
    ],
  }),
  component: ExperiencePage,
});

function Block({
  data,
  icon,
  kind,
}: {
  data: { role: string; company: string; duration: string; location: string; points: string[] };
  icon: React.ReactNode;
  kind: string;
}) {
  return (
    <Card>
      <div className="flex items-start gap-3">
        <div className="rounded-lg bg-brand/10 p-2.5 text-brand">{icon}</div>
        <div className="flex-1">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-brand">{kind}</p>
          <h3 className="mt-1 font-display text-xl font-semibold">{data.role}</h3>
          <p className="text-sm text-foreground">{data.company}</p>
          <p className="font-mono text-xs text-muted-foreground">
            {data.duration} · {data.location}
          </p>
        </div>
      </div>
      <ul className="mt-5 space-y-2">
        {data.points.map((p, i) => (
          <li key={i} className="flex gap-3 text-sm text-muted-foreground">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function ExperiencePage() {
  return (
    <PageShell
      eyebrow="Experience"
      title="Where I've worked"
      intro="Industry internship and ongoing open-source contributions."
    >
      <div className="grid gap-5">
        <Block data={experience.internship} icon={<Briefcase size={20} />} kind="Internship" />
        <Block
          data={experience.openSource}
          icon={<GitPullRequest size={20} />}
          kind="Open Source"
        />
      </div>
    </PageShell>
  );
}
