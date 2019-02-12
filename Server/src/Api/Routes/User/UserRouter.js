import Logger from 'Utils/Logger';
import protectEndpoint from 'Utils/protectEndpoint';
import extractAuthHeader from 'Utils/extractAuthHeader';
import addUserToBody from 'Utils/addUserToBody';
import Router from 'Routes/Router';
import { signUp, googleSignUp, facebookSignUp } from 'Controllers/User';

export desault class UserRouter extends Router {
  get routes() {
    return {
      'POST /signup': signUp,
      'POST /google-signup': [
        extractAuthHeader,
        protectEndpoint('google-token', { scope: ['profile'] }),
        addUserToBody,
        googleSignUp,
      ],
      'POST /facebook-signup': [protectEndpoint('facebook-token'), addUserToBody, facebookSignUp],
      'GET /auth-test': [protectEndpoint('jwt', { session: false }), this.authTest.bind(this)],
    };
  }

  authTest(req, res) {
    const { user } = req;
    return res.payload(user.toJSON().publicData);
  }
}
