"use";
import Container from "@/components/Container";
import InvitesTable from "@/components/InvitesTable";

import ThesisTable from "@/components/ThesisTable";

export default async function Home() {
  return (
    <main className="flex flex-col gap-3">
      <h1 className="text-2xl text-slate-12">Visão Geral</h1>
      <Container>
        <h1 className="text-2xl text-slate-12">TCCs em Andamento</h1>
        <ThesisTable />
      </Container>
      <Container>
        <h1 className="text-2xl text-slate-12">TCCs Aprovados</h1>
        <ThesisTable />
      </Container>
      <Container>
        <h1 className="text-2xl text-slate-12">Convites</h1>
        <InvitesTable />
      </Container>
    </main>
  );
}
