// Deterministic mock data generators for energy analytics
export type Device = {
  id: string;
  user_id: string;
  name: string;
  type: string;
  watts: number;
  daily_hours: number;
  status: boolean;
  created_at: string;
  updated_at: string;
};

const COST_PER_KWH = 0.18; // USD
const CO2_PER_KWH = 0.42; // kg CO2

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export function dailyKwh(d: Device) {
  return (d.watts * d.daily_hours) / 1000;
}

export function totalDailyKwh(devices: Device[]) {
  return devices.filter((d) => d.status).reduce((sum, d) => sum + dailyKwh(d), 0);
}

export function monthlyKwh(devices: Device[]) {
  return totalDailyKwh(devices) * 30;
}

export function monthlyCost(devices: Device[]) {
  return monthlyKwh(devices) * COST_PER_KWH;
}

export function monthlyCO2(devices: Device[]) {
  return monthlyKwh(devices) * CO2_PER_KWH;
}

export function generateHourly(devices: Device[]) {
  const rand = seededRandom(devices.length * 7 + 11);
  const base = totalDailyKwh(devices) / 24;
  return Array.from({ length: 24 }, (_, h) => {
    // Peak around 8am and 7-9pm
    const peak = Math.exp(-Math.pow(h - 8, 2) / 12) + 1.4 * Math.exp(-Math.pow(h - 20, 2) / 8);
    const noise = 0.8 + rand() * 0.4;
    return {
      hour: `${String(h).padStart(2, "0")}:00`,
      usage: Number((base * (0.6 + peak) * noise).toFixed(2)),
      voltage: Math.round(218 + rand() * 8),
    };
  });
}

export function generateDaily(devices: Device[], days = 30) {
  const rand = seededRandom(devices.length * 13 + 3);
  const avg = totalDailyKwh(devices);
  return Array.from({ length: days }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (days - 1 - i));
    const variance = 0.7 + rand() * 0.6;
    return {
      date: date.toLocaleDateString(undefined, { month: "short", day: "numeric" }),
      kwh: Number((avg * variance).toFixed(2)),
      cost: Number((avg * variance * COST_PER_KWH).toFixed(2)),
    };
  });
}

export function generateMonthly(devices: Device[]) {
  const rand = seededRandom(devices.length * 5 + 2);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const base = monthlyKwh(devices);
  const now = new Date().getMonth();
  return months.map((m, i) => ({
    month: m,
    kwh: Number((base * (0.75 + rand() * 0.5)).toFixed(0)),
    isCurrent: i === now,
  }));
}

export function deviceBreakdown(devices: Device[]) {
  return devices
    .filter((d) => d.status)
    .map((d) => ({ name: d.name, value: Number((dailyKwh(d) * 30).toFixed(1)), type: d.type }))
    .sort((a, b) => b.value - a.value);
}

export function aiRecommendations(devices: Device[]) {
  const recs: { title: string; detail: string; impact: string }[] = [];
  const breakdown = deviceBreakdown(devices);
  const top = breakdown[0];
  if (top) {
    recs.push({
      title: `Your ${top.name} is the biggest energy consumer`,
      detail: `It accounts for ~${top.value} kWh per month. Consider reducing usage during peak hours.`,
      impact: "Save up to 15%",
    });
  }
  const heavy = devices.find((d) => /AC|Air|Heater/i.test(d.name + d.type) && d.daily_hours > 6);
  if (heavy) {
    recs.push({
      title: `${heavy.name} runs too long at night`,
      detail: "Switch to a programmable schedule to limit nighttime operation.",
      impact: "Save ~12%",
    });
  }
  const idle = devices.filter((d) => !d.status).length;
  if (idle === 0 && devices.length > 0) {
    recs.push({
      title: "All devices are active",
      detail: "Turn off devices you aren't using to reduce standby drain.",
      impact: "Save ~8%",
    });
  }
  if (devices.length === 0) {
    recs.push({
      title: "Add your first device",
      detail: "Track usage by adding your appliances in the Devices tab.",
      impact: "Get started",
    });
  }
  recs.push({
    title: "Run laundry between 10pm – 6am",
    detail: "Off-peak hours typically cost up to 30% less per kWh.",
    impact: "Save ~10%",
  });
  return recs.slice(0, 4);
}

export const PRICING = { COST_PER_KWH, CO2_PER_KWH };
