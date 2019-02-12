import server from './server';

export default {
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: `${server.baseURL}/auth/facebook/callback`,
  profileFields: ['id', 'name', 'displayName', 'picture', 'email'],
};
