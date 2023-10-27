import React, { HTMLInputTypeAttribute } from "react";
import Link from "next/link";
import { TextInput } from "./TextInput";
import { TextArea } from "./TextArea";
import { FileInput } from "./FileInput";

type HTMLInputTypeAttributeCustom = HTMLInputTypeAttribute | "textarea";

interface Props {
  id: string;
  label: string;
  value?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type?: HTMLInputTypeAttributeCustom;
  required?: boolean;
  readonly?: boolean;
  rows?: number;
  link?: {
    linkText: string;
    linkUrl: string;
  };
}

export default function FormInput({
  id,
  label,
  value,
  onChange,
  type = "text",
  required = false,
  readonly = false,
  rows,
  link,
}: Props) {
  const handleInputType = (type: HTMLInputTypeAttributeCustom) => {
    if (readonly)
      return <span className="text-base text-slate-11">{value}</span>;

    switch (type) {
      case "textarea":
        return (
          <TextArea
            id={id}
            value={value}
            onChange={onChange}
            required={required}
            readonly={readonly}
            rows={rows}
          />
        );
      case "file":
        return (
          <FileInput id={id} type="file" onChange={onChange} value={value} />
        );
      default:
        return (
          <TextInput
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            required={required}
            readonly={readonly}
          />
        );
    }
  };

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
      <div className="mt-2 w-full">{handleInputType(type)}</div>
    </div>
  );
}
