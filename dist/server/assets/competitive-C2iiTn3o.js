import { H as jsxRuntimeExports } from "./server-UjXdklTt.js";
import { P as PageShell, C as Card } from "./PageShell-CjNyivtN.js";
import { c as competitiveProgramming } from "./portfolio-data-3HFAuQuR.js";
import { c as createLucideIcon } from "./router-D7vp9RIa.js";
import { E as ExternalLink } from "./external-link-BPFSBi1T.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
];
const CodeXml = createLucideIcon("code-xml", __iconNode);
function Platform({
  name,
  data
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg bg-brand/10 p-2.5 text-brand", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeXml, { size: 20 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold", children: name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-sm text-muted-foreground", children: [
          "@",
          data.handle
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-secondary/40 p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-wider text-muted-foreground", children: "Rating" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-display text-xl font-bold text-brand", children: data.rating })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-secondary/40 p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-wider text-muted-foreground", children: "Stats" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm font-medium text-foreground", children: data.solved })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: data.url, target: "_blank", rel: "noreferrer", className: "mt-5 inline-flex items-center gap-1.5 text-sm text-foreground transition-colors hover:text-brand", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 16 }),
      " View profile"
    ] })
  ] });
}
function CompetitivePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageShell, { eyebrow: "Competitive Programming", title: "Problem solving", intro: "Sharpening algorithmic skills across platforms.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 md:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Platform, { name: "LeetCode", data: competitiveProgramming.leetcode }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Platform, { name: "CodeChef", data: competitiveProgramming.codechef })
  ] }) });
}
export {
  CompetitivePage as component
};
