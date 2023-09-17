import { RegisterFormInterface } from "@/components/Forms/types";
import { UserInfo } from "next-auth";
import { JWTResponse, RefreshTokenResponse } from "../../types/api";
import { fetchPost } from "./utils";

/**
 * Realiza uma solicitação de login autenticada, obtendo um token JWT.
 *
 * @param {string} email - O endereço de e-mail do usuário.
 * @param {string} password - A senha do usuário.
 * @returns {Promise<JWTResponse>} - Uma promessa que resolve com o token JWT.
 */
export const login = async (email: string, password: string) => {
  const response = fetchPost<JWTResponse>("/auth/jwt/create/", {
    email,
    password,
  });
  return response;
};

/**
 * Ativa um usuário com base em um identificador de usuário (uid) e token.
 *
 * @param {string} uid - O identificador de usuário (uid) a ser ativado.
 * @param {string} token - O token de ativação do usuário.
 * @returns {Promise<string>} - Uma promessa que resolve com a mensagem de sucesso ou erro.
 * @throws {Error} - Se ocorrer um erro durante a ativação do usuário.
 */
export const activateUser = async (uid: string, token: string) => {
  const body = {
    uid,
    token,
  };

  const response = await fetchPost("/auth/users/activation/", body);
  return response;
};

/**
 * Realiza um pedido de inscrição autenticado, criando um novo usuário.
 *
 * @param {string} email - O endereço de e-mail do novo usuário.
 * @param {string} password - A senha do novo usuário.
 * @returns {Promise<UserInfo>} - Uma promessa que resolve com os detalhes do novo usuário.
 */
export const register = async (form: RegisterFormInterface) => {
  const response = await fetchPost<UserInfo>("/auth/users/", form);
  return response;
};

/**
 * Atualiza um token de acesso com base em um token de atualização (refresh token).
 *
 * @param {string} refresh - O token de atualização (refresh token) para obter um novo token de acesso.
 * @returns {Promise<string>} - Uma promessa que resolve com o novo token de acesso.
 * @throws {Error} - Se ocorrer um erro durante a atualização do token de acesso.
 */
export const refreshAccessToken = async (refresh: string) => {
  const body = {
    refresh,
  };

  const response = await fetchPost<RefreshTokenResponse>(
    "/auth/jwt/refresh/",
    body
  );

  return response.access;
};
