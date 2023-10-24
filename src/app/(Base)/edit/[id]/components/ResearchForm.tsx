"use client";
import { useState } from "react";
import { ResearchUpdateFormType } from "../../../../../../types/api";
import { Research } from "../../../../../../types/types";
import FormInput from "./FormInput";

interface ChangeResearchFormAction {
  (form: ResearchUpdateFormType): Promise<Research>;
}

interface Props {
  btnText: string;
  action: (formdata: FormData) => void;
  initialData?: Research;
}

export default function ResearchForm({ btnText, action, initialData }: Props) {
  const [form, setForm] = useState({
    title: initialData?.title,
    description: initialData?.description,
  });

  const { title, description } = form;

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;
    setForm({ ...form, [id]: value });
  };

  const config = [
    {
      labelText: "Título",
      labelId: "title",
      type: "text",
      required: true,
      value: title,
    },
    {
      labelText: "Descrição",
      labelId: "description",
      type: "textarea",
      required: true,
      value: description,
    },
    {
      labelText: "Autor",
      labelId: "author",
      readonly: true,
    },
    {
      labelText: "Orientador",
      labelId: "author",
      readonly: true,
    },
    {
      labelText: "Professor Responsável",
      labelId: "author",
      readonly: true,
    },
    {
      labelText: "Tipo",
      labelId: "author",
      readonly: true,
    },
    {
      labelText: "Banca",
      labelId: "author",
      readonly: true,
    },
    {
      labelText: "Aprovado em",
      labelId: "author",
      readonly: true,
    },
    {
      labelText: "Data de defesa",
      labelId: "author",
      readonly: true,
    },
    {
      labelText: "Arquivo",
      labelId: "file",
      type: "file",
    },
  ];

  return (
    <div className="wflex flex-col w-full py-3 px-6 ">
      <form className="space-y-4" action={action}>
        {config.map((item, index) => (
          <FormInput
            key={index}
            id={item.labelId}
            label={item.labelText}
            required={item.required}
            type={item.type}
            readonly={item?.readonly}
            value={item.value}
            onChange={onChange}
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
