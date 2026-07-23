import { useState, useEffect, useCallback } from "react";
import * as requestsApi from "../network/api/requests";

// Owns the "pending requests" list plus approve/deny side-effects, so
// RequestsScreen only has to worry about rendering, not data-fetching.
export function useRequests({ onApprove } = {}) {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    requestsApi.fetchRequests().then((data) => {
      if (!cancelled) {
        setRequests(data);
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const approve = useCallback(
    async (request) => {
      const { guaranteeId, issuedDate } = await requestsApi.approveRequest(request.id);
      setRequests((prev) => prev.filter((r) => r.id !== request.id));
      onApprove?.({ ...request, id: guaranteeId, issuedDate });
      return guaranteeId;
    },
    [onApprove]
  );

  const deny = useCallback(async (request, reason) => {
    await requestsApi.denyRequest(request.id, reason);
    setRequests((prev) => prev.filter((r) => r.id !== request.id));
  }, []);

  return { requests, loading, approve, deny };
}
