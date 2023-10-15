import { ChangeEvent, FormEvent, useState } from "react";
import { ResearchUpdateFormType } from "../../../types/api";
import { Research } from "../../../types/types";

interface Status {
  loading: boolean;
  success: boolean;
  error: boolean;
}

interface ChangeResearchFormAction {
  (form: ResearchUpdateFormType): Promise<Research>;
}

export default function useUpdateResearch(
  initialData: Research,
  action: ChangeResearchFormAction
) {
  const [formData, setFormData] = useState<ResearchUpdateFormType>({
    title: initialData.title,
    description: initialData.description,
    file: undefined,
  });

  const [status, setStatus] = useState<Status>({
    loading: false,
    success: false,
    error: false,
  });

  const { title, description, file } = formData;

  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
    title,
    description,
    file,
    isLoading: status.loading,
    isSuccess: status.success,
    isError: status.error,
    onChange,
    onSubmit,
  };
}
