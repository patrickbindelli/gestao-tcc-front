import React from "react";
import { Invite } from "api";
import { format, parseISO } from "date-fns";

interface Props {
  data: Invite[];
}

const handleDate = (date: string) => {
  const parsedDate = parseISO(date);
  return format(parsedDate, "dd/MM/yyyy HH:mm:ss");
};

export default function InvitesTable({ data }: Props) {
  return (
    <>
      <div className="overflow-x-auto max-h-[500px] ">
        <table className="table-auto border-separate border-spacing-0 rounded overflow-visible relative w-full">
          <thead className="bg-slate-5 sticky border border-slate-6 top-0 text-base font-medium">
            <tr className="p-2 text-left">
              <th className="border border-slate-6 p-2">Disciplina</th>
              <th className="border border-slate-6 p-2">Remetente</th>
              <th className="border border-slate-6 p-2">Data de Criação</th>
              <th className="border border-slate-6 p-2">Data Limite</th>
              <th className="border border-slate-6 p-2">Status</th>
              <th className="border border-slate-6 p-2"></th>
            </tr>
          </thead>
          <tbody className="text-base font-normal">
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="border-b border-l border-r border-slate-5 p-2">
                    {item.subject}
                  </td>
                  <td className="border-b border-l border-r border-slate-5 p-2 break-words">
                    {item.sender_name}
                  </td>
                  <td className="border-b border-l border-r border-slate-5 p-2 whitespace-nowrap">
                    {handleDate(item.created_at)}
                  </td>
                  <td className="border-b border-l border-r border-slate-5 p-2 whitespace-nowrap">
                    {handleDate(item.limit_date)}
                  </td>
                  <td className="border-b border-l border-r border-slate-5 p-2 whitespace-nowrap">
                    <span
                      className={`${
                        item.status === "Pendente"
                          ? "text-red-9"
                          : "text-green-9"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="border border-slate-4 px-4 py-2 text-center">
                    <button className="text-indigo-9 hover:text-indigo-10 hover:underline underline-offset-2">
                      Visualizar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {!data.length && (
        <span className="flex w-full items-center justify-center py-2">
          Você ainda não possui nenhum convite
        </span>
      )}
    </>
  );
}
