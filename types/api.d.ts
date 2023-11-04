import { type } from "os";
import { Research } from "./types";

declare module "api" {
  export interface ApiResponse<T> {
    count: number;
    next: number;
    previous: number;
    results: T[];
  }

  export interface JWTResponse {
    refresh: string;
    access: string;
  }

  export interface ApiHeaders {
    [key: string]: string;
  }

  export interface RefreshTokenResponse {
    access: string;
  }

  interface User {
    id: number;
    name: string;
  }

  interface Responsible {
    id: number;
    name: string;
  }

  export type ResearchResponse = Research;

  export interface ResearchUpdateFormType {
    title?: FormDataEntryValue;
    description?: FormDataEntryValue;
    file?: FormDataEntryValue;
  }

  export interface Invite {
    id: number;
    type: string;
    advisor: User;
    advised: User;
    created_at: string;
    accepted: boolean;
    limit_date: string;
  }

  export interface ApiUser {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
  }
}
