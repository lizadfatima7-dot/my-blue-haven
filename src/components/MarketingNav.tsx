import { Link, useRouterState } from "@tanstack/react-router";
import { useTheme } from "@/lib/theme";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Zap } from "lucide-react";

export function MarketingNav() {
  const path = useRouterState({ select: (r) => r.location.pathname });
  const { theme, toggle } = useTheme();
  const items = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl glass px-4 py-2.5">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl text-primary-foreground" style={{ background: "var(--gradient-blue)" }}>
            <Zap className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight">Voltly</span>
        </Link>
        <nav className="hidden gap-1 md:flex">
          {items.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${path === i.to ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              {i.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme">
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex"><Link to="/auth">Sign in</Link></Button>
          <Button asChild size="sm"><Link to="/auth">Get started</Link></Button>
        </div>
      </div>
    </header>
  );
}
