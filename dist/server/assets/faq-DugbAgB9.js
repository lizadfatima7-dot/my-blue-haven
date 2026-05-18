import { J as jsxRuntimeExports } from "./server-Buj_o9pi.js";
import { a as MarketingNav, M as MarketingFooter } from "./MarketingFooter-De3l-95q.js";
import { y as useI18n } from "./router-C6fCM03v.js";
import { m as motion } from "./proxy-C0w3UIRv.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./dropdown-menu-CT0bDAum.js";
import "./index-DD10tKAZ.js";
import "./index-L34_ugnB.js";
import "./Combination-D9enl8gd.js";
import "./index-lSBdZxie.js";
import "./zap-BeezbeaP.js";
import "./chevron-down-YoI1RY_O.js";
function FAQ() {
  const {
    t
  } = useI18n();
  const faqs = t("faqs").map((item) => {
    const [question, answer] = item.split("|");
    return {
      question,
      answer
    };
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", style: {
    background: "var(--gradient-soft)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MarketingNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-4xl px-6 pt-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.section, { initial: {
        opacity: 0,
        y: 16
      }, animate: {
        opacity: 1,
        y: 0
      }, className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold tracking-tight md:text-6xl", children: t("faqTitle") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-2xl text-muted-foreground", children: t("faqDescription") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mt-10 grid gap-4", children: faqs.map((faq, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { initial: {
        opacity: 0,
        y: 14
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: index * 0.04
      }, className: "rounded-2xl border bg-card p-5 hover-lift", style: {
        backgroundImage: "var(--gradient-card)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold", children: faq.question }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-6 text-muted-foreground", children: faq.answer })
      ] }, faq.question)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MarketingFooter, {})
  ] });
}
export {
  FAQ as component
};
