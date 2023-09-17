import React from "react";
import { Loader2 } from "lucide-react";

interface Props {
  size?: number;
  color?: string;
  duration?: number;
}

export default function Spinner({
  size = 20,
  color = "indigo",
  duration = 1000,
}: Props) {
  return (
    <div>
      <Loader2
        size={size}
        className={`animate-spin animate-duration-[${duration}ms] text-${color}-9`}
      />
      <span className="sr-only">Carregando...</span>
    </div>
  );
}
