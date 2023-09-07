"use client";
import Container from "@/components/Container";
import Input from "@/components/Input";
import { AlertCircle } from "lucide-react";
import { useState } from "react";
import FormInput from "./components/FormInput";
import FormSelect from "./components/FormSelect";

export default function Home() {
  const [formValues, setFormValues] = useState<{
    [key: string]: string;
  }>({
    firstName: "Fulano",
    lastName: "de Tal",
    email: "example@example.com",
    lattes: "http://example.com/curriculo/fulano-de-tal",
  });

  const cursos = [
    {
      label: "Sistemas de Informação",
      value: 1,
    },
    {
      label: "Administração",
      value: 2,
    },
  ];

  return (
    <main className="flex flex-col gap-3 flex-1 w-full">
      <h1 className="text-2xl text-slate-12">Perfil de Usuário</h1>
      <Container>
        <h1 className="text-2xl">Geral</h1>
        <FormInput
          label="Nome"
          required
          showIcon
          value={formValues.firstName}
        />
        <FormInput
          label="Sobrenome"
          required
          showIcon
          value={formValues.lastName}
        />
        <FormInput
          label="Endereço de Email"
          required
          showIcon
          value={formValues.email}
        />
        <FormInput
          label="Currículo Lattes"
          showIcon
          value={formValues.lattes}
        />
        <FormSelect
          label="Seleção de Curso"
          options={cursos}
          required
          showIcon
        />
      </Container>
      <div className="flex gap-3 items-center justify-end w-full p-3">
        <button className="px-4 py-2 bg-indigo-9 hover:bg-indigo-10 rounded-md">
          Atualizar Perfil
        </button>
        <button className="px-4 py-2  bg-slate-9 hover:bg-slate-10 rounded-md">
          Cancelar
        </button>
      </div>
    </main>
  );
}
