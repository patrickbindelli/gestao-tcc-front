import { FormConfig, FormItem } from "forms";
import React, { ChangeEvent } from "react";
import Spinner from "../Spinner";
import FormInput from "./components/FormInput";

interface Props {
  config: FormConfig;
  isLoading: boolean;
  btnText: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSubmit: (FormData: FormData) => void;
  renderInputComponent?: (
    key: number,
    item: FormItem,
    onChange: (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void
  ) => React.JSX.Element;
}

const renderFormInput = (
  key: number,
  item: FormItem,
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
) => {
  return (
    <FormInput
      key={key}
      id={item.id}
      label={item.label}
      required={item.required}
      value={item.value}
      type={item.type}
      onChange={onChange}
    />
  );
};

export default function BaseForm({
  config,
  isLoading,
  btnText,
  onChange,
  onSubmit,
  renderInputComponent = renderFormInput,
}: Props) {
  return (
    <div className="w-full py-3 px-6">
      <form className="space-y-6" action={onSubmit}>
        {config.map((item, index) =>
          renderInputComponent(index, item, onChange)
        )}
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
