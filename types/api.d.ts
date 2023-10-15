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

  interface Author {
    id: number;
    name: string;
  }

  interface Responsible {
    id: number;
    name: string;
  }

  export type ResearchResponse = Research;

  export interface ResearchUpdateFormType {
    title?: string;
    description?: string;
    file?: File;
  }

  export interface Invite {
    id: number;
    subject: string;
    sender_name: string;
    receiver_name: string;
    created_at: string;
    status: string;
    limit_date: string;
  }

  export interface ApiUser {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
  }
}
