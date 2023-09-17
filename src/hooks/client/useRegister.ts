import api from "@/api";
import { RegisterForm } from "@/components/Forms/types";
import { ChangeEvent, FormEvent, useState } from "react";

interface Status {
  loading: boolean;
  success: boolean;
  error: boolean;
}

export default function useRegister() {
  const [formData, setFormData] = useState<RegisterForm>({
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

    api
      .register(formData)
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
