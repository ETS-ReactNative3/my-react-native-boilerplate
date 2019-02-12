import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import Config from 'react-native-config';

const configure = () => {
  GoogleSignin.configure({
    iosClientId: Config.GOOGLE_IOS_CLIENT_ID,
    offlineAccess: false
  });
};

export { configure, GoogleSignin, statusCodes };
