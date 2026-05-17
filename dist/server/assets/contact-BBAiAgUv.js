import { H as jsxRuntimeExports } from "./server-UjXdklTt.js";
import { P as PageShell } from "./PageShell-CjNyivtN.js";
import { b as contact } from "./portfolio-data-3HFAuQuR.js";
import { c as createLucideIcon } from "./router-D7vp9RIa.js";
import { G as Github } from "./github-DUQ6EwE0.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$2 = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
];
const Linkedin = createLucideIcon("linkedin", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode);
function Item({
  icon,
  label,
  value,
  href
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href, target: href.startsWith("http") ? "_blank" : void 0, rel: "noreferrer", className: "group flex items-center gap-4 rounded-xl border border-border bg-card/60 p-5 backdrop-blur transition-all hover:border-brand/50 hover:shadow-[var(--shadow-elegant)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg bg-brand/10 p-3 text-brand transition-transform group-hover:scale-110", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-wider text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 font-medium text-foreground", children: value })
    ] })
  ] });
}
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageShell, { eyebrow: "Contact", title: "Let's connect", intro: "Open to internships, collaborations, and conversations.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 20 }), label: "Email", value: contact.email, href: `mailto:${contact.email}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 20 }), label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { size: 20 }), label: "LinkedIn", value: contact.linkedin.replace(/^https?:\/\//, ""), href: contact.linkedin }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { size: 20 }), label: "GitHub", value: contact.github.replace(/^https?:\/\//, ""), href: contact.github })
  ] }) });
}
export {
  ContactPage as component
};
