import { H as jsxRuntimeExports } from "./server-UjXdklTt.js";
import { P as PageShell, C as Card } from "./PageShell-CjNyivtN.js";
import { f as projects } from "./portfolio-data-3HFAuQuR.js";
import { G as Github } from "./github-DUQ6EwE0.js";
import { E as ExternalLink } from "./external-link-BPFSBi1T.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-D7vp9RIa.js";
function ProjectsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageShell, { eyebrow: "Projects", title: "Things I've built", intro: "A selection of projects spanning AI, web, and systems.", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-2", children: projects.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold", children: p.name }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: p.description }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: p.tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md border border-border bg-secondary/60 px-2 py-0.5 font-mono text-xs text-muted-foreground", children: t }, t)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex gap-4", children: [
      p.github && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: p.github, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-1.5 text-sm text-foreground transition-colors hover:text-brand", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { size: 16 }),
        " GitHub"
      ] }),
      p.live && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: p.live, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-1.5 text-sm text-foreground transition-colors hover:text-brand", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 16 }),
        " Live"
      ] })
    ] })
  ] }, p.name)) }) });
}
export {
  ProjectsPage as component
};
