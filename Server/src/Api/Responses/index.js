import payload from './payload';
import noPayload from './noPayload';
import appError from './appError';
import serverError from './serverError';

const responses = {
  payload,
  noPayload,
  appError,
  serverError,
};

export function addResponses(req, res) {
  Object.entries(responses).forEach(([name, action]) => {
    res[name] = args => {
      const resThis = {
        req,
        res,
      };
      action.call(resThis, args);
    };
  });
  res.appResponse = args => {
    const resThis = {
      req,
      res,
    };
    const action = responses[args.responseType];
    action.call(resThis, args);
  };
}

export default responses;
