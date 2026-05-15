import { S as reactExports, J as jsxRuntimeExports } from "./server-a5t9Epnm.js";
import { u as useAuth, s as supabase } from "./router-CjVt23mV.js";
import { C as Card, c as CardHeader, d as CardTitle, a as CardContent } from "./card-nATy2DeF.js";
import { c as generateHourly, g as generateDaily, e as generateMonthly, b as deviceBreakdown } from "./energy-DCMlEQOJ.js";
import { p as ResponsiveContainer } from "./CartesianChart-BVFDP17C.js";
import { b as LineChart, a as Line, L as Legend } from "./LineChart-D-Xj5j7M.js";
import { C as CartesianGrid, Y as YAxis, a as BarChart, B as Bar, c as PieChart, P as Pie, b as Cell } from "./PieChart-CRCIIEP-.js";
import { X as XAxis, T as Tooltip } from "./XAxis-D3ua-Rjg.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./index-CUJQoGNE.js";
import "./getRadiusAndStrokeWidthFromDot-Dx3wh8u6.js";
const COLORS = ["oklch(0.55 0.21 255)", "oklch(0.72 0.2 145)", "oklch(0.7 0.16 200)", "oklch(0.78 0.16 75)", "oklch(0.62 0.2 305)"];
function Analytics() {
  const {
    user
  } = useAuth();
  const [devices, setDevices] = reactExports.useState([]);
  reactExports.useEffect(() => {
    if (!user) return;
    supabase.from("devices").select("*").eq("user_id", user.id).then(({
      data
    }) => setDevices(data ?? []));
  }, [user]);
  const hourly = reactExports.useMemo(() => generateHourly(devices), [devices]);
  const daily = reactExports.useMemo(() => generateDaily(devices), [devices]);
  const monthly = reactExports.useMemo(() => generateMonthly(devices), [devices]);
  const breakdown = reactExports.useMemo(() => deviceBreakdown(devices), [devices]);
  const peakHour = hourly.reduce((max, h) => h.usage > max.usage ? h : max, hourly[0]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl space-y-6 p-4 md:p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Analitika" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "Ətraflı enerji analizləri" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-muted-foreground", children: [
        "Bugünkü pik istifadə: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: peakHour?.hour }),
        " — ",
        peakHour?.usage,
        " kWh"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Gündəlik istifadə — son 30 gün" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "h-[280px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LineChart, { data: daily, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "currentColor", opacity: 0.1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "date", tick: {
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(Line, { type: "monotone", dataKey: "kwh", stroke: "oklch(0.55 0.21 255)", strokeWidth: 2.5, dot: false })
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "kwh", radius: [6, 6, 0, 0], fill: "oklch(0.55 0.21 255)" })
        ] }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Cihazlar üzrə enerji sərfiyyatı" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "h-[320px]", children: breakdown.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full items-center justify-center text-sm text-muted-foreground", children: "Hələ cihaz əlavə edilməyib." }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Pie, { data: breakdown, dataKey: "value", nameKey: "name", innerRadius: 70, outerRadius: 120, paddingAngle: 2, children: breakdown.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: COLORS[i % COLORS.length] }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: 12
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { wrapperStyle: {
          fontSize: 12
        } })
      ] }) }) })
    ] })
  ] });
}
export {
  Analytics as component
};
