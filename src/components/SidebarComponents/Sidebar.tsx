import SidebarMenu from "./SidebarMenu";
import { SidebarMenuInterface } from "./types";

export default function Sidebar({ data }: { data: SidebarMenuInterface[] }) {
  return (
    <div
      className={`flex flex-col w-full p-3 prose prose-slate sticky top-0 gap-3`}
    >
      {data.map((menu, index) => (
        <SidebarMenu key={index} menu={menu} />
      ))}
    </div>
  );
}
