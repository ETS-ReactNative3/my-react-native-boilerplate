import Logger from 'Utils/Logger';

export default function payload({ code, message, customStatusCode, ...data }) {
  const { res } = this;
  const resHeaders = res.getHeaders();
  const payloadObj = {
    code: code || resHeaders['x-exit'] || 'success',
    message: message || resHeaders['x-exit-description'] || 'Success',
    payload: data,
  };

  const statusCodeToSet = customStatusCode === undefined ? 200 : customStatusCode;

  Logger.debug('payload response called');

  if (statusCodeToSet !== 200) {
    Logger.debug(`payload response called custom status code: ${customStatusCode}`);
  }
  if (data === undefined) {
    Logger.verbose('payload response called with no payload passed');
  } else {
    Logger.verbose('payload: ', data);
  }

  return res.status(statusCodeToSet).json(payloadObj);
}
