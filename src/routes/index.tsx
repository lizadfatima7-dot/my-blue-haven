import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, LayoutDashboard, Shield, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen" style={{ background: "var(--gradient-soft)" }}>
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="font-semibold tracking-tight">Bluepad</span>
        </Link>
        <nav className="flex items-center gap-2">
          <Button asChild variant="ghost"><Link to="/auth">Sign in</Link></Button>
          <Button asChild><Link to="/auth">Get started</Link></Button>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-24">
        <section className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> New — your personal workspace
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            A calm, blue space to{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-hero)" }}>
              focus and ship
            </span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Sign in, set up your profile, and land on a dashboard built to keep your day clear.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button asChild size="lg" className="gap-2">
              <Link to="/auth">Create account <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/dashboard">Go to dashboard</Link>
            </Button>
          </div>
        </section>

        <section className="mx-auto mt-20 grid max-w-5xl gap-5 md:grid-cols-3">
          {[
            { icon: Shield, title: "Secure auth", text: "Email + password with managed sessions." },
            { icon: LayoutDashboard, title: "Clean dashboard", text: "An at-a-glance home for your work." },
            { icon: Sparkles, title: "Personal profile", text: "Make it yours with display name and bio." },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-xl border bg-card p-6"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
