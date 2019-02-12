import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import FacebookStrategy from 'passport-facebook';
import FacebookTokenStrategy from 'passport-facebook-token';
import GoogleStrategy from 'passport-google-oauth20';
import { Strategy as GoogleTokenStrategy } from 'passport-google-token';
import Logger from 'Utils/Logger';
import generateToken from 'Utils/generateToken';
import Config from 'Config';
import User from 'Models/User';

const { facebook: facebookConfig, google: googleConfig } = Config;
const { jwtSecret } = Config.auth;

export class AuthController {
  static get strategies() {
    return {
      local: new LocalStrategy(
        {
          session: false,
        },
        this.verifyLocalSignIn
      ),
      jwt: new JWTStrategy(
        {
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          secretOrKey: jwtSecret,
        },
        this.verifyJWT
      ),
      google: new GoogleStrategy(googleConfig, this.verifyGoogle),
      googleToken: new GoogleTokenStrategy(googleConfig, this.verifyGoogle),
      facebook: new FacebookStrategy(facebookConfig, this.verifyFacebook),
      facebookToken: new FacebookTokenStrategy(facebookConfig, this.verifyFacebook),
    };
  }

  static async verifyLocalSignIn(username, password, cb) {
    try {
      if (!username || !password) {
        cb(null, false, {
          code: 'invalidInput',
          message: 'Could not get userdata from JWT',
        });
      }

      const user = await User.query()
        .first()
        .where({ username });
      if (!user) {
        return cb(null, false, {
          code: 'userNotFound',
          message: 'User does not exist.',
          username,
        });
      }

      const passwordValid = await user.verifyPassword(password);
      if (!passwordValid) {
        return cb(null, false, {
          code: 'incorrectCredentials',
          message: 'Username or password is incorrect.',
          username,
        });
      }

      return cb(null, user, {
        code: 'success',
        message: 'Logged in successfully!',
      });
    } catch (err) {
      cb(err);
    }
  }

  static async verifyJWT({ id, email }, cb) {
    Logger.info('in verify jwt');
    try {
      if (!id) {
        cb(null, false, {
          code: 'invalidInput',
          message: 'Could not get userdata from JWT',
        });
      }

      const user = await User.query().findById(id);
      if (!user) {
        return cb(null, false, {
          code: 'userNotFound',
          message: 'User does not exist.',
          id,
          email,
        });
      }
      return cb(null, user, {
        code: 'success',
        message: 'Logged in successfully!',
      });
    } catch (err) {
      Logger.info('verify err');
      console.log(err);
      cb(err);
    }
  }

  static async verifyGoogle(accessToken, refreshToken, profile, done) {
    done(null, { accessToken, refreshToken, profile });
  }

  static async verifyFacebook(accessToken, refreshToken, profile, done) {
    done(null, { accessToken, refreshToken, profile });
  }

  async localSignIn(user) {
    if (!user) {
      throw {
        responseType: 'appError',
        message: 'An error occured while attempting to sign in.',
        code: 'loginError',
        error: new Error('user is undefined'),
      };
    }
    const publicUserData = user.toJSON().publicData;
    const accessToken = generateToken(publicUserData);
    return {
      user: publicUserData,
      accessToken,
      message: 'Logged in successfully!',
    };
  }
}

const authController = new AuthController();

export default authController;
