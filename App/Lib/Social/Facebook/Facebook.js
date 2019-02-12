import { LoginManager, GraphRequest, GraphRequestManager, AccessToken } from 'react-native-fbsdk';

class Facebook {
  static profileInfoParams = {
    parameters: {
      fields: {
        string: 'id,name,email,picture.width(600).height(800)'
      }
    }
  };

  async signIn() {
    const permissions = await this.getPermissions();
    if (permissions.isCancelled) {
      throw {
        code: 'facebookSignInError',
        message: 'Facebook sign in cancelled by user'
      };
    }
    const accessToken = await AccessToken.getCurrentAccessToken();
    return accessToken;
  }

  async getPermissions() {
    const permissions = await LoginManager.logInWithReadPermissions(['public_profile']);
    return permissions;
  }

  async getUserInfo() {
    const profileInfo = await this.makeGraphRequest('/me', this.profileInfoParams);
    return profileInfo;
  }

  makeGraphRequest(url, params) {
    return new Promise((resolve, reject) => {
      const profileInfoRequest = new GraphRequest(url, params, (err, data) => {
        if (err) {
          return reject(err);
        }
        resolve(data);
      });
      new GraphRequestManager().addRequest(profileInfoRequest).start();
    });
  }
}

export default new Facebook();
