import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../providers";
import Header from "@/components/Header";
import Sidebar from "@/components/SidebarComponents/Sidebar";
import { AlertCircle, LayoutDashboard, Link, List, User2 } from "lucide-react";
import { SidebarMenuInterface } from "@/components/SidebarComponents/types";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gestão de TCCs",
  description: "Plataforma de gestão de TCCs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuData: SidebarMenuInterface[] = [
    {
      label: "Menu Principal",
      buttons: [
        {
          label: "Visão Geral",
          icon: <LayoutDashboard size={20} />,
          href: "/",
        },
        {
          label: "Perfil de Usuário",
          icon: <User2 size={20} />,
          href: "/profile",
        },
        {
          label: "Lista de TCCs",
          icon: <List size={20} />,
          href: "/tcc",
        },
        {
          label: "Utilidades",
          icon: <Link size={20} />,
          href: "/utilities",
        },
        {
          label: "Sobre o Sistema",
          icon: <AlertCircle size={20} />,
          href: "/about",
        },
      ],
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-slate-1 items-center">
      <Header />
      <div className="flex py-3 justify-center w-full max-w-screen-2xl">
        <div className="max-w-[300px] w-full">
          <Sidebar data={menuData} />
        </div>
        <div className="flex p-3 flex-1">{children}</div>
      </div>
    </main>
  );
}
