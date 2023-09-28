"use client";
import useProfile from "@/hooks/client/useProfile";
import { UserInfo } from "next-auth";
import { FormEvent, useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from "../Spinner";
import FormInput from "./FormInput";
import { ProfileFormInterface } from "../../../types/forms";

import { usePathname, useRouter } from "next/navigation";

interface Props {
  btnText: string;
  initialData: UserInfo;
  action: (form: ProfileFormInterface) => Promise<ProfileFormInterface>;
}

export default function ProfileForm({ btnText, initialData, action }: Props) {
  const router = useRouter();

  const {
    email,
    first_name,
    last_name,
    isError,
    isLoading,
    isSuccess,
    onChange,
    onSubmit,
  } = useProfile(initialData, action);

  useEffect(() => {
    if (isError) {
      toast.error(
        "Não foi possível atualizar as informações. Tente novamente."
      );
    }

    if (isSuccess) {
      toast.success("Informações atualizadas com sucesso");
      router.refresh();
    }
  }, [isSuccess, isError, router]);

  const config = [
    {
      labelText: "Nome",
      labelId: "first_name",
      type: "text",
      value: first_name,
      required: true,
    },
    {
      labelText: "Sobrenome",
      labelId: "last_name",
      type: "text",
      value: last_name,
      required: true,
    },
    {
      labelText: "Endereço de Email",
      labelId: "email",
      type: "email",
      value: email,
      required: true,
      readonly: true,
    },
  ];

  return (
    <div className="w-full py-3 px-6">
      <form className="space-y-6" onSubmit={onSubmit}>
        {config.map((item, index) => (
          <FormInput
            key={index}
            id={item.labelId}
            label={item.labelText}
            required={item.required}
            value={item.value}
            type={item.type}
            onChange={onChange}
            readonly={item?.readonly}
          />
        ))}

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {isLoading ? <Spinner size={24} color="white" /> : btnText}
          </button>
        </div>
      </form>
    </div>
  );
}
