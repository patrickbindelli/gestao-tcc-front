import { ApiHeaders } from "api";
import { axiosApiRequest, axiosAuthenticatedApiRequest } from "./axios";

export const fetchGetRequest = async (
  url: string,
  customHeaders?: ApiHeaders
) => {
  return axiosApiRequest("GET", url, null, customHeaders);
};

export const fetchAuthenticatedGetRequest = async <T = void>(
  url: string,
  customHeaders?: ApiHeaders
) => {
  return axiosAuthenticatedApiRequest<T>("GET", url, undefined, customHeaders);
};

export const fetchPostRequest = async <T>(
  url: string,
  body: any,
  customHeaders?: ApiHeaders
) => {
  return axiosApiRequest("POST", url, body, customHeaders);
};

export const fetchAuthenticatedPostRequest = async <T = void>(
  url: string,
  body: any,
  customHeaders?: ApiHeaders
) => {
  return axiosAuthenticatedApiRequest("POST", url, body, customHeaders);
};

export const fetchPutRequest = async <T = void>(
  url: string,
  body: any,
  customHeaders?: ApiHeaders
) => {
  return axiosApiRequest("PUT", url, body, customHeaders);
};

export const fetchAuthenticatedPutRequest = async <T = void>(
  url: string,
  body: any,
  customHeaders?: ApiHeaders
) => {
  return axiosAuthenticatedApiRequest("PUT", url, body, customHeaders);
};

export const fetchAuthenticatedPatchRequest = async <T = void>(
  url: string,
  body: any,
  customHeaders?: ApiHeaders
) => {
  return axiosAuthenticatedApiRequest("PATCH", url, body, customHeaders);
};
