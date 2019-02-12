import jwt from 'jsonwebtoken';
import Config from 'Config';

const { jwtSecret } = Config.auth;

export default function generateToken(payload) {
  return jwt.sign(payload, jwtSecret);
}
