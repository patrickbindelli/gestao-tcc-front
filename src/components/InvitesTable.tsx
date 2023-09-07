import React from "react";

export default function InvitesTable() {
  const sample = [
    {
      course: "TCC I",
      sender: "Fulano de Tal",
      created_at: "2023-08-30T12:00:01.846831-03:00",
      expires_at: "2023-08-30T12:00:01.846831-03:00",
      status: "Aceito",
    },
  ];

  return (
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
          {sample.map((item, index) => {
            return (
              <tr key={index}>
                <td className="border-b border-l border-r border-slate-5 p-2">
                  {item.course}
                </td>
                <td className="border-b border-l border-r border-slate-5 p-2 break-words">
                  {item.sender}
                </td>
                <td className="border-b border-l border-r border-slate-5 p-2 whitespace-nowrap">
                  {item.created_at}
                </td>
                <td className="border-b border-l border-r border-slate-5 p-2 whitespace-nowrap">
                  {item.expires_at}
                </td>
                <td className="border-b border-l border-r border-slate-5 p-2 whitespace-nowrap">
                  <span className="text-green-9">{item.status}</span>
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
  );
}
