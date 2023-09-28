import { UserInfo } from "next-auth";
import { Invite, Project } from "../../types/api";
import { fetchAuthenticatedGet } from "./utils";
import { UsefulFile, UsefulLink } from "../../types/types";

/**
 * Obtém as informações do usuário logado.
 *
 * @param {string} access - (Opcional) O token de acesso do usuário logado.
 * @returns {Promise<UserInfo>} - Uma promessa que resolve com as informações do usuário logado.
 */
export const getLoggedUser = async (access?: string) => {
  const headers: HeadersInit = access
    ? { Authorization: `Bearer ${access}` }
    : {};
  return await fetchAuthenticatedGet<UserInfo>("/auth/users/me", headers);
};

/**
 * Obtém os projetos de pesquisa associados ao usuário.
 *
 * @returns {Promise<Project[]>} - Uma promessa que resolve com uma lista de projetos de pesquisa.
 */
export const getApprovedResearchs = async () => {
  return await fetchAuthenticatedGet<Project[]>("/research/projects/approved/");
};

/**
 * Obtém os projetos de pesquisa associados ao usuário.
 *
 * @returns {Promise<Project[]>} - Uma promessa que resolve com uma lista de projetos de pesquisa.
 */
export const getResearchs = async () => {
  return await fetchAuthenticatedGet<Project[]>("/research/projects/");
};

export const getUsefulFiles = async () => {
  return await fetchAuthenticatedGet<UsefulFile[]>("/utilities/files/");
};

export const getUsefulLinks = async () => {
  return await fetchAuthenticatedGet<UsefulLink[]>("/utilities/links/");
};

/**
 * Obtém os projetos de pesquisa associados ao usuário.
 *
 * @returns {Promise<Project[]>} - Uma promessa que resolve com uma lista de projetos de pesquisa.
 */
export const getOnGoingResearchs = async () => {
  return await fetchAuthenticatedGet<Project[]>("/research/projects/ongoing/");
};

/**
 * Obtém os convites associados ao usuário.
 *
 * @returns {Promise<Invite[]>} - Uma promessa que resolve com uma lista de convites.
 */
export const getUserInvites = async () => {
  return await fetchAuthenticatedGet<Invite[]>("/research/invites/");
};
