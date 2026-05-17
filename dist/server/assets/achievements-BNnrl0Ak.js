import { H as jsxRuntimeExports } from "./server-UjXdklTt.js";
import { P as PageShell, C as Card } from "./PageShell-CjNyivtN.js";
import { a as achievements } from "./portfolio-data-3HFAuQuR.js";
import { c as createLucideIcon } from "./router-D7vp9RIa.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978", key: "1n3hpd" }],
  ["path", { d: "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978", key: "rfe1zi" }],
  ["path", { d: "M18 9h1.5a1 1 0 0 0 0-5H18", key: "7xy6bh" }],
  ["path", { d: "M4 22h16", key: "57wxv0" }],
  ["path", { d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z", key: "1mhfuq" }],
  ["path", { d: "M6 9H4.5a1 1 0 0 1 0-5H6", key: "tex48p" }]
];
const Trophy = createLucideIcon("trophy", __iconNode);
function AchievementsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageShell, { eyebrow: "Achievements", title: "Wins & recognitions", intro: "Hackathons, competitions, and milestones.", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5", children: achievements.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg bg-brand/10 p-2.5 text-brand", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { size: 20 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold", children: a.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-muted-foreground", children: a.date })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-brand", children: a.org }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: a.description })
    ] })
  ] }) }, a.title)) }) });
}
export {
  AchievementsPage as component
};
