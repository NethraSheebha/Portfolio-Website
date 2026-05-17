import { H as jsxRuntimeExports } from "./server-UjXdklTt.js";
function PageShell({
  eyebrow,
  title,
  intro,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-6 py-16 md:py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brand", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl font-bold md:text-5xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: title }) }),
    intro && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-muted-foreground", children: intro }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12", children })
  ] });
}
function Card({
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `group relative rounded-xl border border-border bg-card/60 p-6 backdrop-blur transition-all hover:border-brand/40 hover:shadow-[var(--shadow-elegant)] ${className}`,
      children
    }
  );
}
export {
  Card as C,
  PageShell as P
};
