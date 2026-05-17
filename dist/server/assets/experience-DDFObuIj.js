import { H as jsxRuntimeExports } from "./server-UjXdklTt.js";
import { P as PageShell, C as Card } from "./PageShell-CjNyivtN.js";
import { d as experience } from "./portfolio-data-3HFAuQuR.js";
import { c as createLucideIcon } from "./router-D7vp9RIa.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
];
const Briefcase = createLucideIcon("briefcase", __iconNode$1);
const __iconNode = [
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M13 6h3a2 2 0 0 1 2 2v7", key: "1yeb86" }],
  ["line", { x1: "6", x2: "6", y1: "9", y2: "21", key: "rroup" }]
];
const GitPullRequest = createLucideIcon("git-pull-request", __iconNode);
function Block({
  data,
  icon,
  kind
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg bg-brand/10 p-2.5 text-brand", children: icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-[0.15em] text-brand", children: kind }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 font-display text-xl font-semibold", children: data.role }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: data.company }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-xs text-muted-foreground", children: [
          data.duration,
          " · ",
          data.location
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-2", children: data.points.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p })
    ] }, i)) })
  ] });
}
function ExperiencePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageShell, { eyebrow: "Experience", title: "Where I've worked", intro: "Industry internship and ongoing open-source contributions.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { data: experience.internship, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 20 }), kind: "Internship" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { data: experience.openSource, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(GitPullRequest, { size: 20 }), kind: "Open Source" })
  ] }) });
}
export {
  ExperiencePage as component
};
