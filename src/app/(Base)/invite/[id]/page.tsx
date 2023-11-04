import api from "@/api";
import Container from "@/components/Container";
import { format, parseISO } from "date-fns";
import { Check, X } from "lucide-react";
import AcceptButton from "../components/AcceptButton";

interface Props {
  params: {
    id: string;
  };
}

export default async function Invite({ params }: Props) {
  const { id } = params;
  const data = await api.research.getUserInviteById(id);

  const handleDate = (date: string) => {
    const parsedDate = parseISO(date);
    return format(parsedDate, "dd/MM/yyyy HH:mm:ss");
  };

  const acceptInvite = async () => {
    "use server";
    await api.research.acceptInvite(id);
  };

  return (
    <main className="flex flex-1 flex-col gap-3">
      <Container>
        <h1 className="text-2xl text-slate-12">Convite de Pesquisa</h1>
        <div className="grid grid-cols-5">
          <div className="flex flex-col">
            <span className="p-3 font-bold">Tipo</span>
            <span className="p-3">{data.type}</span>
          </div>
          <div className="flex flex-col">
            <span className="p-3 font-bold">Orientado</span>
            <span className="p-3">{data.advised.name}</span>
          </div>
          <div className="flex flex-col">
            <span className="p-3 font-bold">Orientador</span>
            <span className="p-3">{data.advisor.name}</span>
          </div>
          <div className="flex flex-col">
            <span className="p-3 font-bold">Data Limite</span>
            <span className="p-3">{handleDate(data.limit_date)}</span>
          </div>
          <div className="flex flex-col">
            <span className="p-3 font-bold">Aceito</span>
            <span className="p-3">
              {data.accepted ? (
                <Check size={20} className="text-green-9" />
              ) : (
                <X size={20} className="text-red-9" />
              )}
            </span>
          </div>
        </div>
        <AcceptButton onClick={acceptInvite} disabled={data.accepted} />
      </Container>
    </main>
  );
}
