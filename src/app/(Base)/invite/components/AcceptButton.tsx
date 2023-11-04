"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface Props {
  onClick: () => Promise<void>;
  disabled: boolean;
}

export default function AcceptButton({ onClick, disabled = false }: Props) {
  const router = useRouter();

  const handleAcceptInvite = () => {
    onClick()
      .then(() => {
        toast.success("Convite aceito");
        router.refresh();
      })
      .catch(() => {
        toast.error("Ocorreu um erro ao aceitar o convite");
      });
  };

  return (
    <form action={handleAcceptInvite}>
      <div className="flex flex-col gap-1 justify-center ">
        <button
          type="submit"
          className="bg-indigo-9 py-2 px-5 rounded-sm hover:bg-indigo-8 disabled:bg-slate-5"
          disabled={disabled}
        >
          Aceitar Convite
        </button>
      </div>
    </form>
  );
}
