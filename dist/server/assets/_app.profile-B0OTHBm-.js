import { S as reactExports, J as jsxRuntimeExports } from "./server-a5t9Epnm.js";
import { u as useAuth, s as supabase, I as Input, a as Button, t as toast } from "./router-CjVt23mV.js";
import { C as Card, c as CardHeader, d as CardTitle, b as CardDescription, a as CardContent } from "./card-nATy2DeF.js";
import { L as Label } from "./label-BzXAHH3a.js";
import { T as Textarea } from "./textarea-BJ1-Hu5l.js";
import { A as Avatar, a as AvatarFallback } from "./avatar-IX142QzQ.js";
import { g as getSubscriberCode, n as normalizeSubscriberCode, s as setSubscriberCode } from "./subscriber-code-UYD-8bxQ.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./index-CUJQoGNE.js";
function Profile() {
  const {
    user
  } = useAuth();
  const [displayName, setDisplayName] = reactExports.useState("");
  const [bio, setBio] = reactExports.useState("");
  const [subscriberCode, setSubscriberCodeState] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(true);
  const [saving, setSaving] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!user) return;
    supabase.from("profiles").select("display_name, bio").eq("id", user.id).maybeSingle().then(({
      data
    }) => {
      setDisplayName(data?.display_name ?? "");
      setBio(data?.bio ?? "");
      setSubscriberCodeState(getSubscriberCode(user.id, user.user_metadata?.electricity_subscriber_code));
      setLoading(false);
    });
  }, [user]);
  const handleSave = async (e) => {
    e.preventDefault();
    if (!user) return;
    setSaving(true);
    const {
      error
    } = await supabase.from("profiles").upsert({
      id: user.id,
      display_name: displayName,
      bio
    });
    setSaving(false);
    if (error) return toast.error(error.message);
    setSubscriberCode(user.id, subscriberCode);
    toast.success("Profil yadda saxlanıldı");
  };
  const initial = (displayName || user?.email || "?").charAt(0).toUpperCase();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl space-y-6 p-6 md:p-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Hesab" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "Profiliniz" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { style: {
      boxShadow: "var(--shadow-card)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "h-16 w-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "bg-primary text-primary-foreground text-xl", children: initial }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: displayName || "Adsız istifadəçi" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: user?.email })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSave, className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "name", children: "Görünən ad" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "name", value: displayName, onChange: (e) => setDisplayName(e.target.value), disabled: loading })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "subscriber-code", children: "Elektrik abonent kodu" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "subscriber-code", value: subscriberCode, onChange: (e) => setSubscriberCodeState(normalizeSubscriberCode(e.target.value)), disabled: loading, maxLength: 32, placeholder: "AZE-12345678" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Bu kod fərdi enerji monitorinqi, borc məlumatı və istifadə analitikası üçün istifadə olunur." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "bio", children: "Bioqrafiya" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "bio", rows: 4, placeholder: "Özünüz haqqında qısa məlumat yazın", value: bio, onChange: (e) => setBio(e.target.value), disabled: loading })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: saving || loading, children: saving ? "Yadda saxlanılır…" : "Dəyişiklikləri yadda saxla" })
      ] }) })
    ] })
  ] });
}
export {
  Profile as component
};
