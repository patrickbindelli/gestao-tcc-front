import api from "@/api";
import { NextAuthOptions, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import getExpiresIn from "./getExpiresIn";
import refreshAccessToken from "./refreshTokenMessage";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (credentials) {
          const auth = await api.authentication.login(
            credentials.email,
            credentials.password
          );

          if (auth) {
            try {
              const userInfo = await api.users.getLoggedUser(auth.access);

              const user: User = {
                id: "1",
                userInfo,
                access: auth.access,
                refresh: auth.refresh,
                expires_in: getExpiresIn(5),
              };

              return user;
            } catch (err) {
              console.error(err);
              return null;
            }
          }
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Se o usuário estiver autenticado, atualize o token com os dados do usuário
        const firstToken: JWT = {
          ...token,
          ...user,
        };

        return firstToken;
      }

      if (Date.now() >= token.expires_in) {
        const newToken = await refreshAccessToken(token);
        return newToken;
      }

      return token;
    },

    async session({ session, token }) {
      session.access = token.access;
      session.user = token.userInfo;
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/register",
  },
};

export default authOptions;
