"use client";
import React, { useEffect } from "react";
import Form from "./Form";
import useRegister from "@/hooks/client/useRegister";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { RegisterFormInterface } from "./types";
import { UserInfo } from "next-auth";

interface Props {
  action: (form: RegisterFormInterface) => Promise<UserInfo>;
}

export default function RegisterForm({ action }: Props) {
  const router = useRouter();
  const {
    first_name,
    last_name,
    email,
    password,
    re_password,
    isLoading,
    isError,
    isSuccess,
    onChange,
    onSubmit,
  } = useRegister(action); // Passado por escadinha pro meu hook que controla os states do formulario

  useEffect(() => {
    if (isError) {
      toast.error("Erro ao cadastrar usuário");
    }

    if (isSuccess) {
      toast.success("Cheque o email para verificar seu usuário");
      router.push("/auth/login");
    }
  }, [isSuccess, isError, router]);

  const config = [
    {
      labelText: "First name",
      labelId: "first_name",
      type: "text",
      value: first_name,
      required: true,
    },
    {
      labelText: "Last name",
      labelId: "last_name",
      type: "text",
      value: last_name,
      required: true,
    },
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
      required: true,
    },
    {
      labelText: "Confirm password",
      labelId: "re_password",
      type: "password",
      value: re_password,
      required: true,
    },
  ];

  return (
    <Form
      config={config}
      isLoading={isLoading}
      btnText="Cadastrar"
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}
