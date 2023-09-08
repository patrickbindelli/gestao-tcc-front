"use client";
import ThemeButton from "./ThemeButton";

export default function Header() {
  return (
    <div className="flex min-w-full items-center justify-center p-3 bg-slate-3 h-12 prose prose-slate">
      <div className="flex items-center justify-between w-full max-w-screen-2xl">
        <div className="flex gap-3 text-xl items-center ">
          Sistema de Gestão de TCCs
        </div>
        <div className="flex gap-3 items-center text-base">
          <div className="flex gap-1">
            <span>Fulano de Tal</span>
            <div className="flex gap-[2px]">
              <span>(</span>
              <button className="underline-offset-4 hover:underline hover:text-indigo-9">
                sair
              </button>
              <span>)</span>
            </div>
          </div>

          <ThemeButton />
        </div>
      </div>
    </div>
  );
}
