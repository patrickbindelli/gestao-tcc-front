import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface UserInfo {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
  }

  interface User {
    userInfo: UserInfo;
    access: string;
    refresh: string;
    expires_in: number;
  }

  interface Session {
    user: UserInfo;
    access: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    access: string;
    expires_in: number;
    refresh: string;
    userInfo: UserInfo;
    sub: number;
    iat: number;
    exp: number;
    jti: string;
    error?: string;
  }
}
