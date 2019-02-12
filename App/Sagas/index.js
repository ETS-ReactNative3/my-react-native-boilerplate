import { takeLatest, all } from 'redux-saga/effects';
import API from 'Services/Api';
import FixtureAPI from 'Services/FixtureApi';
import DebugConfig from 'Config/DebugConfig';

/* ------------- Types ------------- */

import { StartupTypes } from 'Redux/StartupRedux';
import { UserTypes } from 'Redux/UserRedux';
import { AeroSignUpTypes } from 'Redux/AeroSignUpRedux';
import { SocialTypes } from 'Redux/SocialRedux';
// import { AccountTypes } from '../Redux/AccountRedux';

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas';
import { signUp, protectedEndpointTest } from './UserSagas';
import { signUpWithAero } from './AeroSignUpSagas';
import { googleSignIn, facebookSignIn } from './SocialSagas';

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(UserTypes.SIGN_UP_REQUEST, signUp, api),
    takeLatest(UserTypes.PROTECTED_ENDPOINT_REQUEST, protectedEndpointTest, api),
    takeLatest(AeroSignUpTypes.AERO_SIGN_UP_REQUEST, signUpWithAero, api),
    takeLatest(SocialTypes.GOOGLE_SIGN_IN_REQUEST, googleSignIn),
    takeLatest(SocialTypes.FACEBOOK_SIGN_IN_REQUEST, facebookSignIn)
  ]);
}
