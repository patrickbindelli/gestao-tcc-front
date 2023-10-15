import { RegisterFormInterface } from "@/components/Forms/types";
import { UserInfo } from "next-auth";
import { JWTResponse, RefreshTokenResponse } from "../../../types/api";

import {
  ChangePasswordFormInterface,
  ProfileFormInterface,
} from "../../../types/forms";
import {
  fetchAuthenticatedPostRequest,
  fetchAuthenticatedPutRequest,
  fetchPostRequest,
} from "../utils";

export const login = async (email: string, password: string) => {
  const response = fetchPostRequest<JWTResponse>("/auth/jwt/create/", {
    email,
    password,
  });
  return response;
};

export const activateUser = async (uid: string, token: string) => {
  const body = {
    uid,
    token,
  };

  const response = await fetchPostRequest("/auth/users/activation/", body);
  return response;
};

export const register = async (form: RegisterFormInterface) => {
  const response = await fetchPostRequest<UserInfo>("/auth/users/", form);
  return response;
};

export const refreshAccessToken = async (refresh: string) => {
  const body = {
    refresh,
  };

  const response = await fetchPostRequest<RefreshTokenResponse>(
    "/auth/jwt/refresh/",
    body
  );

  return response?.access;
};

export const updateUser = (formData: ProfileFormInterface) => {
  const response = fetchAuthenticatedPutRequest<ProfileFormInterface>(
    `/auth/users/me/`,
    formData
  );
  return response;
};

export const changePassword = (formData: ChangePasswordFormInterface) => {
  const response = fetchAuthenticatedPostRequest<void>(
    `/auth/users/set_password/`,
    formData
  );
  return response;
};
