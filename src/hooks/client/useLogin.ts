import { signIn } from "next-auth/react";
import { ChangeEvent, FormEvent, useState } from "react";

interface Status {
  loading: boolean;
  success: boolean;
  error: boolean;
}

export default function useLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [status, setStatus] = useState<Status>({
    loading: false,
    success: false,
    error: false,
  });

  const { email, password } = formData;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus((current) => ({ ...current, loading: true }));

    signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/",
    })
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
    password,
    isLoading: status.loading,
    isSuccess: status.success,
    isError: status.error,
    onChange,
    onSubmit,
  };
}
