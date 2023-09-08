import Divider from "@/components/Divider";
import { UsefulFile, UsefulLink } from "@/types/types";
export default async function Utilities() {
  const fileData: UsefulFile[] = [
    { id: 1, file: "#", title: "Arquivo Sample" },
    { id: 1, file: "#", title: "Arquivo Sample" },
    { id: 1, file: "#", title: "Arquivo Sample" },
  ];

  const linksData: UsefulLink[] = [
    { id: 1, url: "#", title: "Link Sample" },
    { id: 1, url: "#", title: "Link Sample" },
    { id: 1, url: "#", title: "Link Sample" },
  ];

  return (
    <main className="flex flex-1 flex-col gap-3">
      <h1 className="text-2xl text-slate-12">Utiidades</h1>
      <div className="flex gap-3 w-full">
        <div className="flex flex-col gap-3 w-full">
          <div className="flex flex-col gap-1 w-full">
            <span className="text-xl">Arquivos Úteis</span>
            <Divider />
          </div>
          <div className="flex flex-col gap-3">
            {fileData.map((item, index) => (
              <a
                key={index}
                className="text-indigo-9 cursor-pointer hover:text-indigo-10 hover:underline underline-offset-2"
                href={item.file}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <div className="flex flex-col gap-1 w-full">
            <span className="text-xl">Links Úteis</span>
            <Divider />
          </div>
          <div className="flex flex-col gap-3">
            {linksData.map((item, index) => (
              <a
                key={index}
                className="text-indigo-9 cursor-pointer hover:text-indigo-10 hover:underline underline-offset-2"
                href={item.url}
                target="_blank"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
