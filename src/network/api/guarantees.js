import { apiRequest } from "../http";

export async function fetchActiveGuarantees() {
  // GET /api/bank/guarantees -> ApiResponse<BankGuaranteeDto[]>. Issued
  // (awaiting owner confirmation) + approved (owner-confirmed) guarantees —
  // same shape as mockData's initialActive.
  return apiRequest("/bank/guarantees");
}
