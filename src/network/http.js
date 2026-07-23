import { API_BASE_URL } from "./config/env";
import { getToken } from "./tokenStore";

// Every TrovaBackend endpoint responds with the same envelope:
//   { success: bool, message: string, data: T | null }
// This is the one place that knows that shape, so network/api/* files can
// just deal in plain data and let errors surface as thrown Errors with a
// readable message (ex.message is what ExceptionMiddleware.cs put in
// "message" — e.g. "This application has already been decided.").
export async function apiRequest(path, { method = "GET", body } = {}) {
  const headers = { "Content-Type": "application/json" };
  const token = getToken();
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  // Swallow JSON parse failures (e.g. a 502 with an HTML error page) so we
  // still fall through to a sensible thrown error below instead of an
  // unrelated "Unexpected token <" crash.
  const envelope = await res.json().catch(() => null);

  if (!res.ok || !envelope?.success) {
    throw new Error(envelope?.message || `Request failed (${res.status})`);
  }

  return envelope.data;
}
