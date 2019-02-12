import { configure, GoogleSignin, statusCodes } from './Signin';

const { signIn, signInSilenty, isSignedIn, signOut, revokeAccess, hasPlayServices } = GoogleSignin;

class Google {
  constructor() {
    configure();
  }

  async signIn() {
    const userInfo = await signIn();
    return userInfo;
  }
}

export default new Google();
