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

  const updateResearch = async (formData: ResearchUpdateFormType) => {
    "use server";
    return api.research.putResearch(formData);
  };

  return (
    <main className="flex flex-1 flex-col gap-3">
      <Container>
        <h1 className="text-2xl text-slate-12">Editar Pesquisa</h1>
        <ResearchForm
          btnText="Salvar"
          initialData={data}
          action={updateResearch}
        />
      </Container>
    </main>
  );
}
