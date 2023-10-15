import Link from "next/link";
import { Download, View } from "lucide-react";
interface Props {
  filename: string;
  type: "download" | "view";
}

export default function FileButton({ filename, type }: Props) {
  return (
    <Link
      href={`${type === "download" ? "/download" : "/view"}/${filename}`}
      target="_blank"
      className="flex gap-1 items-center justify-center rounded-sm bg-indigo-9 hover:bg-indigo-8 px-3 py-1 text-sm"
    >
      {type === "download" ? "Baixar" : "Visualizar"}
      {type === "download" ? (
        <Download color="white" size={20} />
      ) : (
        <View color="white" size={20} />
      )}
    </Link>
  );
}
