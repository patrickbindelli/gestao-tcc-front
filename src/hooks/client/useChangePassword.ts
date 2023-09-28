import api from "@/api";
import { signIn } from "next-auth/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { ChangePasswordFormInterface } from "../../../types/forms";

interface Status {
  loading: boolean;
  success: boolean;
  error: boolean;
}

interface ChangePasswordFormAction {
  (form: ChangePasswordFormInterface): Promise<void>;
}

export default function useChangePassword(action?: ChangePasswordFormAction) {
  const [formData, setFormData] = useState({
    current_password: "",
    new_password: "",
  });

  const [status, setStatus] = useState<Status>({
    loading: false,
    success: false,
    error: false,
  });

  const { new_password, current_password } = formData;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus((current) => ({ ...current, loading: true }));

    action?.(formData)
      .then(() => {
        setStatus((current) => ({ ...current, success: true }));
      })
      .catch(() => {
        setStatus((current) => ({ ...current, success: false, error: true }));
      })
      .finally(() => {
        setStatus((current) => ({ ...current, loading: false }));
      });
  };

  return {
    new_password,
    current_password,
    isLoading: status.loading,
    isSuccess: status.success,
    isError: status.error,
    onChange,
    onSubmit,
  };
}
