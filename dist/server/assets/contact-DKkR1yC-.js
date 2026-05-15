import { J as jsxRuntimeExports } from "./server-a5t9Epnm.js";
import { a as MarketingNav, M as MarketingFooter } from "./MarketingFooter-B1IcupiH.js";
import { l as createLucideIcon, y as useI18n, I as Input, a as Button, t as toast } from "./router-CjVt23mV.js";
import { C as Card, c as CardHeader, d as CardTitle, a as CardContent } from "./card-nATy2DeF.js";
import { L as Label } from "./label-BzXAHH3a.js";
import { T as Textarea } from "./textarea-BJ1-Hu5l.js";
import { M as Mail } from "./mail-DiOVd9XZ.js";
import { o as objectType, s as stringType } from "./types-DGfzljZx.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./dropdown-menu-DpuOH9sD.js";
import "./index-BpW9eZ3u.js";
import "./index-Bq5GC4r3.js";
import "./Combination-DM3OcOpe.js";
import "./index-VMIVWFOz.js";
import "./zap-CxVCsrS_.js";
import "./chevron-down-BWTbW6T6.js";
const __iconNode$1 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$1);
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
const schema = objectType({
  name: stringType().trim().min(1).max(100),
  email: stringType().trim().email().max(255),
  message: stringType().trim().min(5).max(1e3)
});
function Contact() {
  const {
    t
  } = useI18n();
  const onSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message")
    });
    if (!parsed.success) return toast.error(parsed.error.issues[0].message);
    toast.success(t("contactSuccess"));
    e.currentTarget.reset();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", style: {
    background: "var(--gradient-soft)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MarketingNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-6xl px-6 pt-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold tracking-tight md:text-5xl", children: t("contactTitle") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-xl text-muted-foreground", children: t("contactDescription") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-3", children: [{
        icon: Mail,
        label: t("email"),
        value: "energysafe@gmail.com"
      }, {
        icon: Phone,
        label: t("phone"),
        value: "0997118595"
      }, {
        icon: MapPin,
        label: t("location"),
        value: "Mingəçevir"
      }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "glass hover-lift", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex-row items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg text-primary-foreground", style: {
          background: "var(--gradient-blue)"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wide text-muted-foreground", children: c.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: c.value })
        ] })
      ] }) }, c.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-10 mx-auto max-w-2xl", style: {
        boxShadow: "var(--shadow-card)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: t("sendMessageTitle") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "name", children: t("name") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "name", name: "name", required: true, maxLength: 100 })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: t("email") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", name: "email", type: "email", required: true, maxLength: 255 })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "message", children: t("message") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "message", name: "message", rows: 5, required: true, maxLength: 1e3 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full", children: t("sendMessage") })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MarketingFooter, {})
  ] });
}
export {
  Contact as component
};
