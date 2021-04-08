export interface RoutingProps {
  pages: Pages[];
}

export interface Pages {
  name: string;
  path: string;
  Component?(arg: any): JSX.Element;
  showOnTabs: boolean;
  icon?: string;
  label?: string;
  redirectTo?: string;
}
