import api from "@/api";
import { useCallback, useEffect, useState } from "react";

interface Status {
  verified: boolean;
  error: boolean;
}

export default function useVerifyUser(uid: string, token: string) {
  const [status, setStatus] = useState<Status>({
    verified: false,
    error: false,
  });

  const verifyUser = useCallback(async () => {
    await api.authentication
      .activateUser(uid, token)
      .then(() => {
        setStatus((current) => ({ ...current, verified: true }));
      })
      .catch(() => {
        setStatus((current) => ({ ...current, error: true }));
      });
  }, [uid, token]);

  useEffect(() => {
    verifyUser();
  }, [verifyUser]);

  return { isVerified: status.verified, isError: status.error };
}
