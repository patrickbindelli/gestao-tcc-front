import { Project } from "../../types/api";
import { Columns } from "../../types/types";
import SortableHeader from "./SortableHeader";

interface Props {
  columns: Columns[];
  data: Project[];
}

export default function ThesisTable({ data, columns }: Props) {
  return (
    <>
      <div className="overflow-x-auto max-h-[500px] w-full">
        <table className="table-auto border-separate border-spacing-0 rounded relative w-full">
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
                    {item.authors.map((author, index) => (
                      <span key={index}>{author.name}</span>
                    ))}
                  </td>
                  <td className="border-b border-l border-r border-slate-5 p-2 whitespace-nowrap">
                    {item.subject}
                  </td>
                  <td className="border-b border-l border-r border-slate-5 p-2 whitespace-nowrap">
                    {item.approved ? (
                      <span className="text-green-9">Sim</span>
                    ) : (
                      <span className="text-red-9">Não</span>
                    )}
                  </td>
                  <td className="border-b border-l border-r border-slate-4 p-2">
                    <div className="flex flex-col gap-3 whitespace-nowrap">
                      {/* <span>Responsável: {item.responsible}</span> */}
                      <span>Orientador: {item.advisor_name}</span>
                      {/* <span>Banca: {item.commitee}</span> */}
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
      {!data.length && (
        <span className="flex w-full items-center justify-center py-2">
          Você ainda não possui nenhum projeto
        </span>
      )}
    </>
  );
}
