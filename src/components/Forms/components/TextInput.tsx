import React, { HTMLInputTypeAttribute } from "react";

interface Props {
  id: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
  readonly?: boolean;
}

export const TextInput = ({
  id,
  onChange,
  readonly,
  required,
  type,
  value,
}: Props) => {
  return (
    <input
      id={id}
      name={id}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      className="block w-full rounded-sm border read-only:border-0 border-slate-7 px-1.5 py-1.5 text-slate-12 shadow-sm placeholder:text-slate-11 outline-none focus:ring-indigo-9 caret-slate-12 sm:text-base sm:leading-6 bg-slate-3 read-only:text-slate-11"
      readOnly={readonly}
    />
  );
};
