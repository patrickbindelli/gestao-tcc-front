import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/register",
  },
});

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|auth|activation).*)",
  ],
};
