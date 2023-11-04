import LoginForm from "@/components/Forms/LoginForm";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await getServerSession();

  if (session) {
    return redirect("/");
  }

  return (
    <main className="flex min-h-screen flex-col bg-slate-1 items-center">
      <div className="flex flex-col w-full min-w-fit md:max-w-lg items-center justify-center px-6 py-16 gap-3 lg:px-8 ">
        <div className="flex items-center justify-center w-full">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-slate-12">
            Login
          </h2>
        </div>

        <LoginForm />

        <p className="flex gap-1 items-center justify-center mt-10 text-center text-sm text-gray-500">
          Não possui conta?
          <Link
            href="/auth/register"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Cadastrar-se
          </Link>
        </p>
      </div>
    </main>
  );
}
