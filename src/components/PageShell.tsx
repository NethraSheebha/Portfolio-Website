import { ReactNode } from "react";

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brand">{eyebrow}</p>
      <h1 className="font-display text-4xl font-bold md:text-5xl">
        <span className="text-gradient">{title}</span>
      </h1>
      {intro && <p className="mt-4 max-w-2xl text-muted-foreground">{intro}</p>}
      <div className="mt-12">{children}</div>
    </section>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group relative rounded-xl border border-border bg-card/60 p-6 backdrop-blur transition-all hover:border-brand/40 hover:shadow-[var(--shadow-elegant)] ${className}`}
    >
      {children}
    </div>
  );
}
