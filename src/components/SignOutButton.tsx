"use client";
import { signOut } from "next-auth/react";
import React from "react";

export default function SignOutButton() {
  const handleSignOut = () => {
    signOut();
  };
  return (
    <button
      className="underline-offset-4 hover:underline hover:text-indigo-9"
      onClick={handleSignOut}
    >
      sair
    </button>
  );
}
