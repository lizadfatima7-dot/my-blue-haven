import { S as reactExports, J as jsxRuntimeExports } from "./server-Buj_o9pi.js";
import { l as createLucideIcon, y as useI18n, a as Button, L as Link, B as Bot, I as Input } from "./router-C6fCM03v.js";
import { a as MarketingNav, M as MarketingFooter } from "./MarketingFooter-De3l-95q.js";
import { C as Card, c as CardHeader, d as CardTitle, a as CardContent } from "./card-Bt6oCjW9.js";
import { L as Label } from "./label-BSfmMjMU.js";
import { m as motion } from "./proxy-C0w3UIRv.js";
import { S as Sparkles, a as AreaChart, A as Area } from "./AreaChart-CDb0rYG7.js";
import { p as ResponsiveContainer } from "./CartesianChart-DV6BMoy1.js";
import { X as XAxis, T as Tooltip } from "./XAxis-CCbUN3YO.js";
import { A as Activity } from "./activity-DkQIq7OV.js";
import { Z as Zap } from "./zap-BeezbeaP.js";
import { L as LeafyGreen } from "./leafy-green-B2Mr3uTZ.js";
import { C as ChartColumn } from "./chart-column-BqzXMNhV.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./dropdown-menu-CT0bDAum.js";
import "./index-DD10tKAZ.js";
import "./index-L34_ugnB.js";
import "./Combination-D9enl8gd.js";
import "./index-lSBdZxie.js";
import "./chevron-down-YoI1RY_O.js";
import "./getRadiusAndStrokeWidthFromDot-BXYqTBUW.js";
import "./index-Dg6PRTG0.js";
const __iconNode$4 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$4);
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$3);
const __iconNode$2 = [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
];
const CreditCard = createLucideIcon("credit-card", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
  ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }]
];
const Gauge = createLucideIcon("gauge", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const ShieldCheck = createLucideIcon("shield-check", __iconNode);
function useCounter(target, duration = 1400) {
  const [v, setV] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(target * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return v;
}
const chartData = Array.from({
  length: 24
}, (_, h) => ({
  hour: `${String(h).padStart(2, "0")}h`,
  usage: Number((1 + 1.6 * Math.exp(-Math.pow(h - 8, 2) / 12) + 2.2 * Math.exp(-Math.pow(h - 20, 2) / 8) + Math.random() * 0.4).toFixed(2))
}));
function isValidCardNumber(value) {
  const digits = value.replace(/\D/g, "");
  if (digits.length < 13 || digits.length > 19 || /^(\d)\1+$/.test(digits)) return false;
  let sum = 0;
  let shouldDouble = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    let n = Number(digits[i]);
    if (shouldDouble) {
      n *= 2;
      if (n > 9) n -= 9;
    }
    sum += n;
    shouldDouble = !shouldDouble;
  }
  return sum % 10 === 0;
}
function isValidExpiry(value) {
  const match = /^(0[1-9]|1[0-2])\/(\d{2})$/.exec(value);
  if (!match) return false;
  const expiry = new Date(2e3 + Number(match[2]), Number(match[1]), 0, 23, 59, 59);
  return expiry >= /* @__PURE__ */ new Date();
}
function Home() {
  const users = useCounter(12450);
  const kwh = useCounter(842e3);
  const co2 = useCounter(354);
  const {
    t
  } = useI18n();
  const features = t("features").map((feature) => {
    const [title, text] = feature.split("|");
    return {
      title,
      text
    };
  });
  const featureIcons = [Gauge, ChartColumn, Bot, LeafyGreen, ShieldCheck, Sparkles];
  const [card, setCard] = reactExports.useState("");
  const [expiry, setExpiry] = reactExports.useState("");
  const [cvc, setCvc] = reactExports.useState("");
  const paymentValid = isValidCardNumber(card) && isValidExpiry(expiry) && /^\d{3,4}$/.test(cvc);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", style: {
    background: "var(--gradient-soft)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MarketingNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-6xl px-6 pt-12 md:pt-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 top-10 -z-10 mx-auto h-[420px] w-[820px] max-w-full rounded-full opacity-50 blur-3xl", style: {
          background: "var(--gradient-hero)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.6
        }, className: "mx-auto max-w-3xl text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-accent" }),
            " ",
            t("heroBadge")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 text-balance text-5xl font-bold tracking-tight md:text-7xl", children: [
            t("heroTitleStart"),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: t("heroTitleHighlight") }),
            " ",
            t("heroTitleEnd")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-2xl text-lg text-muted-foreground", children: t("heroDescription") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "gap-2 hover-lift", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/auth", children: [
              t("getStarted"),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard", children: t("liveDemo") }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.7,
          delay: 0.2
        }, className: "mx-auto mt-14 max-w-5xl rounded-3xl glass-strong p-4 md:p-6", style: {
          boxShadow: "var(--shadow-elegant)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-2 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-flex h-2 w-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full bg-accent live-dot" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-block h-2 w-2 rounded-full bg-accent" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: t("liveUsage") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "kWh" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[260px] w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: chartData, margin: {
            top: 10,
            right: 10,
            left: 0,
            bottom: 0
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "heroGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.55 0.21 255)", stopOpacity: 0.7 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "60%", stopColor: "oklch(0.7 0.18 180)", stopOpacity: 0.4 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.72 0.2 145)", stopOpacity: 0.05 })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "hour", tick: {
              fontSize: 11,
              fill: "currentColor",
              opacity: 0.6
            }, axisLine: false, tickLine: false, interval: 3 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              fontSize: 12
            }, labelStyle: {
              color: "var(--muted-foreground)"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "usage", stroke: "oklch(0.55 0.21 255)", strokeWidth: 2.5, fill: "url(#heroGrad)" })
          ] }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mt-20 grid gap-4 md:grid-cols-3", children: [{
        label: t("activeHomes"),
        value: users,
        suffix: "+",
        icon: Activity
      }, {
        label: t("kwhMonitored"),
        value: kwh,
        suffix: "+",
        icon: Zap
      }, {
        label: t("co2Saved"),
        value: co2,
        suffix: "",
        icon: LeafyGreen
      }].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 16
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.1
      }, className: "rounded-2xl glass p-6 hover-lift", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: s.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5 text-primary" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-4xl font-bold tracking-tight", children: [
          Math.round(s.value).toLocaleString(),
          s.suffix
        ] })
      ] }, s.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold tracking-tight md:text-4xl", children: t("featuresTitle") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: t("featuresDescription") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: features.map((f, i) => {
          const Icon = featureIcons[i];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 16
          }, whileInView: {
            opacity: 1,
            y: 0
          }, viewport: {
            once: true
          }, transition: {
            delay: i * 0.05
          }, className: "rounded-2xl border bg-card p-6 hover-lift", style: {
            backgroundImage: "var(--gradient-card)"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-xl text-primary-foreground", style: {
              background: "var(--gradient-blue)"
            }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-lg font-semibold", children: f.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: f.text })
          ] }, f.title);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-24 rounded-3xl border bg-card p-6 md:p-8", style: {
        backgroundImage: "var(--gradient-card)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold tracking-tight md:text-4xl", children: "Premium abunəlik" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Premium analitika, inkişaf etmiş hesabatlar və ağıllı qənaət planları üçün kart məlumatını təhlükəsiz formatda yoxlayın." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mx-auto mt-8 max-w-xl glass-strong", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "h-5 w-5" }),
            " Təhlükəsiz ödəniş yoxlaması"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "premium-card", children: "Kart nömrəsi" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "premium-card", value: card, onChange: (e) => setCard(e.target.value.replace(/[^\d ]/g, "").slice(0, 23)), inputMode: "numeric", autoComplete: "cc-number", placeholder: "4111 1111 1111 1111" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "premium-expiry", children: "Bitmə tarixi" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "premium-expiry", value: expiry, onChange: (e) => setExpiry(e.target.value.replace(/[^\d/]/g, "").slice(0, 5)), autoComplete: "cc-exp", placeholder: "AA/İİ" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "premium-cvc", children: "CVC" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "premium-cvc", value: cvc, onChange: (e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 4)), inputMode: "numeric", autoComplete: "cc-csc", placeholder: "CVC" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm ${paymentValid ? "text-primary" : "text-muted-foreground"}`, children: paymentValid ? "Kart formatı təsdiqləndi. Məlumatlar saxlanılmadan yalnız brauzerdə yoxlanılır." : "Real kart formatı, gələcək bitmə tarixi və düzgün CVC daxil edin." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "w-full gap-2", disabled: !paymentValid, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }),
              " Premiumu aktivləşdir"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-24 rounded-3xl glass p-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold tracking-tight md:text-4xl", children: t("faqTitle") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-2xl text-muted-foreground", children: t("faqDescription") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/faq", children: [
          "FAQ səhifəsinə keç ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-24 overflow-hidden rounded-3xl p-10 text-center", style: {
        background: "var(--gradient-hero)",
        color: "white",
        boxShadow: "var(--shadow-elegant)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold md:text-4xl", children: t("ctaTitle") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-xl text-white/85", children: t("ctaDescription") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "secondary", className: "mt-6 gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/auth", children: [
          t("createAccount"),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MarketingFooter, {})
  ] });
}
export {
  Home as component
};
