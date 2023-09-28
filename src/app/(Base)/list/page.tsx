import ThesisTable from "@/components/ThesisTable";
import React from "react";
import { Columns } from "../../../../types/types";
import api from "@/api";

export default async function List() {
  const projects = await api.getResearchs();

  const projectsColumns: Columns[] = [
    {
      label: "Título",
      accessor: "title",
      sortable: true,
    },
    {
      label: "Descrição",
      accessor: "description",
      sortable: true,
    },
    {
      label: "Autor(es)",
      accessor: "authors",
      sortable: false,
    },
    {
      label: "Disciplina",
      accessor: "course",
      sortable: true,
    },
    {
      label: "Concluído",
      accessor: "accepted",
      sortable: true,
    },
    {
      label: "Membros",
      accessor: "members",
      sortable: false,
    },
  ];

  return (
    <main className="flex flex-col gap-3 flex-1 w-full">
      <h1 className="text-2xl text-slate-12">Lista de TCCs</h1>
      <ThesisTable columns={projectsColumns} data={projects} edit={false} />
    </main>
  );
}
