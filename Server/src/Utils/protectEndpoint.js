import passport from 'passport';
import { JsonWebTokenError } from 'jsonwebtoken';
import Logger from 'Utils/Logger';

export default (strategy, options) => {
  const action = (req, res, next) => {
    passport.authenticate(strategy, options, (err, user, info) => {
      if (err) {
        next(err);
      } else if (!user) {
        if (info instanceof JsonWebTokenError) {
          return res.appError({
            code: 'invalidAccessToken',
            message: 'Access Denied',
            error: info,
          });
        }
        return res.appError({
          code: 'authenticationFailed',
          message: info.message || 'Authenticated Failed',
          error: info,
        });
      }
      req.user = user;
      next();
    })(req, res, next);
  };
  return action;
};
