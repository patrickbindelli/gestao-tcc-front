import { ChangeEvent, useState } from "react";

interface FormStatus {
  loading: boolean;
  success: boolean;
  error: boolean;
}

const initialStatus: FormStatus = {
  loading: false,
  success: false,
  error: false,
};

export default function useForm<T>(
  initialData: T,
  action?: (formData: FormData) => Promise<void>
) {
  const [formState, setFormState] = useState<T>(initialData);
  const [formStatus, setFormStatus] = useState<FormStatus>(initialStatus);

  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const onSubmitAction = (formData: FormData) => {
    if (action) {
      setFormStatus((current) => ({ ...current, loading: true }));

      action(formData)
        .then(() => {
          setFormStatus((current) => ({ ...current, success: true }));
        })
        .catch(() => {
          setFormStatus((current) => ({
            ...current,
            success: false,
            error: true,
          }));
        })
        .finally(() => {
          setFormStatus((current) => ({ ...current, loading: false }));
        });
    }
  };

  return {
    formState,
    status: formStatus,
    onChange,
    onSubmitAction,
  };
}
