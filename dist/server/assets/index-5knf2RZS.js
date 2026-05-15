import { J as jsxRuntimeExports, S as reactExports } from "./server-a5t9Epnm.js";
import { l as createLucideIcon, y as useI18n, a as Button, L as Link, B as Bot } from "./router-CjVt23mV.js";
import { a as MarketingNav, M as MarketingFooter } from "./MarketingFooter-B1IcupiH.js";
import { m as motion } from "./proxy-D-BhDvSC.js";
import { S as Sparkles, a as AreaChart, A as Area } from "./AreaChart-BuzTDvAC.js";
import { p as ResponsiveContainer } from "./CartesianChart-BVFDP17C.js";
import { X as XAxis, T as Tooltip } from "./XAxis-D3ua-Rjg.js";
import { A as Activity } from "./activity-CDQaT4AR.js";
import { Z as Zap } from "./zap-CxVCsrS_.js";
import { L as LeafyGreen } from "./leafy-green-Crgoet24.js";
import { C as ChartColumn } from "./chart-column-_p9m6kou.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./dropdown-menu-DpuOH9sD.js";
import "./index-BpW9eZ3u.js";
import "./index-Bq5GC4r3.js";
import "./Combination-DM3OcOpe.js";
import "./index-VMIVWFOz.js";
import "./chevron-down-BWTbW6T6.js";
import "./getRadiusAndStrokeWidthFromDot-Dx3wh8u6.js";
import "./index-CUJQoGNE.js";
const __iconNode$2 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$2);
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
  const faqs = t("faqs").map((item) => {
    const [question, answer] = item.split("|");
    return {
      question,
      answer
    };
  });
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold tracking-tight md:text-4xl", children: t("faqTitle") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: t("faqDescription") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-10 grid max-w-4xl gap-4", children: faqs.map((faq) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border bg-card p-5 hover-lift", style: {
          backgroundImage: "var(--gradient-card)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: faq.question }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: faq.answer })
        ] }, faq.question)) })
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
