import { J as jsxRuntimeExports } from "./server-Buj_o9pi.js";
import { l as createLucideIcon, y as useI18n, L as Link } from "./router-C6fCM03v.js";
import { a as MarketingNav, M as MarketingFooter } from "./MarketingFooter-De3l-95q.js";
import { C as Card, c as CardHeader, d as CardTitle, a as CardContent } from "./card-Bt6oCjW9.js";
import { B as Badge } from "./badge-DVbZZS4J.js";
import { m as motion } from "./proxy-C0w3UIRv.js";
import { M as Mail } from "./mail-BLMKYSNg.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./dropdown-menu-CT0bDAum.js";
import "./index-DD10tKAZ.js";
import "./index-L34_ugnB.js";
import "./Combination-D9enl8gd.js";
import "./index-lSBdZxie.js";
import "./zap-BeezbeaP.js";
import "./chevron-down-YoI1RY_O.js";
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94", key: "hpej1" }],
  ["path", { d: "M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32", key: "1tr44o" }],
  ["path", { d: "M8.56 2.75c4.37 6 6 9.42 8 17.72", key: "kbh691" }]
];
const Dribbble = createLucideIcon("dribbble", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z", key: "1340ok" }],
  ["path", { d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z", key: "1hz3m3" }],
  ["path", { d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z", key: "1oz8n2" }],
  ["path", { d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z", key: "1ff65i" }],
  ["path", { d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z", key: "pdip6e" }]
];
const Figma = createLucideIcon("figma", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
];
const Github = createLucideIcon("github", __iconNode$1);
const __iconNode = [
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
const Linkedin = createLucideIcon("linkedin", __iconNode);
const team = [{
  name: "Fatima Alizade",
  role: "Komanda rəhbəri və full stack developer",
  bio: "Layihə idarəetməsi, əsas sayt funksiyaları, idarə paneli, autentifikasiya və backend inkişafına cavabdehdir.",
  socials: [Github, Linkedin, Mail]
}, {
  name: "Sevda Mammadova",
  role: "Frontend developer",
  bio: "Frontend inkişafı, səhifələrin hazırlanması, responsive dizayn və istifadəçi interfeysi funksionallığı üzərində işləyir.",
  socials: [Github, Linkedin, Mail]
}, {
  name: "Ramazan Guluzade",
  role: "UI/UX dizayner",
  bio: "UI/UX dizayn, istifadəçi təcrübəsinin yaxşılaşdırılması, rəng palitrası, struktur və vizual istiqamətə cavabdehdir.",
  socials: [Figma, Dribbble, Linkedin]
}, {
  name: "Fidan Salmanova",
  role: "Kreativ UI dizayner",
  bio: "Vizual elementlər, animasiyalar, ikonlar, modern komponent dizaynları və estetik istifadəçi təcrübəsi yaradır.",
  socials: [Figma, Dribbble, Linkedin]
}];
function About() {
  const {
    t
  } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", style: {
    background: "var(--gradient-soft)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MarketingNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-6xl px-6 pt-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.section, { initial: {
        opacity: 0,
        y: 16
      }, animate: {
        opacity: 1,
        y: 0
      }, className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl font-bold tracking-tight md:text-6xl", children: [
          t("aboutTitleStart"),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: t("aboutTitleHighlight") }),
          " ",
          t("aboutTitleEnd")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-2xl text-muted-foreground", children: t("aboutDescription") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-3", children: "Komanda" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold tracking-tight md:text-4xl", children: t("ourTeam") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Voltix-ni startup keyfiyyətində məhsula çevirən inkişaf, dizayn və istifadəçi təcrübəsi komandası." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4", children: team.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 18
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          delay: i * 0.08,
          duration: 0.45
        }, whileHover: {
          y: -8,
          scale: 1.015
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "group relative h-full overflow-hidden glass-strong transition-all duration-300 hover:shadow-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-24 opacity-80", style: {
            background: "var(--gradient-hero)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/20 blur-2xl transition-transform duration-500 group-hover:scale-150" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "relative items-center pt-10 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-bold text-primary-foreground shadow-lg transition-transform duration-300 group-hover:scale-110", style: {
              background: "var(--gradient-blue)"
            }, children: m.name.split(" ").map((p) => p[0]).slice(0, 2).join("") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: m.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "justify-center text-center", children: m.role })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "relative flex h-full flex-col gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm leading-6 text-muted-foreground", children: m.bio }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto flex justify-center gap-2 border-t pt-4", children: m.socials.map((Icon, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-full border bg-background/50 text-muted-foreground transition-colors hover:border-primary hover:text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }, `${m.name}-${index}`)) })
          ] })
        ] }) }, m.name)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-16 rounded-3xl glass p-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold", children: t("readyTitle") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: t("readyDescription") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/auth", className: "mt-5 inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover-lift", children: t("getStarted") })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MarketingFooter, {})
  ] });
}
export {
  About as component
};
