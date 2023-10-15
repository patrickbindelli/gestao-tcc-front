import { UsefulFile, UsefulLink } from "../../../types/types";
import { fetchAuthenticatedGetRequest } from "../utils";

export const getUsefulFiles = async () => {
  return await fetchAuthenticatedGetRequest<UsefulFile[]>("/utilities/files/");
};

export const getUsefulLinks = async () => {
  return await fetchAuthenticatedGetRequest<UsefulLink[]>("/utilities/links/");
};
