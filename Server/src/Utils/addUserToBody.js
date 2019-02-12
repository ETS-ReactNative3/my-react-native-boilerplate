export default function addUserToBody(req, res, next) {
  req.body.user = req.user;
  next();
}
