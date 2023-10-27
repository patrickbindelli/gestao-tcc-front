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

export default function PasswordForm({ action }: Props) {
  const router = useRouter();
  const { formState, status, onChange, onSubmitAction } = useForm(
    { current_password: "", new_password: "" },
    action
  );

  useEffect(() => {
    if (status.error) {
      toast.error("Não foi possível atualizar sua senha");
    }

    if (status.success) {
      toast.success("Senha atualizada com sucesso");
      router.refresh();
    }
  }, [status, router]);

  const formConfig: FormConfig = [
    {
      label: "Senha Atual",
      id: "current_password",
      type: "password",
      value: formState.current_password,
      required: true,
    },
    {
      label: "Nova Senha",
      id: "new_password",
      type: "password",
      value: formState.new_password,
      required: true,
    },
  ];

  return (
    <BaseForm
      config={formConfig}
      isLoading={status.loading}
      btnText="Salvar"
      onChange={onChange}
      onSubmit={onSubmitAction}
    />
  );
}
