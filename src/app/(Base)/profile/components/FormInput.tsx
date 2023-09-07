import { AlertCircle, HelpCircle } from "lucide-react";
import React from "react";

export default function FormInput({
  label = "Sample",
  required = false,
  showIcon = false,
  value,
  onChangeText,
}: {
  label?: string;
  required?: boolean;
  showIcon?: boolean;
  value?: string;
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
      <input
        className="flex-1 h-10 px-2 outline-none bg-transparent border-slate-6 border-2"
        value={value}
      />
    </div>
  );
}
