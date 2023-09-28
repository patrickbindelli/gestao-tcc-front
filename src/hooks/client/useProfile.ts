import { signIn } from "next-auth/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { ProfileFormInterface } from "../../../types/forms";
import { UserInfo } from "next-auth";

interface Status {
  loading: boolean;
  success: boolean;
  error: boolean;
}

interface ProfileFormAction {
  (form: ProfileFormInterface): Promise<ProfileFormInterface>;
}

export default function useProfile(
  initialData: UserInfo,
  action?: ProfileFormAction
) {
  const [formData, setFormData] = useState<ProfileFormInterface>(initialData);

  const [status, setStatus] = useState<Status>({
    loading: false,
    success: false,
    error: false,
  });

  const { first_name, last_name, email } = formData;

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
    email,
    first_name,
    last_name,
    isLoading: status.loading,
    isSuccess: status.success,
    isError: status.error,
    onChange,
    onSubmit,
  };
}
