import express from 'express';
import requestParam from 'request-param';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import Logger, { routeLogger, routeErrorLogger, logRoutes } from 'Utils/Logger';
import { addApiRouter } from 'Routes';
import { addResponses } from 'Responses';
import { AuthController } from 'Controllers/Auth/AuthController';

Logger.debug('Starting express app bootstrapping');

// Passport strategies
Object.values(AuthController.strategies).forEach(strategy => {
  passport.use(strategy);
});

const app = express();

Logger.verbose('Adding app routes');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(requestParam());
app.use(routeLogger);

app.use((req, res, next) => {
  addResponses(req, res);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

addApiRouter(app);
logRoutes(app);

app.use(routeErrorLogger);
app.use((err, req, res, next) => {
  console.error(err);
});

Logger.debug('Express app ready');
export default app;
