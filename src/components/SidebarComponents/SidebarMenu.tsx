import SidebarButton from "./SidebarButton";
import { SidebarMenuInterface } from "./types";

export default function SidebarMenu({ menu }: { menu: SidebarMenuInterface }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between py-2 px-3 text-lg">
        <span>Menu Principal</span>
      </div>

      <div className={`flex flex-col overflow-hidden`}>
        {menu.buttons.map((button, index) => (
          <SidebarButton
            key={index}
            label={button.label}
            icon={button.icon}
            href={button.href}
          />
        ))}
      </div>
    </div>
  );
}
