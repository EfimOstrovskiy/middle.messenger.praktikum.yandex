import { Route } from './';

class Router {
  static instance: Router;

  routes: any
  history: History
  _currentRoute: Route | null
  _rootQuery: string

  constructor(rootQuery: any) {
    if (Router.instance) {
      return Router.instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.instance = this;
  }

  use(pathname: string, block: any, tag: string) {
    const route = new Route(pathname, block, {rootQuery: this._rootQuery}, tag);
    this.routes.push(route);
    return this;
  }

  start() {
    window.onpopstate = (event: any) => {
      if (event.currentTarget) {
        this._onRoute(event.currentTarget.location.pathname);
      }
    };

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (!route) {
      return;
    }

    if (this._currentRoute) {
      this._currentRoute.leave();
    }
    this._currentRoute = route
    route.render(route, pathname);
  }

  go(pathname: string) {
    this.history.pushState({}, "", pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back()
  }

  forward() {
    this.history.forward()
  }

  getRoute(pathname: string) {
    return this.routes.find((route: any) => route.match(pathname));
  }
}

export const router = new Router('root');
