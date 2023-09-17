"use client";
import useLogin from "@/hooks/client/useLogin";
import Form from "./Form";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function LoginForm() {
  const router = useRouter();
  const { email, password, isLoading, isError, isSuccess, onChange, onSubmit } =
    useLogin();

  useEffect(() => {
    if (isError) {
      toast.error(
        "Não foi possível realizar o login, verifique seu email/senha"
      );
    }

    if (isSuccess) {
      toast.success("Bem vindo");
      router.push("/auth/login");
    }
  }, [isSuccess, isError, router]);

  const config = [
    {
      labelText: "Email address",
      labelId: "email",
      type: "email",
      value: email,
      required: true,
    },
    {
      labelText: "Password",
      labelId: "password",
      type: "password",
      value: password,
      link: {
        linkText: "Forgot password?",
        linkUrl: "/password-reset",
      },
      required: true,
    },
  ];

  return (
    <Form
      config={config}
      isLoading={isLoading}
      btnText="Login"
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}
