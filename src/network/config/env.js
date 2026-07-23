// Central place for anything environment-dependent.
// In Vite, env vars must be prefixed VITE_ and read via import.meta.env.

export const API_BASE_URL =
  import.meta.env?.VITE_API_BASE_URL || "https://api.trova-bank.example/v1";

export const MOCK_NETWORK_DELAY_MS = 350; // remove once a real API is wired up
