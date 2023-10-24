import api from "@/api";
import Container from "@/components/Container";
import { ResearchUpdateFormType } from "../../../../../types/api";
import ResearchForm from "./components/ResearchForm";

interface Props {
  params: {
    id: string;
  };
}

export default async function EditResearch({ params }: Props) {
  const { id } = params;
  const data = await api.research.getResearchById(id);

  const create = async (formData: FormData) => {
    "use server";
    await api.research.patchResearch(id, formData);
  };

  return (
    <main className="flex flex-1 flex-col gap-3">
      <Container>
        <h1 className="text-2xl text-slate-12">Editar Pesquisa</h1>
        <ResearchForm btnText="Salvar" action={create} initialData={data} />
      </Container>
    </main>
  );
}
