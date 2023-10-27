"use client";
import useForm from "@/hooks/useForm";
import { FormConfig } from "forms";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
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
      redirect: true,
      callbackUrl: "/",
    });
  };

  const router = useRouter();
  const { formState, status, onChange, onSubmitAction } =
    useForm<LoginFormInterface>({ email: "", password: "" }, handleLogin);

  useEffect(() => {
    if (status.error) {
      toast.error(
        "Não foi possível realizar o login, verifique seu email/senha"
      );
    }

    if (status.success) {
      toast.success("Bem vindo");
      router.push("/auth/login");
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
