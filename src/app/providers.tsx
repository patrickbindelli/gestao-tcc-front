"use client";

import Toast from "@/components/Toast";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <SessionProvider>
        <Toast />
        {children}
      </SessionProvider>
    </ThemeProvider>
  );
}
