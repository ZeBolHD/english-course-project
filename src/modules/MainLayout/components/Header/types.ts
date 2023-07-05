export interface NavMenuProps {
  closeMenu: () => void;
  scrollToPosition: () => void;
  scrollToSection: (section: string) => void;
}

export interface NavItemProps {
  type: "button" | "link";
  children: React.ReactNode;
  onClick: () => void;
  href?: string;
  isDocument?: boolean;
}
