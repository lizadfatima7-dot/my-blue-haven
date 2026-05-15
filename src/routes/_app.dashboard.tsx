import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, ArrowUpRight, CheckCircle2, Users } from "lucide-react";

export const Route = createFileRoute("/_app/dashboard")({
  component: Dashboard,
});

function Dashboard() {
  const { user } = useAuth();
  const [name, setName] = useState<string>("");

  useEffect(() => {
    if (!user) return;
    supabase.from("profiles").select("display_name").eq("id", user.id).maybeSingle()
      .then(({ data }) => setName(data?.display_name ?? ""));
  }, [user]);

  const stats = [
    { label: "Sessions", value: "12", icon: Activity },
    { label: "Tasks done", value: "48", icon: CheckCircle2 },
    { label: "Connections", value: "7", icon: Users },
  ];

  return (
    <div className="mx-auto max-w-6xl space-y-6 p-6 md:p-10">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-sm text-muted-foreground">Dashboard</p>
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome back{name ? `, ${name}` : ""}
          </h1>
        </div>
        <Button asChild variant="outline" className="gap-2">
          <Link to="/profile">Edit profile <ArrowUpRight className="h-4 w-4" /></Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((s) => (
          <Card key={s.label} style={{ boxShadow: "var(--shadow-card)" }}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{s.label}</CardTitle>
              <s.icon className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{s.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent activity</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="divide-y">
            {[
              "You created your account",
              "Profile initialized",
              "Logged in from a new session",
            ].map((item, i) => (
              <li key={i} className="flex items-center justify-between py-3 text-sm">
                <span>{item}</span>
                <span className="text-muted-foreground">just now</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
