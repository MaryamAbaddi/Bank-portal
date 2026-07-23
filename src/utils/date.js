// Pure helper functions — no React, no state, easy to unit test on their own.

// Hardcoded "today" so the demo data's expiry logic is stable/deterministic.
// Swap this for `new Date()` once real dates come from the backend.
export const TODAY = new Date("2026-07-23");

export function isExpired(expiryDate) {
  return new Date(expiryDate) < TODAY;
}
