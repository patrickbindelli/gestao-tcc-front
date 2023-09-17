import { UserInfo } from "next-auth";
import { Invite, Project } from "../../types/api";
import { fetchAuthenticatedGet } from "./utils";

/**
 * Obtém as informações do usuário logado.
 *
 * @param {string} access - (Opcional) O token de acesso do usuário logado.
 * @returns {Promise<UserInfo>} - Uma promessa que resolve com as informações do usuário logado.
 */
export const getLoggedUser = async (access?: string) => {
  return await fetchAuthenticatedGet<UserInfo>("/auth/users/me", {
    Authorization: `Bearer ${access || ""}`,
  });
};

/**
 * Obtém os projetos de pesquisa associados ao usuário.
 *
 * @returns {Promise<Project[]>} - Uma promessa que resolve com uma lista de projetos de pesquisa.
 */
export const getUserResearchs = async () => {
  return await fetchAuthenticatedGet<Project[]>("/research/projects/");
};

/**
 * Obtém os convites associados ao usuário.
 *
 * @returns {Promise<Invite[]>} - Uma promessa que resolve com uma lista de convites.
 */
export const getUserInvites = async () => {
  return await fetchAuthenticatedGet<Invite[]>("/research/invites/");
};
