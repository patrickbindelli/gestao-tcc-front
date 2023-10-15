"use client";
import useUpdateResearch from "@/hooks/client/useUpdateResearch";
import { ResearchUpdateFormType } from "../../../../../../types/api";
import { Research } from "../../../../../../types/types";
import FormInput from "./FormInput";

interface ChangeResearchFormAction {
  (form: ResearchUpdateFormType): Promise<Research>;
}

interface Props {
  btnText: string;
  initialData: Research;
  action: ChangeResearchFormAction;
}

export default function ResearchForm({ btnText, initialData, action }: Props) {
  const {
    title,
    description,
    file,
    isLoading,
    isSuccess,
    isError,
    onChange,
    onSubmit,
  } = useUpdateResearch(initialData, action);

  const config = [
    {
      labelText: "Título",
      labelId: "title",
      type: "text",
      value: title,
      required: true,
    },
    {
      labelText: "Descrição",
      labelId: "description",
      type: "textarea",
      value: description,
      required: true,
    },
    {
      labelText: "Autor",
      labelId: "author",
      value: initialData.author.name,
      readonly: true,
    },
    {
      labelText: "Orientador",
      labelId: "author",
      value: initialData.advisor_name,
      readonly: true,
    },
    {
      labelText: "Professor Responsável",
      labelId: "author",
      value: initialData.responsible.name,
      readonly: true,
    },
    {
      labelText: "Tipo",
      labelId: "author",
      value: initialData.subject,
      readonly: true,
    },
    {
      labelText: "Banca",
      labelId: "author",
      value: initialData.committee,
      readonly: true,
    },
    {
      labelText: "Aprovado em",
      labelId: "author",
      value: initialData.approved_at ? initialData.approved_at : "Não aprovado",
      readonly: true,
    },
    {
      labelText: "Data de defesa",
      labelId: "author",
      value: initialData.defense_date
        ? initialData.defense_date
        : "Não aprovado",
      readonly: true,
    },
    {
      labelText: "Arquivo",
      labelId: "file",
      type: "file",
      value: file,
    },
  ];

  return (
    <div className="wflex flex-col w-full py-3 px-6 ">
      <form className="space-y-4" onSubmit={onSubmit}>
        {config.map((item, index) => (
          <FormInput
            key={index}
            id={item.labelId}
            label={item.labelText}
            required={item.required}
            value={item.value}
            type={item.type}
            onChange={onChange}
            readonly={item?.readonly}
          />
        ))}

        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {btnText}
        </button>
      </form>
    </div>
  );
}
