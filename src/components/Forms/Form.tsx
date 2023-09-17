import { ChangeEvent, FormEvent } from "react";
import Spinner from "../Spinner";
import FormInput from "./FormInput";
import { FormConfig } from "./types";

interface Props {
  config: FormConfig[];
  isLoading: boolean;
  btnText: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export default function Form({
  config,
  isLoading,
  btnText,
  onChange,
  onSubmit,
}: Props) {
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
            link={item.link}
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
