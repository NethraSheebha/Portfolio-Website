import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Card } from "@/components/PageShell";
import { projects } from "@/lib/portfolio-data";
import { Github, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Portfolio" },
      { name: "description", content: "Selected projects with source code on GitHub." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <PageShell
      eyebrow="Projects"
      title="Things I've built"
      intro="A selection of projects spanning AI, web, and systems."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.name}>
            <h3 className="font-display text-xl font-semibold">{p.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border bg-secondary/60 px-2 py-0.5 font-mono text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-5 flex gap-4">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-foreground transition-colors hover:text-brand"
                >
                  <Github size={16} /> GitHub
                </a>
              )}
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-foreground transition-colors hover:text-brand"
                >
                  <ExternalLink size={16} /> Live
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
