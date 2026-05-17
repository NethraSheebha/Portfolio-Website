import { createFileRoute, Link } from "@tanstack/react-router";
import profileImg from "@/assets/profile.jpg";
import { profile } from "@/lib/portfolio-data";
import { ArrowRight, MapPin } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${"Portfolio"} — ${"Engineering Student"}` },
      {
        name: "description",
        content:
          "Portfolio of an engineering student — projects, skills, achievements, and experience.",
      },
    ],
  }),
  component: AboutPage,
});

const sections = [
  { to: "/education", label: "Education", desc: "Academic background" },
  { to: "/projects", label: "Projects", desc: "Things I've built" },
  { to: "/skills", label: "Skills", desc: "Tech stack & fundamentals" },
  { to: "/achievements", label: "Achievements", desc: "Hackathon wins" },
  { to: "/competitive", label: "Competitive", desc: "LeetCode & CodeChef" },
  { to: "/experience", label: "Experience", desc: "Internships & OSS" },
  { to: "/contact", label: "Contact", desc: "Let's connect" },
] as const;

function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid items-center gap-12 md:grid-cols-[1fr_auto]">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brand">
            Hello, world.
          </p>
          <h1 className="font-display text-5xl font-bold leading-[1.05] md:text-7xl">
            I'm <span className="text-gradient">{profile.name}</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">{profile.title}</p>
          <p className="mt-6 max-w-xl text-muted-foreground">{profile.tagline}</p>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={14} className="text-brand" />
            {profile.location}
          </p>
        </div>
        <div className="relative mx-auto">
          <div className="absolute -inset-3 rounded-full bg-[var(--gradient-brand)] opacity-30 blur-2xl" />
          <img
            src={profileImg}
            alt={profile.name}
            width={256}
            height={256}
            className="relative h-56 w-56 rounded-full border-2 border-brand/30 object-cover md:h-64 md:w-64"
          />
        </div>
      </div>

      <div className="mt-20">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Explore
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group flex items-center justify-between rounded-xl border border-border bg-card/60 p-5 backdrop-blur transition-all hover:border-brand/50 hover:bg-card hover:shadow-[var(--shadow-elegant)]"
            >
              <div>
                <p className="font-display text-lg font-semibold">{s.label}</p>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
              <ArrowRight
                size={18}
                className="text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-brand"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
