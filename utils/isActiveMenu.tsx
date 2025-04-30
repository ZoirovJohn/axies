interface DropdownItem {
  path: string;
}

interface MenuItem {
  path?: string;
  dropdown?: DropdownItem[];
}

export default function isActiveMenu(
  children: MenuItem[],
  path: string
): boolean {
  if (!children || !path) return false;

  return children.some(
    (item) =>
      item.path === path || item.dropdown?.some((sub) => sub.path === path)
  );
}
