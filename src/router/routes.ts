export interface IRoute {
  label: string;
  path: string;
  icon?: string;
}

class Route {
  path;
  label;
  icon;

  constructor(label: IRoute["label"], path: IRoute["path"], icon: IRoute["icon"]) {
    this.label = label
    this.path = path;
    this.icon = icon;
  }
}

export const routes: IRoute[] = [
  new Route('routes.about_me', '/about', 'fa-user'),
  new Route('routes.resume', '/resume', 'fa-file-lines'),
  new Route('routes.portfolio', '/portfolio', 'fa-briefcase'),
  new Route('routes.contact', '/contact', 'fa-address-book'),
];
