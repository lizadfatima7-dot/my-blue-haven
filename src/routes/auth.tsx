import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Eye, EyeOff, Zap } from "lucide-react";
import { z } from "zod";

export const Route = createFileRoute("/auth")({
  component: AuthPage,
});

function passwordScore(pw: string) {
  let s = 0;
  if (pw.length >= 8) s++;
  if (/[A-Z]/.test(pw)) s++;
  if (/[0-9]/.test(pw)) s++;
  if (/[^A-Za-z0-9]/.test(pw)) s++;
  if (pw.length >= 12) s++;
  return Math.min(s, 4);
}

const STRENGTH_LABEL = ["Too weak", "Weak", "Okay", "Strong", "Excellent"];
const STRENGTH_COLOR = ["bg-destructive", "bg-destructive", "bg-amber-500", "bg-accent", "bg-accent"];

function AuthPage() {
  const navigate = useNavigate();
  const { session, loading } = useAuth();
  const [busy, setBusy] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const [pw, setPw] = useState("");
  const [forgotOpen, setForgotOpen] = useState(false);

  useEffect(() => {
    if (!loading && session) navigate({ to: "/dashboard" });
  }, [session, loading, navigate]);

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email"));
    const password = String(fd.get("password"));
    setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) return toast.error(error.message);
    toast.success("Welcome back!");
    navigate({ to: "/dashboard" });
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const schema = z.object({
      name: z.string().trim().min(1).max(60),
      email: z.string().trim().email().max(255),
      password: z.string().min(8).max(72),
    });
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      password: fd.get("password"),
    });
    if (!parsed.success) return toast.error(parsed.error.issues[0].message);
    setBusy(true);
    const { error } = await supabase.auth.signUp({
      email: parsed.data.email,
      password: parsed.data.password,
      options: {
        emailRedirectTo: `${window.location.origin}/dashboard`,
        data: { display_name: parsed.data.name },
      },
    });
    setBusy(false);
    if (error) return toast.error(error.message);
    toast.success("Account created!");
    navigate({ to: "/profile" });
  };

  const handleForgot = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email"));
    setBusy(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    setBusy(false);
    if (error) return toast.error(error.message);
    toast.success("Check your email for the reset link.");
    setForgotOpen(false);
  };

  const score = passwordScore(pw);

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10" style={{ background: "var(--gradient-soft)" }}>
      <div className="w-full max-w-md">
        <Link to="/" className="mb-6 flex items-center justify-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl text-primary-foreground" style={{ background: "var(--gradient-blue)" }}>
            <Zap className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold">Voltly</span>
        </Link>
        <Card className="glass-strong" style={{ boxShadow: "var(--shadow-elegant)" }}>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">{forgotOpen ? "Reset password" : "Welcome"}</CardTitle>
            <CardDescription>
              {forgotOpen ? "We'll email you a reset link" : "Sign in or create your account to continue"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {forgotOpen ? (
              <form onSubmit={handleForgot} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fp-email">Email</Label>
                  <Input id="fp-email" name="email" type="email" required />
                </div>
                <Button type="submit" className="w-full" disabled={busy}>
                  {busy ? "Sending…" : "Send reset link"}
                </Button>
                <Button type="button" variant="ghost" className="w-full" onClick={() => setForgotOpen(false)}>
                  Back to sign in
                </Button>
              </form>
            ) : (
              <Tabs defaultValue="signin">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="signin">Sign in</TabsTrigger>
                  <TabsTrigger value="signup">Sign up</TabsTrigger>
                </TabsList>

                <TabsContent value="signin">
                  <form onSubmit={handleSignIn} className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="si-email">Email</Label>
                      <Input id="si-email" name="email" type="email" required autoComplete="email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="si-password">Password</Label>
                      <div className="relative">
                        <Input id="si-password" name="password" type={showPw ? "text" : "password"} required autoComplete="current-password" />
                        <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground">
                          {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <label className="flex items-center gap-2">
                        <Checkbox name="remember" defaultChecked /> <span>Remember me</span>
                      </label>
                      <button type="button" onClick={() => setForgotOpen(true)} className="text-primary hover:underline">
                        Forgot password?
                      </button>
                    </div>
                    <Button type="submit" className="w-full" disabled={busy}>
                      {busy ? "Signing in…" : "Sign in"}
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="signup">
                  <form onSubmit={handleSignUp} className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="su-name">Display name</Label>
                      <Input id="su-name" name="name" type="text" required maxLength={60} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="su-email">Email</Label>
                      <Input id="su-email" name="email" type="email" required maxLength={255} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="su-password">Password</Label>
                      <Input
                        id="su-password" name="password" type="password" required minLength={8} maxLength={72}
                        value={pw} onChange={(e) => setPw(e.target.value)} autoComplete="new-password"
                      />
                      {pw && (
                        <div className="space-y-1">
                          <div className="flex gap-1">
                            {[0, 1, 2, 3].map((i) => (
                              <div
                                key={i}
                                className={`h-1.5 flex-1 rounded-full ${i < score ? STRENGTH_COLOR[score] : "bg-muted"}`}
                              />
                            ))}
                          </div>
                          <p className="text-xs text-muted-foreground">{STRENGTH_LABEL[score]}</p>
                        </div>
                      )}
                    </div>
                    <Button type="submit" className="w-full" disabled={busy || score < 2}>
                      {busy ? "Creating account…" : "Create account"}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
