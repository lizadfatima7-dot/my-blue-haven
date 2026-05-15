import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2, AirVent, Lightbulb, Refrigerator, WashingMachine, Tv, Cpu } from "lucide-react";
import { toast } from "sonner";
import { type Device, dailyKwh } from "@/lib/energy";

export const Route = createFileRoute("/_app/devices")({ component: Devices });

const TYPES = [
  { value: "ac", label: "Air Conditioner", icon: AirVent, watts: 1500 },
  { value: "fridge", label: "Refrigerator", icon: Refrigerator, watts: 200 },
  { value: "washer", label: "Washing Machine", icon: WashingMachine, watts: 800 },
  { value: "lights", label: "Lights", icon: Lightbulb, watts: 60 },
  { value: "tv", label: "TV", icon: Tv, watts: 120 },
  { value: "other", label: "Other", icon: Cpu, watts: 100 },
];

function iconFor(type: string) {
  return TYPES.find((t) => t.value === type)?.icon ?? Cpu;
}

function Devices() {
  const { user } = useAuth();
  const [devices, setDevices] = useState<Device[]>([]);
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);

  const load = async () => {
    if (!user) return;
    const { data } = await supabase.from("devices").select("*").eq("user_id", user.id).order("created_at");
    setDevices((data ?? []) as Device[]);
  };
  useEffect(() => { load(); }, [user]);

  const addDevice = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) return;
    const fd = new FormData(e.currentTarget);
    const type = String(fd.get("type"));
    const preset = TYPES.find((t) => t.value === type);
    setBusy(true);
    const { error } = await supabase.from("devices").insert({
      user_id: user.id,
      name: String(fd.get("name")).trim().slice(0, 60),
      type,
      watts: Number(fd.get("watts")) || preset?.watts || 100,
      daily_hours: Number(fd.get("hours")) || 4,
      status: true,
    });
    setBusy(false);
    if (error) return toast.error(error.message);
    toast.success("Device added");
    setOpen(false);
    load();
  };

  const toggle = async (d: Device) => {
    const { error } = await supabase.from("devices").update({ status: !d.status }).eq("id", d.id);
    if (error) return toast.error(error.message);
    setDevices((arr) => arr.map((x) => (x.id === d.id ? { ...x, status: !x.status } : x)));
  };

  const remove = async (id: string) => {
    const { error } = await supabase.from("devices").delete().eq("id", id);
    if (error) return toast.error(error.message);
    setDevices((arr) => arr.filter((d) => d.id !== id));
    toast.success("Device removed");
  };

  return (
    <div className="mx-auto max-w-7xl space-y-6 p-4 md:p-8">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-sm text-muted-foreground">Devices</p>
          <h1 className="text-3xl font-bold tracking-tight">Manage devices</h1>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild><Button className="gap-2"><Plus className="h-4 w-4" /> Add device</Button></DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>Add a device</DialogTitle></DialogHeader>
            <form onSubmit={addDevice} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required maxLength={60} placeholder="Living room AC" />
              </div>
              <div className="space-y-2">
                <Label>Type</Label>
                <Select name="type" defaultValue="ac">
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {TYPES.map((t) => <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="watts">Watts</Label>
                  <Input id="watts" name="watts" type="number" min={1} max={10000} defaultValue={1500} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hours">Hours / day</Label>
                  <Input id="hours" name="hours" type="number" step="0.5" min={0} max={24} defaultValue={4} />
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={busy}>{busy ? "Adding…" : "Add device"}</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {devices.length === 0 ? (
        <Card><CardContent className="py-16 text-center text-muted-foreground">No devices yet. Add your first device to start tracking.</CardContent></Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {devices.map((d) => {
            const Icon = iconFor(d.type);
            return (
              <Card key={d.id} className="hover-lift">
                <CardHeader className="flex-row items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg text-primary-foreground" style={{ background: d.status ? "var(--gradient-blue)" : "color-mix(in oklab, var(--muted-foreground) 30%, transparent)" }}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-base">{d.name}</CardTitle>
                      <Badge variant={d.status ? "default" : "secondary"} className="mt-1">
                        {d.status ? "Active" : "Off"}
                      </Badge>
                    </div>
                  </div>
                  <Switch checked={d.status} onCheckedChange={() => toggle(d)} />
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Power</span><span className="font-mono">{d.watts} W</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Daily use</span><span className="font-mono">{d.daily_hours} h</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Energy / day</span><span className="font-mono">{dailyKwh(d).toFixed(2)} kWh</span></div>
                  <Button variant="ghost" size="sm" onClick={() => remove(d.id)} className="mt-2 w-full gap-2 text-destructive hover:text-destructive">
                    <Trash2 className="h-4 w-4" /> Remove
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
