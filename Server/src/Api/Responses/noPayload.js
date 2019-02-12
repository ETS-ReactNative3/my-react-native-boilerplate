import Logger from 'Utils/Logger';

export default function noPayload({ customStatusCode }) {
  const { res } = this;
  const resHeaders = res.getHeaders();
  // use the exit key as the code
  const code = resHeaders['x-exit'];
  const message = resHeaders['x-exit-description'];
  const payloadObj = {
    code,
    message,
  };

  const statusCodeToSet = customStatusCode === undefined ? 200 : customStatusCode;

  Logger.verbose('noPayload response called');

  if (statusCodeToSet !== 200) {
    Logger.verbose(`noPayload response called custom status code: ${customStatusCode}`);
  }

  return res.status(statusCodeToSet).json(payloadObj);
}
