import { AlertCircle, HelpCircle } from "lucide-react";
import React from "react";

export default function FormSelect({
  label = "Sample",
  required = false,
  showIcon = false,
  options = [{ value: "test", label: "teste" }],
  onChangeText,
}: {
  label?: string;
  required?: boolean;
  showIcon?: boolean;
  options?: { value: string | number; label: string }[];
  onChangeText?: () => void;
}) {
  return (
    <div className="flex gap-3 items-center w-1/2">
      <div className="flex flex-1">
        <span>{label}</span>
      </div>
      {showIcon && (
        <>
          {required ? (
            <AlertCircle className="flex-none text-red-9" size={20} />
          ) : (
            <HelpCircle className="flex-none text-indigo-9" size={20} />
          )}
        </>
      )}
      <select
        id="countries"
        className="dark:bg-slate-3 dark:rounded-sm dark:border-slate-6 flex-1 h-10 px-2 outline-none bg-transparent border-slate-6 border-2"
        placeholder="Escolha uma opção"
      >
        {options?.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
