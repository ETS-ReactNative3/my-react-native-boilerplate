// passport-google-token doesnt support the OAuth Bearer token, so add it into
// the request body
export default function extractAuthorizationHeader(req, res, next) {
  const bearerRE = /Bearer (.*)/;
  const match = bearerRE.exec(req.headers.authorization);
  const accessToken = match && match[1];
  req.body.access_token = accessToken;
  next();
}
