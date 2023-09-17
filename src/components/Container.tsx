import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3 bg-slate-3 w-full text-slate-12 p-3 border-slate-6 border rounded-sm">
      {children}
    </div>
  );
}
