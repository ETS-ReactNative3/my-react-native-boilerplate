import Logger from 'Utils/Logger';

export default function serverError({ code, message, error, ...data }) {
  const { res } = this;
  const resHeaders = res.getHeaders();

  const payloadObj = {
    code: code || resHeaders['x-exit'],
    message: message || resHeaders['x-exit-description'],
    error: error ? error.toString() : undefined,
    payload: data,
  };

  Logger.debug('serverError response called');

  if (!payloadObj.code) {
    Logger.warn('serverError response called with no code');
  } else {
    Logger.error(`serverError code: ${payloadObj.code}`);
  }

  if (!payloadObj.message) {
    Logger.warn('serverError response called with no message');
  } else {
    Logger.error(`serverError message: ${payloadObj.message}`);
  }

  if (payloadObj.payload === undefined) {
    Logger.warn('serverError response called with no payload');
  } else {
    Logger.error('serverError payload: ', payloadObj.payload);
  }

  if (payloadObj.error === undefined) {
    Logger.warn('serverError response called with no error');
  } else if (payloadObj.error.stack) {
    // insert the error stack into the response if we are not on production
    if (process.env.NODE_ENV !== 'production') {
      payloadObj.stack = payloadObj.error.stack;
    }
  }

  return res.status(500).json(payloadObj);
}
