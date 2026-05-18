function keyFor(userId) {
  return `voltix-electricity-subscriber-code-${userId ?? "guest"}`;
}
function normalizeSubscriberCode(value) {
  return value.trim().replace(/\s+/g, "").toUpperCase();
}
function getSubscriberCode(userId, metadataCode) {
  if (typeof metadataCode === "string" && metadataCode.trim()) return normalizeSubscriberCode(metadataCode);
  if (typeof window === "undefined") return "";
  return window.localStorage.getItem(keyFor(userId)) ?? "";
}
function setSubscriberCode(userId, code) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(keyFor(userId), normalizeSubscriberCode(code));
  window.dispatchEvent(new CustomEvent("voltix-subscriber-code-updated", { detail: { code } }));
}
export {
  getSubscriberCode as g,
  normalizeSubscriberCode as n,
  setSubscriberCode as s
};
