import { ApiHeaders, ApiUser } from "../../../types/api";

import { fetchAuthenticatedGetRequest } from "../utils";

export const getLoggedUser = async (accessToken?: string) => {
  const headers: ApiHeaders = accessToken
    ? { Authorization: `Bearer ${accessToken}` }
    : {};
  return await fetchAuthenticatedGetRequest<ApiUser>("/auth/users/me", headers);
};
