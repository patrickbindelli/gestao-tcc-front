import { authOptions } from "@/utils";
import { ApiHeaders } from "api";
import axios, { AxiosRequestConfig } from "axios";
import { getServerSession } from "next-auth";

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1`,
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

const getAuthenticationHeaders = async () => {
  const session = await getServerSession(authOptions);
  const headers: HeadersInit = {
    Authorization: `Bearer ${session?.access || ""}`,
  };

  return headers;
};

export const axiosApiRequest = async <T>(
  method: string,
  url: string,
  data?: T,
  customHeaders?: ApiHeaders
) => {
  const headers = {
    ...customHeaders,
  };

  const config: AxiosRequestConfig = { method, headers, data };

  const response = await axiosInstance<T>(url, config)
    .then((res) => {
      if (res.status === 204) {
        return {} as T;
      }
      return res.data;
    })
    .catch((err) => {
      console.error(err);
      throw new Error(`Erro na requisição}`);
    });

  return response;
};

export const axiosAuthenticatedApiRequest = async <T>(
  method: string,
  url: string,
  data?: T,
  customHeaders?: ApiHeaders
) => {
  const authenticationHeaders = await getAuthenticationHeaders();
  const headers = {
    ...authenticationHeaders,
    ...customHeaders,
  };

  const options = { method, headers, data };

  const response = await axiosInstance<T>(url, options)
    .then((res) => {
      if (res.status === 204) {
        return {} as T;
      }
      return res.data;
    })
    .catch((err) => {
      console.error(err);
      throw new Error(`Erro na requisição`);
    });

  return response;
};
