import React, { HTMLInputTypeAttribute } from "react";

interface Props {
  id: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  readonly?: boolean;
  rows?: number;
}
export const TextArea = ({
  id,
  value,
  onChange,
  required = false,
  readonly = false,
  rows = 3,
}: Props) => {
  return (
    <textarea
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      required={required}
      className="block w-full rounded-sm border read-only:border-0 border-slate-7 px-1.5 py-1.5 text-slate-12 shadow-sm placeholder:text-slate-11 outline-none focus:ring-indigo-9 caret-slate-12 sm:text-base sm:leading-6 bg-slate-3 read-only:text-slate-11"
      readOnly={readonly}
      rows={rows}
    />
  );
};
