"use client";
import useForm from "@/hooks/useForm";
import { FormConfig } from "forms";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";
import BaseForm from "./BaseForm";

interface Props {
  action: (formData: FormData) => Promise<void>;
}

interface RegisterForm {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  re_password: string;
}

export default function RegisterForm({ action }: Props) {
  const initialData: RegisterForm = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_password: "",
  };

  const router = useRouter();
  const { formState, status, onChange, onSubmitAction } = useForm(
    initialData,
    action
  ); // Passado por escadinha pro meu hook que controla os states do formulario

  useEffect(() => {
    if (status.error) {
      toast.error("Erro ao cadastrar usuário");
    }

    if (status.success) {
      toast.success("Cheque o email para verificar seu usuário");
      router.push("/auth/login");
    }
  }, [status, router]);

  const formConfig: FormConfig = [
    {
      label: "First name",
      id: "first_name",
      type: "text",
      value: formState.first_name,
      required: true,
    },
    {
      label: "Last name",
      id: "last_name",
      type: "text",
      value: formState.last_name,
      required: true,
    },
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
      required: true,
    },
    {
      label: "Confirm password",
      id: "re_password",
      type: "password",
      value: formState.re_password,
      required: true,
    },
  ];

  return (
    <BaseForm
      config={formConfig}
      isLoading={status.loading}
      btnText="Cadastrar"
      onChange={onChange}
      onSubmit={onSubmitAction}
    />
  );
}
