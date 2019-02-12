import Logger from 'Utils/Logger';
import ApiRouter from './ApiRouter';
import UserRouter from './User';
import AuthRouter from './Auth';
// import Auth from './Auth';
// import User from './User';

export const apiRouter = new ApiRouter('/api');

// Place api routers here
export const userRouter = new UserRouter('/user');
export const authRouter = new AuthRouter('/auth');

// Add routers to the api router here
apiRouter.addRouter(userRouter);
apiRouter.addRouter(authRouter);

export function addApiRouter(app) {
  app.use('/', apiRouter.expressRouter);
}
