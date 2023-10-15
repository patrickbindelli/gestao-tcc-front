import { JWT } from "next-auth/jwt";
import api from "@/api";
import getExpiresIn from "./getExpiresIn";

async function refreshAccessToken(token: JWT) {
  console.log("Refreshing token");

  try {
    const refreshedToken = await api.authentication.refreshAccessToken(
      token.refresh
    );

    console.log("RefreshedToken: ", refreshedToken);

    const newToken: JWT = {
      ...token,
      access: refreshedToken,
      expires_in: getExpiresIn(5),
    };

    return newToken;
  } catch (error) {
    console.log("Error refreshing token: ", error);

    return {
      ...token,
      error: "RefreshAccessTokenError",
    } as JWT;
  }
}

export default refreshAccessToken;
