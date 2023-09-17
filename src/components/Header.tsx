import { getServerSession } from "next-auth";
import SignOutButton from "./SignOutButton";
import ThemeButton from "./ThemeButton";
import { authOptions } from "@/utils";

export default async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex min-w-full items-center justify-center p-3 bg-slate-3 h-12 prose prose-slate">
      <div className="flex items-center justify-between w-full max-w-screen-2xl">
        <div className="flex gap-3 text-xl items-center ">
          Sistema de Gestão de TCCs
        </div>
        <div className="flex gap-3 items-center text-base">
          <div className="flex gap-1">
            <span>{session?.user.first_name}</span>
            <div className="flex gap-[2px]">
              <span>(</span>
              <SignOutButton />
              <span>)</span>
            </div>
          </div>

          <ThemeButton />
        </div>
      </div>
    </div>
  );
}
