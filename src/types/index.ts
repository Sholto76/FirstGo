export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  icon?: string;
  current?: boolean;
}
