import { API_BASE_URL, MOCK_NETWORK_DELAY_MS } from "../config/env";

// This file is the ONLY place that should know the shape of the auth endpoints.
// Everything else (hooks, components) talks to useAuth(), not to fetch() directly.

function delay(value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), MOCK_NETWORK_DELAY_MS));
}

export async function login({ username, password }) {
  // --- Replace this block with a real call once the backend is ready ---
  // const res = await fetch(`${API_BASE_URL}/auth/login`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ username, password }),
  // });
  // if (!res.ok) throw new Error("Invalid credentials");
  // return res.json(); // { token, user }

  if (!username.trim() || !password.trim()) {
    throw new Error("Username and password are required.");
  }
  return delay({
    token: "mock-token-" + Date.now(),
    user: { name: username, role: "Bank Officer" },
  });
}

export async function logout() {
  // await fetch(`${API_BASE_URL}/auth/logout`, { method: "POST" });
  return delay(true);
}

export async function getSession(token) {
  // const res = await fetch(`${API_BASE_URL}/auth/session`, {
  //   headers: { Authorization: `Bearer ${token}` },
  // });
  // if (!res.ok) return null;
  // return res.json();
  return token ? delay({ name: "Bank Officer", role: "Bank Officer" }) : null;
}
