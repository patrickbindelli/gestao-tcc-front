export interface SidebarButtonInterface {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export interface SidebarMenuInterface {
  label: string;
  buttons: SidebarButtonInterface[];
}
