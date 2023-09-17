import api from "@/api";
import RegisterForm from "@/components/Forms/RegisterForm";
import { RegisterFormInterface } from "@/components/Forms/types";

import Link from "next/link";

export default function Login() {
  const create = async (form: RegisterFormInterface) => {
    // Será executado no servidor
    "use server";
    return api.register(form);
  };

  return (
    <main className="flex min-h-screen flex-col bg-slate-1 items-center">
      <div className="flex flex-col w-full min-w-fit md:max-w-lg items-center justify-center px-6 py-16 gap-3 lg:px-8 ">
        <div className="flex items-center justify-center w-full">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-slate-12">
            Formulário de Cadastro
          </h2>
        </div>

        {/* {passado como prop pra um Client Component} */}
        <RegisterForm action={create} />

        <p className="flex gap-1 items-center justify-center mt-10 text-center text-sm text-gray-500">
          Já possui conta?
          <Link
            href="/auth/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
