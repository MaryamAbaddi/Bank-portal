import { API_BASE_URL, MOCK_NETWORK_DELAY_MS } from "../config/env";
import { initialRequests } from "../../constants/mockData";

function delay(value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), MOCK_NETWORK_DELAY_MS));
}

export async function fetchRequests() {
  // const res = await fetch(`${API_BASE_URL}/requests`, { headers: authHeaders() });
  // return res.json();
  return delay(initialRequests);
}

export async function approveRequest(requestId) {
  // const res = await fetch(`${API_BASE_URL}/requests/${requestId}/approve`, {
  //   method: "POST",
  //   headers: authHeaders(),
  // });
  // return res.json(); // { guaranteeId, issuedDate }
  return delay({
    guaranteeId: `TRV-GT-${Math.floor(90000 + Math.random() * 9000)}`,
    issuedDate: "July 23, 2026",
  });
}

export async function denyRequest(requestId, reason) {
  // const res = await fetch(`${API_BASE_URL}/requests/${requestId}/deny`, {
  //   method: "POST",
  //   headers: { ...authHeaders(), "Content-Type": "application/json" },
  //   body: JSON.stringify({ reason }),
  // });
  // return res.json();
  return delay({ ok: true });
}
