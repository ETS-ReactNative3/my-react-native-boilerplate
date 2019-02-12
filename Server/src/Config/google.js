import server from './server';

export default {
  clientID: process.env.GOOGLE_APP_SERVER_CLIENT_ID,
  clientSecret: process.env.GOOGLE_APP_SERVER_CLIENT_SECRET,
  callbackURL: `${server.baseURL}/auth/google/callback`,
};
