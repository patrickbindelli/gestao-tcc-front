import React, { HTMLInputTypeAttribute } from "react";
import Link from "next/link";
interface Props {
  id: string;
  label: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
  link?: {
    linkText: string;
    linkUrl: string;
  };
  readonly?: boolean;
}
export default function FormInput({
  id,
  label,
  value,
  onChange,
  type,
  required = false,
  link,
  readonly = false,
}: Props) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="block text-sm font-medium leading-6 text-slate-12"
        >
          {label}
        </label>
        {link && (
          <div className="text-sm">
            <Link
              href={link.linkUrl}
              className="font-semibold text-indigo-9 hover:text-indigo-10"
            >
              {link.linkText}
            </Link>
          </div>
        )}
      </div>
      <div className="mt-2">
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          className="block w-full rounded-sm border border-slate-7 px-1.5 py-1.5 text-slate-12 shadow-sm placeholder:text-slate-11 outline-none focus:ring-indigo-9 caret-slate-12 sm:text-sm sm:leading-6 bg-slate-3 read-only:text-slate-11"
          readOnly={readonly}
        />
      </div>
    </div>
  );
}
