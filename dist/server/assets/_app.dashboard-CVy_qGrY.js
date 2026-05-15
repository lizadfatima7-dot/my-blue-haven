import { S as reactExports, J as jsxRuntimeExports } from "./server-a5t9Epnm.js";
import { l as createLucideIcon, u as useAuth, s as supabase, B as Bot } from "./router-CjVt23mV.js";
import { C as Card, c as CardHeader, d as CardTitle, a as CardContent } from "./card-nATy2DeF.js";
import { B as Badge } from "./badge-CBe0HSHt.js";
import { c as generateHourly, g as generateDaily, e as generateMonthly, f as getEffectiveDevices, b as deviceBreakdown, a as aiRecommendations, i as monthlyKwh, h as monthlyCost, m as monthlyCO2 } from "./energy-DCMlEQOJ.js";
import { Z as Zap } from "./zap-CxVCsrS_.js";
import { T as TrendingDown } from "./trending-down-QhMh7qvl.js";
import { L as LeafyGreen } from "./leafy-green-Crgoet24.js";
import { A as Activity } from "./activity-CDQaT4AR.js";
import { m as motion } from "./proxy-D-BhDvSC.js";
import { p as ResponsiveContainer } from "./CartesianChart-BVFDP17C.js";
import { a as AreaChart, A as Area, S as Sparkles } from "./AreaChart-BuzTDvAC.js";
import { C as CartesianGrid, Y as YAxis, c as PieChart, P as Pie, b as Cell, a as BarChart, B as Bar } from "./PieChart-CRCIIEP-.js";
import { X as XAxis, T as Tooltip } from "./XAxis-D3ua-Rjg.js";
import { L as Legend, b as LineChart, a as Line } from "./LineChart-D-Xj5j7M.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./index-CUJQoGNE.js";
import "./getRadiusAndStrokeWidthFromDot-Dx3wh8u6.js";
const __iconNode = [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
];
const DollarSign = createLucideIcon("dollar-sign", __iconNode);
const COLORS = ["oklch(0.55 0.21 255)", "oklch(0.72 0.2 145)", "oklch(0.7 0.16 200)", "oklch(0.78 0.16 75)", "oklch(0.62 0.2 305)"];
function Dashboard() {
  const {
    user
  } = useAuth();
  const [devices, setDevices] = reactExports.useState([]);
  const [name, setName] = reactExports.useState("");
  const [live, setLive] = reactExports.useState({
    voltage: 220,
    current: 0,
    watts: 0
  });
  reactExports.useEffect(() => {
    if (!user) return;
    supabase.from("profiles").select("display_name").eq("id", user.id).maybeSingle().then(({
      data
    }) => setName(data?.display_name ?? ""));
    supabase.from("devices").select("*").eq("user_id", user.id).then(({
      data
    }) => setDevices(data ?? []));
  }, [user]);
  const hourly = reactExports.useMemo(() => generateHourly(devices), [devices]);
  const daily = reactExports.useMemo(() => generateDaily(devices), [devices]);
  const monthly = reactExports.useMemo(() => generateMonthly(devices), [devices]);
  const effectiveDevices = reactExports.useMemo(() => getEffectiveDevices(devices), [devices]);
  const breakdown = reactExports.useMemo(() => deviceBreakdown(devices), [devices]);
  const recs = reactExports.useMemo(() => aiRecommendations(devices), [devices]);
  const activeDeviceCount = breakdown.length;
  const totalKwh = monthlyKwh(devices);
  const cost = monthlyCost(devices);
  const co2 = monthlyCO2(devices);
  const saved = Math.max(12, Math.min(35, 18 + effectiveDevices.filter((d) => !d.status).length * 4));
  reactExports.useEffect(() => {
    const watts = effectiveDevices.filter((d) => d.status).reduce((s, d) => s + d.watts, 0);
    const id = setInterval(() => {
      setLive({
        voltage: 218 + Math.round(Math.random() * 8),
        current: Number((watts / 220 * (0.9 + Math.random() * 0.2)).toFixed(2)),
        watts: Math.round(watts * (0.9 + Math.random() * 0.2))
      });
    }, 1500);
    return () => clearInterval(id);
  }, [effectiveDevices]);
  const stats = [{
    label: "Aylıq enerji",
    value: `${totalKwh.toFixed(0)} kWh`,
    icon: Zap,
    grad: "var(--gradient-blue)"
  }, {
    label: "Aylıq xərc",
    value: `${cost.toFixed(2)} AZN`,
    icon: DollarSign,
    grad: "var(--gradient-amber)"
  }, {
    label: "Qənaət göstəricisi",
    value: `${saved}%`,
    icon: TrendingDown,
    grad: "var(--gradient-green)"
  }, {
    label: "CO₂ azalması",
    value: `${(co2 * (saved / 100)).toFixed(1)} kg`,
    icon: LeafyGreen,
    grad: "var(--gradient-aqua)"
  }, {
    label: "Aktiv cihazlar",
    value: `${activeDeviceCount}`,
    icon: Activity,
    grad: "var(--gradient-blue)"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl space-y-6 p-4 md:p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Dashboard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-bold tracking-tight md:text-4xl", children: [
          "Xoş gəlmisiniz",
          name ? `, ${name}` : ""
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-flex h-2 w-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full bg-accent live-dot" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-block h-2 w-2 rounded-full bg-accent" })
        ] }),
        "Canlı"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      opacity: 0,
      y: 10
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      delay: i * 0.06
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden hover-lift", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-medium uppercase tracking-wide text-muted-foreground", children: s.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-lg text-primary-foreground", style: {
          background: s.grad
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold", children: s.value }) })
    ] }) }, s.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Bugünkü saatlıq enerji istifadəsi" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "h-[280px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: hourly, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "dGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.55 0.21 255)", stopOpacity: 0.6 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.72 0.2 145)", stopOpacity: 0.05 })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "currentColor", opacity: 0.1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "hour", tick: {
            fontSize: 11
          }, interval: 3 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { tick: {
            fontSize: 11
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: 12
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "usage", stroke: "oklch(0.55 0.21 255)", strokeWidth: 2.5, fill: "url(#dGrad)" })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-4 w-4" }),
          " Canlı monitorinq"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-4", children: [{
          label: "Gərginlik",
          value: `${live.voltage} V`
        }, {
          label: "Cərəyan",
          value: `${live.current} A`
        }, {
          label: "Güc",
          value: `${live.watts} W`
        }, {
          label: "Aktiv cihazlar",
          value: `${effectiveDevices.filter((d) => d.status).length}`
        }].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-lg border p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: m.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-lg font-semibold", children: m.value })
        ] }, m.label)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Cihazlar üzrə enerji bölgüsü" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "h-[280px]", children: breakdown.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full items-center justify-center text-sm text-muted-foreground", children: "Bölgünü görmək üçün cihaz əlavə edin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pie, { data: breakdown, dataKey: "value", nameKey: "name", innerRadius: 50, outerRadius: 95, paddingAngle: 2, children: breakdown.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: COLORS[i % COLORS.length] }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: 12
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { wrapperStyle: {
            fontSize: 12
          } })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Aylıq müqayisə" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "h-[280px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: monthly, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "currentColor", opacity: 0.1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "month", tick: {
            fontSize: 11
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { tick: {
            fontSize: 11
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: 12
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "kwh", radius: [6, 6, 0, 0], children: monthly.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: m.isCurrent ? "oklch(0.72 0.2 145)" : "oklch(0.55 0.21 255)" }, i)) })
        ] }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-4 w-4 text-accent" }),
        " AI tövsiyələri"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "grid gap-3 md:grid-cols-2", children: recs.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        x: -10
      }, animate: {
        opacity: 1,
        x: 0
      }, transition: {
        delay: i * 0.08
      }, className: "rounded-xl border p-4 hover-lift", style: {
        backgroundImage: "var(--gradient-card)"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mt-0.5 h-4 w-4 text-accent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: r.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: r.detail }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mt-2", children: r.impact })
        ] })
      ] }) }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "30 günlük trend" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "h-[260px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LineChart, { data: daily, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "currentColor", opacity: 0.1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "date", tick: {
          fontSize: 11
        }, interval: 4 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { tick: {
          fontSize: 11
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: 12
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Line, { type: "monotone", dataKey: "kwh", stroke: "oklch(0.55 0.21 255)", strokeWidth: 2.5, dot: false }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Line, { type: "monotone", dataKey: "cost", stroke: "oklch(0.72 0.2 145)", strokeWidth: 2.5, dot: false })
      ] }) }) })
    ] })
  ] });
}
export {
  Dashboard as component
};
