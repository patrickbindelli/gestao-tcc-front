import { Invite, ResearchResponse, ResearchUpdateFormType } from "api";
import {
  fetchAuthenticatedGetRequest,
  fetchAuthenticatedPatchRequest,
  fetchAuthenticatedPostRequest,
} from "../utils";

export const getApprovedResearchs = async () => {
  return await fetchAuthenticatedGetRequest<ResearchResponse[]>(
    "/research/projects/approved/"
  );
};

export const getResearchs = async () => {
  return await fetchAuthenticatedGetRequest<ResearchResponse[]>(
    "/research/projects/"
  );
};

export const getOnGoingResearchs = async () => {
  return await fetchAuthenticatedGetRequest<ResearchResponse[]>(
    "/research/projects/ongoing/"
  );
};

export const getUserInvites = async () => {
  return await fetchAuthenticatedGetRequest<Invite[]>("/research/invites/");
};

export const getUserInviteById = async (id: string) => {
  return await fetchAuthenticatedGetRequest<Invite>(`/research/invites/${id}`);
};

export const getResearchById = async (id: string) => {
  return await fetchAuthenticatedGetRequest<ResearchResponse>(
    `/research/projects/${id}/`
  );
};

export const patchResearch = async (id: string, params: FormData) => {
  return await fetchAuthenticatedPatchRequest<ResearchResponse>(
    `/research/projects/${id}/`,
    params
  );
};

export const acceptInvite = async (id: string) => {
  return await fetchAuthenticatedPostRequest(
    `/research/invites/${id}/accept/`,
    {
      "Content-Type": "application/json",
    }
  );
};
