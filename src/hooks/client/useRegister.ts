import { RegisterFormInterface } from "@/components/Forms/types";
import { UserInfo } from "next-auth";
import { ChangeEvent, FormEvent, useState } from "react";

interface Status {
  loading: boolean;
  success: boolean;
  error: boolean;
}

interface RegisterAction {
  (form: RegisterFormInterface): Promise<UserInfo>;
}

export default function useRegister(action: RegisterAction) {
  const [formData, setFormData] = useState<RegisterFormInterface>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_password: "",
  });

  const { first_name, last_name, email, password, re_password } = formData;

  const [status, setStatus] = useState<Status>({
    loading: false,
    success: false,
    error: false,
  });

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus((current) => ({ ...current, loading: true }));

    action(formData) // Chamando a função que vai rodar no servidor passando um state :??????
      .then(() => {
        setStatus((current) => ({ ...current, success: true }));
      })
      .catch((err) => {
        console.log(err);

        setStatus((current) => ({
          ...current,
          success: false,
          error: true,
        }));
      })
      .finally(() => {
        setStatus((current) => ({ ...current, loading: false }));
      });
  };

  return {
    first_name,
    last_name,
    email,
    password,
    re_password,
    isLoading: status.loading,
    isError: status.error,
    isSuccess: status.success,
    onChange,
    onSubmit,
  };
}
