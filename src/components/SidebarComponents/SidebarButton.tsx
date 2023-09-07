"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarButtonInterface } from "./types";

export default function SidebarButton({
  label,
  href,
  icon,
}: SidebarButtonInterface) {
  const pathname = usePathname();

  return (
    <Link
      className={`flex items-center gap-3 py-2 px-3 hover:bg-slate-4 cursor-pointer no-underline
      ${pathname == href ? "text-indigo-9" : ""}`}
      href={href}
    >
      {icon}
      {label}
    </Link>
  );
}
