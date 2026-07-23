import { apiRequest } from "../http";

export async function fetchRequests() {
  // GET /api/bank/requests -> ApiResponse<BankGuaranteeDto[]>. The pending
  // (pending_bank_review) queue — same shape as mockData's initialRequests.
  return apiRequest("/bank/requests");
}

export async function approveRequest(requestId) {
  // POST /api/guarantees/{applicationCode}/approve -> ApiResponse<BankGuaranteeDto>
  // "requestId" here is the BankGuaranteeDto.id, i.e. the application code
  // (TRV-GT-XXXXX) — the row/drawer never dealt in a separate internal id.
  // Sets status to ISSUED; the owner still has to confirm it before it's
  // truly active (see the two-stage flow in GuaranteesController).
  return apiRequest(`/guarantees/${requestId}/approve`, { method: "POST" });
}

export async function denyRequest(requestId, reason) {
  // POST /api/guarantees/{applicationCode}/reject -> ApiResponse<BankGuaranteeDto>
  // Reason is required server-side (GuaranteeService.RejectByBankAsync
  // throws if blank) — RequestDrawer already won't call this without one.
  return apiRequest(`/guarantees/${requestId}/reject`, {
    method: "POST",
    body: { reason },
  });
}
