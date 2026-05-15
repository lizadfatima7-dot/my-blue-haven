import { createFileRoute, Link } from "@tanstack/react-router";
import { MarketingNav } from "@/components/MarketingNav";
import { MarketingFooter } from "@/components/MarketingFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Code2, Cpu, Database, GitBranch, Palette, Server } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Voltly" },
      { name: "description", content: "Meet the Voltly team and the technology powering smart energy management." },
    ],
  }),
  component: About,
});

const team = [
  { name: "Fatimə Əlizadə", role: "Team Leader" },
  { name: "Memmedova Sevda", role: "Engineer" },
  { name: "Quluzade Ramazan", role: "Engineer" },
  { name: "Salmanova Fidan", role: "Engineer" },
];

const tech = [
  { icon: Code2, label: "React" },
  { icon: GitBranch, label: "TanStack Start" },
  { icon: Palette, label: "Tailwind CSS" },
  { icon: Cpu, label: "Framer Motion" },
  { icon: Server, label: "Node / Edge" },
  { icon: Database, label: "PostgreSQL" },
];

function About() {
  return (
    <div className="min-h-screen" style={{ background: "var(--gradient-soft)" }}>
      <MarketingNav />
      <main className="mx-auto max-w-6xl px-6 pt-16">
        <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Built to make energy <span className="text-gradient">visible</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Voltly's mission is simple: help every household understand and reduce its electricity consumption with delightful, intelligent tools.
          </p>
        </motion.section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold">Our team</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              >
                <Card className="hover-lift">
                  <CardHeader className="items-center text-center">
                    <Avatar className="h-16 w-16">
                      <AvatarFallback className="text-lg" style={{ background: "var(--gradient-blue)", color: "white" }}>
                        {m.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle className="mt-3 text-base">{m.name}</CardTitle>
                    <Badge variant="secondary">{m.role}</Badge>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold">Technologies</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-3 lg:grid-cols-6">
            {tech.map((t) => (
              <div key={t.label} className="flex items-center gap-3 rounded-xl glass p-4">
                <t.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{t.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl glass p-10 text-center">
          <h3 className="text-2xl font-bold">Ready to take control?</h3>
          <p className="mt-2 text-muted-foreground">Create your account and explore the dashboard.</p>
          <Link to="/auth" className="mt-5 inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover-lift">
            Get started
          </Link>
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}
