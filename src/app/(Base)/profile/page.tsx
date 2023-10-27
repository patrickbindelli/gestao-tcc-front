import Container from "@/components/Container";

import api from "@/api";
import PasswordForm from "@/components/Forms/PasswordForm";
import ProfileForm from "@/components/Forms/ProfileForm";

export default async function Home() {
  const user = await api.users.getLoggedUser();

  const update = async (formData: FormData) => {
    "use server";
    await api.authentication.updateUser(formData);
  };

  const updatePassword = async (formData: FormData) => {
    "use server";
    await api.authentication.changePassword(formData);
  };

  return (
    <main className="flex flex-col gap-3 flex-1 w-full">
      <h1 className="text-2xl text-slate-12">Perfil de Usuário</h1>
      <Container>
        <ProfileForm btnText="Salvar" initialData={user} action={update} />
      </Container>

      <Container>
        <PasswordForm action={updatePassword} />
      </Container>
    </main>
  );
}
