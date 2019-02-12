import Logger from 'Utils/Logger';

export default function appError({ error, message, code, ...data }) {
  const { res } = this;
  // use the exit key as the error code
  const resHeaders = res.getHeaders();
  const payloadObj = {
    code: code || resHeaders['x-exit'],
    message: message || resHeaders['x-exit-description'],
    payload: data,
    error: error ? error.toString() : undefined,
  };
  // https://softwareengineering.stackexchange.com/questions/341732/should-http-status-codes-be-used-to-represent-business-logic-errors-on-a-server/341796
  const statusCodeToSet = 400;

  Logger.debug('appError response called');

  // Return 409 if nothing was passed
  if (!payloadObj.message && error === undefined && data === undefined) {
    Logger.error(
      'appError response called with either an empty message, no error, or no data. At least one should be supplied'
    );
  }

  if (!payloadObj.code) {
    Logger.warn('appError response called with no code');
  } else {
    Logger.error(`appError code: ${payloadObj.code}`);
  }

  if (!payloadObj.message) {
    Logger.warn('appError response called with no message');
  } else {
    Logger.error(`appError message: ${payloadObj.message}`);
  }

  if (payloadObj.payload === undefined) {
    Logger.warn('appError response called with no payload');
  } else {
    Logger.error('appError payload: ', payloadObj);
  }

  if (error === undefined) {
    Logger.warn('appError response called with no error');
  } else if (error.stack) {
    // insert the error stack into the response if we are not on production
    if (process.env.NODE_ENV !== 'production') {
      payloadObj.stack = error.stack;
    }
  }

  return res.status(statusCodeToSet).json(payloadObj);
}
