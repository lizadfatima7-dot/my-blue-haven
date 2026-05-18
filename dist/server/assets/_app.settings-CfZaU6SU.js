import { S as reactExports, J as jsxRuntimeExports } from "./server-Buj_o9pi.js";
import { u as useAuth, C as useTheme, s as supabase, I as Input, a as Button, t as toast } from "./router-C6fCM03v.js";
import { C as Card, c as CardHeader, d as CardTitle, b as CardDescription, a as CardContent } from "./card-Bt6oCjW9.js";
import { L as Label } from "./label-BSfmMjMU.js";
import { T as Textarea } from "./textarea-CKHuRK19.js";
import { S as Switch } from "./switch-DbD9Uzk3.js";
import { g as getSpendingLimit, s as setSpendingLimit } from "./spending-limit-DdEaaNKD.js";
import { g as getSubscriberCode, n as normalizeSubscriberCode, s as setSubscriberCode } from "./subscriber-code-DG4W-rLh.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./index-DD10tKAZ.js";
import "./index-B-gGQc-S.js";
function Settings() {
  const {
    user
  } = useAuth();
  const {
    theme,
    toggle
  } = useTheme();
  const [displayName, setDisplayName] = reactExports.useState("");
  const [bio, setBio] = reactExports.useState("");
  const [subscriberCode, setSubscriberCodeState] = reactExports.useState("");
  const [busy, setBusy] = reactExports.useState(false);
  const [limit, setLimit] = reactExports.useState(50);
  const [notifs, setNotifs] = reactExports.useState({
    usageAlerts: true,
    weeklyReport: true,
    tips: false
  });
  reactExports.useEffect(() => {
    if (!user) return;
    setLimit(getSpendingLimit(user.id));
    setSubscriberCodeState(getSubscriberCode(user.id, user.user_metadata?.electricity_subscriber_code));
    supabase.from("profiles").select("display_name, bio").eq("id", user.id).maybeSingle().then(({
      data
    }) => {
      setDisplayName(data?.display_name ?? "");
      setBio(data?.bio ?? "");
    });
  }, [user]);
  const saveProfile = async (e) => {
    e.preventDefault();
    if (!user) return;
    setBusy(true);
    const {
      error
    } = await supabase.from("profiles").upsert({
      id: user.id,
      display_name: displayName,
      bio
    });
    setBusy(false);
    if (error) return toast.error(error.message);
    setSubscriberCode(user.id, subscriberCode);
    toast.success("Profil yeniləndi");
  };
  const changePassword = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const password = String(fd.get("password"));
    if (password.length < 8) return toast.error("Parol ən azı 8 simvol olmalıdır");
    const {
      error
    } = await supabase.auth.updateUser({
      password
    });
    if (error) return toast.error(error.message);
    toast.success("Parol yeniləndi");
    e.currentTarget.reset();
  };
  const saveLimit = (e) => {
    e.preventDefault();
    const nextLimit = Math.max(1, Number(limit) || 50);
    setLimit(nextLimit);
    setSpendingLimit(user?.id, nextLimit);
    toast.success(`Aylıq xərc limiti ${nextLimit} AZN olaraq yadda saxlanıldı`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl space-y-6 p-4 md:p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Parametrlər" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "Tətbiq seçimləri" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Profil" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Profil məlumatlarınızı və görünən adınızı yeniləyin." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: saveProfile, className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "E-poçt" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", value: user?.email ?? "", disabled: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "dn", children: "Görünən ad" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "dn", value: displayName, onChange: (e) => setDisplayName(e.target.value), maxLength: 60 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "subscriber-code", children: "Elektrik abonent kodu" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "subscriber-code", value: subscriberCode, onChange: (e) => setSubscriberCodeState(normalizeSubscriberCode(e.target.value)), maxLength: 32, placeholder: "AZE-12345678" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Abonent kodu fərdi borc, sərfiyyat və elektrik analitikası ilə əlaqələndirmə üçün istifadə olunur." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "bio", children: "Bioqrafiya" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "bio", rows: 3, value: bio, onChange: (e) => setBio(e.target.value), maxLength: 500 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: busy, children: busy ? "Yadda saxlanılır…" : "Profili yadda saxla" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Parolu dəyiş" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: changePassword, className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "np", children: "Yeni parol" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "np", name: "password", type: "password", required: true, minLength: 8, maxLength: 72 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "secondary", children: "Parolu yenilə" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Enerji xərc limiti" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Aylıq elektrik xərci bu məbləği keçdikdə sistem avtomatik xəbərdarlıq göstərəcək." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: saveLimit, className: "flex flex-col gap-3 sm:flex-row sm:items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "spending-limit", children: "Aylıq limit (AZN)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "spending-limit", type: "number", min: 1, step: 1, value: limit, onChange: (event) => setLimit(Number(event.target.value)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", children: "Limiti yadda saxla" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Bildirişlər" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-4", children: [{
        key: "usageAlerts",
        label: "Enerji istifadəsi və xərc limiti xəbərdarlıqları",
        desc: "İstifadə qəfil artdıqda və ya aylıq xərc limiti keçildikdə bildiriş alın."
      }, {
        key: "weeklyReport",
        label: "Həftəlik xülasə",
        desc: "Hər bazar ertəsi qısa enerji icmalı alın."
      }, {
        key: "tips",
        label: "Ağıllı tövsiyələr və analizlər",
        desc: "Fərdiləşdirilmiş qənaət məsləhətləri."
      }].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-lg border p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: n.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: n.desc })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: notifs[n.key], onCheckedChange: (v) => setNotifs((s) => ({
          ...s,
          [n.key]: v
        })) })
      ] }, n.key)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Görünüş" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-lg border p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "Qaranlıq rejim" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "İşıqlı və qaranlıq mövzular arasında keçid edin." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: theme === "dark", onCheckedChange: toggle })
      ] }) })
    ] })
  ] });
}
export {
  Settings as component
};
