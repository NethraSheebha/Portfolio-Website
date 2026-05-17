import { H as jsxRuntimeExports } from "./server-UjXdklTt.js";
import { P as PageShell, C as Card } from "./PageShell-CjNyivtN.js";
import { e as education } from "./portfolio-data-3HFAuQuR.js";
import { c as createLucideIcon } from "./router-D7vp9RIa.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0"
    }
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]
];
const GraduationCap = createLucideIcon("graduation-cap", __iconNode);
function Block({
  data,
  level
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg bg-brand/10 p-2 text-brand", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { size: 20 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-[0.15em] text-brand", children: level }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 font-display text-xl font-semibold", children: data.institution }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
            data.degree ?? data.board,
            " · ",
            data.duration
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 rounded-md border border-brand/30 bg-brand/10 px-3 py-1 font-mono text-sm text-brand", children: data.score })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: data.details })
  ] });
}
function EducationPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageShell, { eyebrow: "Education", title: "Academic journey", intro: "From foundations to specialization.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { data: education.college, level: "College" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { data: education.twelfth, level: "Class XII" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { data: education.tenth, level: "Class X" })
  ] }) });
}
export {
  EducationPage as component
};
