import protectEndpoint from 'Utils/protectEndpoint';
import extractAuthHeader from 'Utils/extractAuthHeader';
import Router from 'Routes/Router';
import { authController } from 'Controllers/Auth';

export default class AuthRouter extends Router {
  get routes() {
    return {
      'POST /signin': [protectEndpoint('local', { session: false }), this.signIn.bind(this)],
      'GET /google': protectEndpoint('google', { scope: ['profile'] }),
      'GET /google/callback': [
        protectEndpoint('google', { failureRedirect: '/auth/google' }),
        this.redirectOAuth.bind(this),
      ],
      'POST /google/token': [extractAuthHeader, protectEndpoint('google-token')],
      'GET /facebook': protectEndpoint('facebook'),
      'GET /facebook/callback': [
        protectEndpoint('facebook', { failureRedirect: '/auth/facebook' }),
        this.redirectOAuth.bind(this),
      ],
      'POST /facebook/token': protectEndpoint('facebook-token'),
    };
  }

  async signIn(req, res) {
    const { user } = req;
    try {
      const payload = await authController.localSignIn(user);
      return res.payload(payload);
    } catch (err) {
      if (err instanceof Error) {
        return res.serverError(err);
      }
      return res.appReponse(err);
    }
  }

  async redirectOAuth(req, res) {
    res.redirect(`OAuthLogin://login?user=${JSON.stringify(req.user)}`);
  }
}
