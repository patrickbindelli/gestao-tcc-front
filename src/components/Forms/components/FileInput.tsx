import React, { HTMLInputTypeAttribute, useEffect, useState } from "react";
import FileButton from "./FileButton";

interface Props {
  id: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: HTMLInputTypeAttribute;
  readonly?: boolean;
}

export const FileInput = ({ id, onChange, value }: Props) => {
  const fileButtonStyle =
    "file:rounded-none file:bg-slate-7 file:border-0 hover:file:bg-slate-8 hover:file:cursor-pointer file:h-8 file:mr-2 file:text-base";

  const fileName = value ? value.split("/").pop() : "";

  return (
    <div className="flex flex-col gap-3">
      {fileName && (
        <>
          <span>{fileName}</span>
          <div className="flex gap-1">
            <FileButton filename={fileName} type="download" />
            <FileButton filename={fileName} type="view" />
          </div>
        </>
      )}
      <input
        id={id}
        name={id}
        type="File"
        onChange={onChange}
        className={`block w-full rounded-sm text-base border border-slate-7 text-slate-12 shadow-sm placeholder:text-slate-12 focus:outline-none focus:ring-indigo-9 ${fileButtonStyle}`}
        placeholder="Selecionar arquivo"
      />
    </div>
  );
};
