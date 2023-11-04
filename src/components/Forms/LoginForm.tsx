"use client";
import useForm from "@/hooks/useForm";
import { FormConfig } from "forms";
import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";
import BaseForm from "./BaseForm";

interface LoginFormInterface {
  email: string;
  password: string;
}

export default function LoginForm() {
  const handleLogin = async (formData: FormData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/",
    }).then((response) => {
      if (response?.error) {
        throw new Error();
      }
    });
  };

  const router = useRouter();
  const { formState, status, onChange, onSubmitAction } =
    useForm<LoginFormInterface>({ email: "", password: "" }, handleLogin);

  useEffect(() => {
    if (!status.loading) {
      if (status.success) {
        toast.success("Bem vindo");
        return router.push("/");
      }

      if (status.error) {
        toast.error(
          "Não foi possível realizar o login, verifique seu email/senha"
        );
      }
    }
  }, [status, router]);

  const formConfig: FormConfig = [
    {
      label: "Email address",
      id: "email",
      type: "email",
      value: formState.email,
      required: true,
    },
    {
      label: "Password",
      id: "password",
      type: "password",
      value: formState.password,
      // link: {
      //   linkText: "Forgot password?",
      //   linkUrl: "/password-reset",
      // },
      required: true,
    },
  ];

  return (
    <BaseForm
      config={formConfig}
      isLoading={status.loading}
      btnText="Login"
      onChange={onChange}
      onSubmit={onSubmitAction}
    />
  );
}
