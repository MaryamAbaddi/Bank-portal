import { API_BASE_URL, MOCK_NETWORK_DELAY_MS } from "../config/env";
import { initialActive } from "../../constants/mockData";

function delay(value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), MOCK_NETWORK_DELAY_MS));
}

export async function fetchActiveGuarantees() {
  // const res = await fetch(`${API_BASE_URL}/guarantees`, { headers: authHeaders() });
  // return res.json();
  return delay(initialActive);
}
