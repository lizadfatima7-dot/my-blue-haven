import { J as jsxRuntimeExports } from "./server-Buj_o9pi.js";
import { C as useTheme, y as useI18n, p as languages, L as Link, a as Button, E as Earth } from "./router-C6fCM03v.js";
import { u as useRouterState, D as DropdownMenu, e as DropdownMenuTrigger, a as DropdownMenuContent, c as DropdownMenuLabel, d as DropdownMenuSeparator, b as DropdownMenuItem, S as Sun, M as Moon } from "./dropdown-menu-CT0bDAum.js";
import { Z as Zap } from "./zap-BeezbeaP.js";
import { C as ChevronDown } from "./chevron-down-YoI1RY_O.js";
import { C as Check } from "./index-L34_ugnB.js";
function MarketingNav() {
  const path = useRouterState({ select: (r) => r.location.pathname });
  const { theme, toggle } = useTheme();
  const { language, setLanguage, t } = useI18n();
  const activeLanguage = languages.find((item) => item.code === language) ?? languages[0];
  const items = [
    { to: "/", label: t("navHome") },
    { to: "/about", label: t("navAbout") },
    { to: "/contact", label: t("navContact") }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl glass px-4 py-2.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-xl text-primary-foreground", style: { background: "var(--gradient-blue)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold tracking-tight", children: "Voltix" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden gap-1 md:flex", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: i.to,
        className: `rounded-lg px-3 py-1.5 text-sm transition-colors ${path === i.to ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground"}`,
        children: i.label
      },
      i.to
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", className: "gap-2 rounded-xl bg-background/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Earth, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: activeLanguage.nativeName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: activeLanguage.code.toUpperCase() }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3.5 w-3.5 opacity-70" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { align: "end", className: "w-52", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuLabel, { children: t("languageSelector") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, {}),
          languages.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onClick: () => setLanguage(item.code), className: "justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.flag }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.nativeName })
            ] }),
            item.code === language && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-primary" })
          ] }, item.code))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", onClick: toggle, "aria-label": t("toggleTheme"), children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "ghost", size: "sm", className: "hidden sm:inline-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/auth", children: t("signIn") }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/auth", children: t("getStarted") }) })
    ] })
  ] }) });
}
function MarketingFooter() {
  const { t } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t bg-card/40 py-10 mt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-lg text-primary-foreground", style: { background: "var(--gradient-blue)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Voltix" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: t("footerDescription") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: t("product") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-2 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground", children: t("navHome") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/auth", className: "hover:text-foreground", children: t("signIn") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard", className: "hover:text-foreground", children: t("dashboard") }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: t("company") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-2 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-foreground", children: t("navAbout") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-foreground", children: t("navContact") }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-10 text-center text-xs text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Voltix. ",
      t("footerCare")
    ] })
  ] });
}
export {
  MarketingFooter as M,
  MarketingNav as a
};
