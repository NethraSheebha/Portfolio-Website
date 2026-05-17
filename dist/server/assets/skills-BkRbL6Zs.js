import { H as jsxRuntimeExports } from "./server-UjXdklTt.js";
import { P as PageShell, C as Card } from "./PageShell-CjNyivtN.js";
import { s as skills } from "./portfolio-data-3HFAuQuR.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function SkillsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageShell, { eyebrow: "Skills", title: "Tools of the trade", intro: "What I work with day-to-day.", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-2", children: skills.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold text-brand", children: s.category }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: s.items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md border border-border bg-secondary/60 px-2.5 py-1 font-mono text-xs text-foreground", children: i }, i)) })
  ] }, s.category)) }) });
}
export {
  SkillsPage as component
};
