import Container from "@/components/Container";
import InvitesTable from "@/components/InvitesTable";

import api from "@/api";
import ThesisTable from "@/components/ThesisTable";
import { Columns } from "default";

export default async function Home() {
  const approved = await api.research.getApprovedResearchs();
  const ongoing = await api.research.getOnGoingResearchs();

  const invited = await api.research.getUserInvites();

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
      label: "Autor",
      accessor: "author",
      sortable: false,
    },
    {
      label: "Disciplina",
      accessor: "subject",
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

  return (
    <main className="flex flex-1 flex-col gap-3">
      <h1 className="text-2xl text-slate-12">Visão Geral</h1>
      <Container>
        <h1 className="text-2xl text-slate-12">TCCs em Andamento</h1>
        <ThesisTable data={ongoing} columns={projectsColumns} />
      </Container>
      <Container>
        <h1 className="text-2xl text-slate-12">TCCs Aprovados</h1>
        <ThesisTable data={approved} columns={projectsColumns} />
      </Container>
      <Container>
        <h1 className="text-2xl text-slate-12">Convites</h1>
        <InvitesTable data={invited} />
      </Container>
    </main>
  );
}
