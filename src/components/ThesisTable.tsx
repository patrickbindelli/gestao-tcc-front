"use client";
import { useState } from "react";
import SortableHeader from "./SortableHeader";

interface Columns {
  label: string;
  accessor: string;
  sortable: boolean;
}

interface Thesis {
  title: string;
  description: string;
  authors: string;
  course: string;
  accepted: boolean;
  members: {
    responsible: string;
    advisor: string;
    commitee: string;
  };
}

export default function ThesisTable() {
  const columns: Columns[] = [
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
    {
      label: "",
      accessor: "",
      sortable: false,
    },
  ];

  const [data, setData] = useState<Thesis[]>([
    {
      title: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique placerat porta. Nullam porttitor risus libero, at ultrices tortor vestibulum in.",
      authors: "Fulano de Tal",
      course: "TCC I",
      accepted: true,
      members: {
        responsible: "Fulano de Tal",
        advisor: "Fulano de Tal",
        commitee: "Fulano de Tal",
      },
    },
  ]);

  return (
    <div className="overflow-x-auto max-h-[500px] ">
      <table className="table-auto border-separate border-spacing-0 rounded overflow-visible relative w-full">
        <thead className="bg-slate-5 sticky border border-slate-6 top-0 text-base font-medium">
          <SortableHeader columns={columns} />
        </thead>
        <tbody className="text-base font-normal">
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td className="border-b border-l border-r border-slate-5 p-2">
                  {item.title}
                </td>
                <td className="border-b border-l border-r border-slate-5 p-2 break-words">
                  {item.description}
                </td>
                <td className="border-b border-l border-r border-slate-5 p-2 whitespace-nowrap">
                  {item.authors}
                </td>
                <td className="border-b border-l border-r border-slate-5 p-2 whitespace-nowrap">
                  {item.course}
                </td>
                <td className="border-b border-l border-r border-slate-5 p-2 whitespace-nowrap">
                  {item.accepted ? (
                    <span className="text-green-9">Sim</span>
                  ) : (
                    <span className="text-red-9">Não</span>
                  )}
                </td>
                <td className="border-b border-l border-r border-slate-4 p-2">
                  <div className="flex flex-col gap-3 whitespace-nowrap">
                    <span>Responsável: {item.members.responsible}</span>
                    <span>Orientador: {item.members.advisor}</span>
                    <span>Banca: {item.members.commitee}</span>
                  </div>
                </td>
                <td className="border border-slate-4 px-4 py-2 text-center">
                  <button className="text-indigo-9 hover:text-indigo-10 hover:underline underline-offset-2">
                    Editar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
