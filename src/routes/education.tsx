import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Card } from "@/components/PageShell";
import { education } from "@/lib/portfolio-data";
import { GraduationCap } from "lucide-react";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Portfolio" },
      { name: "description", content: "Academic background: college, 12th, and 10th grade." },
    ],
  }),
  component: EducationPage,
});

function Block({
  data,
  level,
}: {
  data: { institution: string; degree?: string; board?: string; duration: string; score: string; details: string };
  level: string;
}) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-brand/10 p-2 text-brand">
            <GraduationCap size={20} />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-brand">{level}</p>
            <h3 className="mt-1 font-display text-xl font-semibold">{data.institution}</h3>
            <p className="text-sm text-muted-foreground">
              {data.degree ?? data.board} · {data.duration}
            </p>
          </div>
        </div>
        <span className="shrink-0 rounded-md border border-brand/30 bg-brand/10 px-3 py-1 font-mono text-sm text-brand">
          {data.score}
        </span>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">{data.details}</p>
    </Card>
  );
}

function EducationPage() {
  return (
    <PageShell eyebrow="Education" title="Academic journey" intro="From foundations to specialization.">
      <div className="grid gap-5">
        <Block data={education.college} level="College" />
        <Block data={education.twelfth} level="Class XII" />
        <Block data={education.tenth} level="Class X" />
      </div>
    </PageShell>
  );
}
