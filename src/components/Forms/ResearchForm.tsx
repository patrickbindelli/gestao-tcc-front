"use client";
import Spinner from "@/components/Spinner";
import useForm from "@/hooks/useForm";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

import { Research } from "default";
import { FormConfig } from "forms";
import FileButton from "./components/FileButton";
import FormInput from "./components/FormInput";

interface Props {
  btnText: string;
  action: (formdata: FormData) => Promise<void>;
  initialData: Research;
}

export default function ResearchForm({ btnText, action, initialData }: Props) {
  const router = useRouter();
  const { formState, status, onChange, onSubmitAction } = useForm(
    initialData,
    action
  );

  useEffect(() => {
    if (status.error) {
      toast.error("Não foi possível atualizar o projeto :(");
    }

    if (status.success) {
      toast.success("Salvo");
      router.refresh();
    }
  }, [status, router]);

  useEffect(() => {
    if (status.loading) {
      console.log("Loading...");
    } else {
      console.log("Loaded");
    }
  }, [status]);

  const config: FormConfig = [
    {
      label: "Título",
      id: "title",
      type: "text",
      required: true,
      value: formState.title,
    },
    {
      label: "Descrição",
      id: "description",
      type: "textarea",
      required: false,
      value: formState.description,
    },
    {
      label: "Autor",
      id: "author",
      readonly: true,
      value: initialData.author.name,
    },
    {
      label: "Orientador",
      id: "author",
      readonly: true,
      value: initialData.advisor.name,
    },
    {
      label: "Tipo de Pesquisa",
      id: "author",
      readonly: true,
      value: initialData.type,
    },
    {
      label: "Banca",
      id: "author",
      readonly: true,
      value: "",
    },
    {
      label: "Aprovado em",
      id: "author",
      readonly: true,
      value: "",
    },
    {
      label: "Data de defesa",
      id: "author",
      readonly: true,
      value: "",
    },
    {
      label: "Arquivo",
      id: "file",
      type: "file",
    },
  ];

  return (
    <div className="wflex flex-col w-full py-3 px-6 ">
      <form className="space-y-4" action={onSubmitAction}>
        {config.map((item, index) => (
          <FormInput
            key={index}
            id={item.id}
            label={item.label}
            required={item.required}
            type={item.type}
            readonly={item?.readonly}
            value={item.value}
            onChange={onChange}
          />
        ))}

        {initialData.file && (
          <div className="flex gap-3 items-center">
            <span>Arquivo atual: {initialData.file_name}</span>
            <div className="flex gap-1">
              <FileButton filename={initialData.file_name} type="download" />
              <FileButton filename={initialData.file_name} type="view" />
            </div>
          </div>
        )}

        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {status.loading ? <Spinner size={24} color="white" /> : btnText}
        </button>
      </form>
    </div>
  );
}
