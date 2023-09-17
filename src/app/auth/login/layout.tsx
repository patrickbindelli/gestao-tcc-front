import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Plataforma de gestão de TCCs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
