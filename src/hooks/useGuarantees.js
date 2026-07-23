import { useState, useEffect, useCallback } from "react";
import * as guaranteesApi from "../network/api/guarantees";

export function useGuarantees() {
  const [active, setActive] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    guaranteesApi.fetchActiveGuarantees().then((data) => {
      if (!cancelled) {
        setActive(data);
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // Called by useRequests' onApprove callback so a freshly issued
  // guarantee shows up immediately without a re-fetch.
  const addIssued = useCallback((guarantee) => {
    setActive((prev) => [guarantee, ...prev]);
  }, []);

  return { active, loading, addIssued };
}
