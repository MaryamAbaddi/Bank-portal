import { apiRequest } from "../http";

// This file is the ONLY place that should know the shape of the auth endpoints.
// Everything else (hooks, components) talks to useAuth(), not to fetch() directly.

export async function login({ email, password }) {
  // POST /api/auth/login -> ApiResponse<AuthResponse>, AuthResponse = { token, user }
  // where user = { id, name, email, phone, role } (see UserDto). One seeded
  // bank account exists — role "bank" — see the AddBankReviewWorkflow migration.
  return apiRequest("/auth/login", {
    method: "POST",
    body: { email, password },
  });
}

export async function logout() {
  // No server-side session to invalidate today (JWTs are stateless, and
  // AuthController has no /logout route) — clearing the local token in
  // AuthContext is the whole story. Kept as an async function so the call
  // site doesn't need to change if a real logout endpoint shows up later.
  return true;
}

export async function getSession(token) {
  if (!token) return null;
  // GET /api/auth/me -> ApiResponse<UserDto>. Not called anywhere yet
  // (this app doesn't persist the token across a refresh — see
  // tokenStore.js) but wired up for when session restoration is added.
  try {
    return await apiRequest("/auth/me");
  } catch {
    return null;
  }
}
