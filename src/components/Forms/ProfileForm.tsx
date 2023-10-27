"use client";
import useForm from "@/hooks/useForm";
import { FormConfig } from "forms";
import { UserInfo } from "next-auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";
import BaseForm from "./BaseForm";

interface Props {
  btnText: string;
  initialData: UserInfo;
  action: (formData: FormData) => Promise<void>;
}

export default function ProfileForm({ btnText, initialData, action }: Props) {
  const router = useRouter();

  const { formState, status, onChange, onSubmitAction } = useForm(
    initialData,
    action
  );

  useEffect(() => {
    if (status.error) {
      toast.error(
        "Não foi possível atualizar as informações. Tente novamente."
      );
    }

    if (status.loading) {
      toast.success("Informações atualizadas com sucesso");
      router.refresh();
    }
  }, [status, router]);

  const formConfig: FormConfig = [
    {
      label: "Nome",
      id: "first_name",
      type: "text",
      value: formState.first_name,
      required: true,
    },
    {
      label: "Sobrenome",
      id: "last_name",
      type: "text",
      value: formState.last_name,
      required: true,
    },
    {
      label: "Endereço de Email",
      id: "email",
      type: "email",
      value: formState.email,
      required: true,
      readonly: true,
    },
  ];

  return (
    <div className="w-full py-3 px-6">
      <BaseForm
        config={formConfig}
        isLoading={status.loading}
        btnText="Salvar"
        onChange={onChange}
        onSubmit={onSubmitAction}
      />
    </div>
  );
}
