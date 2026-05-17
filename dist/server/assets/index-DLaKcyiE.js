import { H as jsxRuntimeExports } from "./server-UjXdklTt.js";
import { c as createLucideIcon, L as Link } from "./router-D7vp9RIa.js";
import { p as profile } from "./portfolio-data-3HFAuQuR.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode);
const profileImg = "/assets/profile-CUcZbY8a.jpg";
const sections = [{
  to: "/education",
  label: "Education",
  desc: "Academic background"
}, {
  to: "/projects",
  label: "Projects",
  desc: "Things I've built"
}, {
  to: "/skills",
  label: "Skills",
  desc: "Tech stack & fundamentals"
}, {
  to: "/achievements",
  label: "Achievements",
  desc: "Hackathon wins"
}, {
  to: "/competitive",
  label: "Competitive",
  desc: "LeetCode & CodeChef"
}, {
  to: "/experience",
  label: "Experience",
  desc: "Internships & OSS"
}, {
  to: "/contact",
  label: "Contact",
  desc: "Let's connect"
}];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-6 py-16 md:py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-12 md:grid-cols-[1fr_auto]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brand", children: "Hello, world." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl font-bold leading-[1.05] md:text-7xl", children: [
          "I'm ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: profile.name })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground md:text-xl", children: profile.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-muted-foreground", children: profile.tagline }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14, className: "text-brand" }),
          profile.location
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-3 rounded-full bg-[var(--gradient-brand)] opacity-30 blur-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: profileImg, alt: profile.name, width: 256, height: 256, className: "relative h-56 w-56 rounded-full border-2 border-brand/30 object-cover md:h-64 md:w-64" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Explore" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3", children: sections.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: s.to, className: "group flex items-center justify-between rounded-xl border border-border bg-card/60 p-5 backdrop-blur transition-all hover:border-brand/50 hover:bg-card hover:shadow-[var(--shadow-elegant)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-semibold", children: s.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: s.desc })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18, className: "text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-brand" })
      ] }, s.to)) })
    ] })
  ] });
}
export {
  AboutPage as component
};
