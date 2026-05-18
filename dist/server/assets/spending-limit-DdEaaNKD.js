const DEFAULT_SPENDING_LIMIT_AZN = 50;
function keyFor(userId) {
  return `voltix-spending-limit-azn-${userId ?? "guest"}`;
}
function getSpendingLimit(userId) {
  if (typeof window === "undefined") return DEFAULT_SPENDING_LIMIT_AZN;
  const stored = window.localStorage.getItem(keyFor(userId));
  const value = stored ? Number(stored) : DEFAULT_SPENDING_LIMIT_AZN;
  return Number.isFinite(value) && value > 0 ? value : DEFAULT_SPENDING_LIMIT_AZN;
}
function setSpendingLimit(userId, limit) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(keyFor(userId), String(limit));
  window.dispatchEvent(new CustomEvent("voltix-spending-limit-updated", { detail: { limit } }));
}
export {
  getSpendingLimit as g,
  setSpendingLimit as s
};
