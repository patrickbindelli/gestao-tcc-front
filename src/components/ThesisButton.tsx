import React from "react";

import Link from "next/link";

interface Props {
  id: number;
}
export default function ThesisButton({ id }: Props) {
  return (
    <Link
      href={`/edit/${id}`}
      className="text-indigo-9 hover:text-indigo-10 hover:underline underline-offset-2"
    >
      Editar
    </Link>
  );
}
