import { authOptions } from "@/utils";
import { getServerSession } from "next-auth";

/**
 * A URL base para a API, composta a partir da variável de ambiente BACKEND_URL.
 */
const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1`;

/**
 * Cabeçalhos padrão para requisições, incluindo o tipo de conteúdo JSON.
 */
const defaultHeaders: HeadersInit = {
  "Content-Type": "application/json",
};

/**
 * Obtém cabeçalhos de autenticação com base na sessão do usuário.
 *
 * @returns {Promise<HeadersInit>} - Uma promessa que resolve com os cabeçalhos de autenticação.
 * @throws {Error} - Se ocorrer um erro ao obter os cabeçalhos de autenticação.
 */
const getAuthenticationHeaders = async () => {
  // Obtém a sessão do usuário a partir de next-auth.
  const session = await getServerSession(authOptions);

  // Cria cabeçalhos de autenticação com o token de acesso (Bearer token) da sessão, se disponível.
  const headers: HeadersInit = {
    Authorization: `Bearer ${session?.access || ""}`,
  };

  return headers;
};

/**
 * Realiza uma requisição GET para o endpoint especificado.
 *
 * @param {string} apiRoute - O caminho do endpoint da API.
 * @param {HeadersInit} customHeaders - (Opcional) Cabeçalhos personalizados a serem adicionados à requisição.
 * @returns {Promise<T>} - Uma promessa que resolve com os dados da resposta da requisição.
 * @throws {Error} - Se a requisição não for bem-sucedida ou se ocorrer algum erro.
 */
export const fetchGet = async <T = void>(
  apiRoute: string,
  customHeaders?: HeadersInit
) => {
  try {
    const response = await fetch(`${baseUrl}${apiRoute}`, {
      method: "GET",
      headers: { ...defaultHeaders, ...customHeaders },
    });

    // lk

    const data: T = await response.json();
    return data;
  } catch (err) {
    throw new Error(`Erro na requisição: ${err}`);
  }
};

/**
 * Realiza uma requisição GET autenticada para o endpoint especificado.
 *
 * @param {string} apiRoute - O caminho do endpoint da API.
 * @param {HeadersInit} customHeaders - (Opcional) Cabeçalhos personalizados a serem adicionados à requisição.
 * @returns {Promise<T>} - Uma promessa que resolve com os dados da resposta da requisição autenticada.
 * @throws {Error} - Se a requisição não for bem-sucedida ou se ocorrer algum erro.
 */
export const fetchAuthenticatedGet = async <T = void>(
  apiRoute: string,
  customHeaders?: HeadersInit
) => {
  const authenticationHeaders = await getAuthenticationHeaders();

  const headers: HeadersInit = {
    ...authenticationHeaders,
    ...customHeaders,
  };

  return await fetchGet<T>(apiRoute, headers);
};

/**
 * Realiza uma requisição POST para o endpoint especificado com o corpo especificado.
 *
 * @param {string} apiRoute - O caminho do endpoint da API.
 * @param {object} body - O corpo da requisição a ser enviado como JSON.
 * @param {HeadersInit} customHeaders - Cabeçalhos personalizados a serem adicionados à requisição.
 * @returns {Promise<T>} - Uma promessa que resolve com os dados da resposta da requisição.
 * @throws {Error} - Se a requisição não for bem-sucedida ou se ocorrer algum erro.
 */
export const fetchPost = async <T = void>(
  apiRoute: string,
  body: object,
  customHeaders?: HeadersInit
) => {
  console.log(`${baseUrl}${apiRoute}`);

  try {
    const response = await fetch(`${baseUrl}${apiRoute}`, {
      method: "POST",
      headers: { ...defaultHeaders, ...customHeaders },
      body: JSON.stringify(body),
    });

    console.log(apiRoute);

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const data: T = await response.json();
    return data;
  } catch (err) {
    throw new Error(`Erro na requisição: ${err}`);
  }
};

/**
 * Realiza uma requisição POST autenticada para o endpoint especificado com o corpo especificado.
 *
 * @param {string} apiRoute - O caminho do endpoint da API.
 * @param {object} body - O corpo da requisição a ser enviado como JSON.
 * @returns {Promise<T>} - Uma promessa que resolve com os dados da resposta da requisição autenticada.
 * @throws {Error} - Se a requisição não for bem-sucedida ou se ocorrer algum erro.
 */
export const fetchAuthenticatedPost = async <T = void>(
  apiRoute: string,
  body: object
) => {
  const authenticationHeaders = await getAuthenticationHeaders();
  return await fetchPost<T>(apiRoute, body, authenticationHeaders);
};
