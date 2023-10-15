import Container from "@/components/Container";

import api from "@/api";
import ProfileForm from "@/components/Forms/ProfileForm";
import {
  ChangePasswordFormInterface,
  ProfileFormInterface,
} from "../../../../types/forms";
import ChangePasswordForm from "@/components/Forms/ChangePasswordForm";

export default async function Home() {
  const user = await api.users.getLoggedUser();

  const update = async (formData: ProfileFormInterface) => {
    "use server";
    return api.authentication.updateUser(formData);
  };

  const updatePassword = async (formData: ChangePasswordFormInterface) => {
    "use server";
    return api.authentication.changePassword(formData);
  };

  return (
    <main className="flex flex-col gap-3 flex-1 w-full">
      <h1 className="text-2xl text-slate-12">Perfil de Usuário</h1>
      <Container>
        <ProfileForm btnText="Salvar" initialData={user} action={update} />
      </Container>

      <Container>
        <ChangePasswordForm action={updatePassword} />
      </Container>
    </main>
  );
}
