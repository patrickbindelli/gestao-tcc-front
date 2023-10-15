import { Invite, ResearchResponse, ResearchUpdateFormType } from "api";
import {
  fetchAuthenticatedGetRequest,
  fetchAuthenticatedPutRequest,
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

export const getResearchById = async (id: string) => {
  return await fetchAuthenticatedGetRequest<ResearchResponse>(
    `/research/projects/${id}/`
  );
};

export const putResearch = async (params: ResearchUpdateFormType) => {
  return await fetchAuthenticatedPutRequest<ResearchResponse>(
    `/research/projects/`,
    params
  );
};
