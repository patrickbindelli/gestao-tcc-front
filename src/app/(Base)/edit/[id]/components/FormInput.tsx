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
          <FileInput
            id="multiple_files"
            type="file"
            onChange={onChange}
            value={value}
          />
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
    <div className="gap-1">
      <label
        htmlFor={id}
        className="block w-full max-w-xs text-base font-medium leading-6 text-slate-12"
      >
        {label}
      </label>
      <div className="mt-2 w-full">{handleInputType(type)}</div>
    </div>
  );
}
