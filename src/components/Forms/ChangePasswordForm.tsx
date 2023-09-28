"use client";
import useChangePassword from "@/hooks/client/useChangePassword";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Form from "./Form";
import { ChangePasswordFormInterface } from "../../../types/forms";

interface Props {
  action: (form: ChangePasswordFormInterface) => Promise<void>;
}

export default function ChangePasswordForm({ action }: Props) {
  const router = useRouter();
  const {
    current_password,
    new_password,
    isLoading,
    isError,
    isSuccess,
    onChange,
    onSubmit,
  } = useChangePassword(action);

  useEffect(() => {
    if (isError) {
      toast.error("Não foi possível atualizar sua senha");
    }

    if (isSuccess) {
      toast.success("Senha atualizada com sucesso");
      router.refresh();
    }
  }, [isSuccess, isError, router]);

  const config = [
    {
      labelText: "Senha Atual",
      labelId: "current_password",
      type: "password",
      value: current_password,
      required: true,
    },
    {
      labelText: "Nova Senha",
      labelId: "new_password",
      type: "password",
      value: new_password,
      required: true,
    },
  ];

  return (
    <Form
      config={config}
      isLoading={isLoading}
      btnText="Salvar"
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}
