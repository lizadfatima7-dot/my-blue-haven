import { S as reactExports, J as jsxRuntimeExports } from "./server-a5t9Epnm.js";
import { A as useNavigate, I as Input, a as Button, t as toast, s as supabase } from "./router-CjVt23mV.js";
import { L as Label } from "./label-BzXAHH3a.js";
import { C as Card, c as CardHeader, d as CardTitle, b as CardDescription, a as CardContent } from "./card-nATy2DeF.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function ResetPassword() {
  const navigate = useNavigate();
  const [busy, setBusy] = reactExports.useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const password = String(fd.get("password"));
    if (password.length < 8) return toast.error("Parol ən azı 8 simvol olmalıdır");
    setBusy(true);
    const {
      error
    } = await supabase.auth.updateUser({
      password
    });
    setBusy(false);
    if (error) return toast.error(error.message);
    toast.success("Parol yeniləndi");
    navigate({
      to: "/dashboard"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center px-4", style: {
    background: "var(--gradient-soft)"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "w-full max-w-md glass-strong", style: {
    boxShadow: "var(--shadow-elegant)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Yeni parol təyin edin" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Daha əvvəl istifadə etmədiyiniz güclü parol seçin." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "password", children: "Yeni parol" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "password", name: "password", type: "password", required: true, minLength: 8, maxLength: 72 })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full", disabled: busy, children: busy ? "Yenilənir…" : "Parolu yenilə" })
    ] }) })
  ] }) });
}
export {
  ResetPassword as component
};
