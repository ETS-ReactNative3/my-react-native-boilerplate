import { Router as createRouter } from 'express';
import Logger from '../../Utils/Logger';

export default class Router {
  constructor(path) {
    this.path = path;
    this.expressRouter = createRouter({ mergeParams: true });
    this.addRoutes();
  }

  get routes() {
    return {};
  }

  // Takes a Router object, not an express router
  addRouter(router) {
    this.expressRouter.use(this.path, router.expressRouter);
  }

  addRoutes() {
    const { routes } = this;

    Object.entries(routes).forEach(([routePath, action]) => {
      const routeItems = routePath.split(' ');
      const verb = (routeItems.length > 1 ? routeItems[0] : 'get').toLowerCase();
      const path = this.path + (routeItems.length > 1 ? routeItems[1] : routePath);
      Logger.debug(`Adding route to ${this.path} router: ${verb.toUpperCase()} ${path}`);
      this.expressRouter[verb](path, action);
    });
  }
}
