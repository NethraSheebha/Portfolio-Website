import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Card } from "@/components/PageShell";
import { contact } from "@/lib/portfolio-data";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Portfolio" },
      { name: "description", content: "Get in touch via email, phone, LinkedIn, or GitHub." },
    ],
  }),
  component: ContactPage,
});

function Item({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-center gap-4 rounded-xl border border-border bg-card/60 p-5 backdrop-blur transition-all hover:border-brand/50 hover:shadow-[var(--shadow-elegant)]"
    >
      <div className="rounded-lg bg-brand/10 p-3 text-brand transition-transform group-hover:scale-110">
        {icon}
      </div>
      <div>
        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="mt-0.5 font-medium text-foreground">{value}</p>
      </div>
    </a>
  );
}

function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Let's connect"
      intro="Open to internships, collaborations, and conversations."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Item icon={<Mail size={20} />} label="Email" value={contact.email} href={`mailto:${contact.email}`} />
        <Item icon={<Phone size={20} />} label="Phone" value={contact.phone} href={`tel:${contact.phone.replace(/\s/g, "")}`} />
        <Item icon={<Linkedin size={20} />} label="LinkedIn" value={contact.linkedin.replace(/^https?:\/\//, "")} href={contact.linkedin} />
        <Item icon={<Github size={20} />} label="GitHub" value={contact.github.replace(/^https?:\/\//, "")} href={contact.github} />
      </div>
    </PageShell>
  );
}
