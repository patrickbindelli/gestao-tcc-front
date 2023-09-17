"use client";

import useVerifyUser from "@/hooks/client/useVerifyUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

interface Props {
  params: {
    uid: string;
    token: string;
  };
}

export default function Page({ params }: Props) {
  const router = useRouter();

  const { uid, token } = params;
  const { isVerified, isError } = useVerifyUser(uid, token);

  useEffect(() => {
    if (isError) {
      toast.error("Erro ao verificar conta");
      router.push("/auth/login");
    }

    if (isVerified) {
      toast.success("Conta verificada com sucesso");
      router.push("/auth/login");
    }
  }, [isVerified, isError, router]);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-slate-12">
          {isError ? "Redirecionando..." : "Verificando..."}
        </h1>
      </div>
    </div>
  );
}
