/** **********************************************************
 * A short word on how to use this automagically generated file.
 * We're often asked in the ignite gitter channel how to connect
 * to a to a third party api, so we thought we'd demonstrate - but
 * you should know you can use sagas for other flow control too.
 *
 * Other points:
 *  - You'll need to add this saga to sagas/index.js
 *  - This template uses the api declared in sagas/index.js, so
 *    you'll need to define a constant in that file.
 ************************************************************ */

import { put } from 'redux-saga/effects';
import Social from 'Lib/Social';
import handleError from 'Transforms/handleError';
import SocialActions from 'Redux/SocialRedux';

export function* googleSignIn() {
  try {
    const userInfo = yield Social.Google.signIn();
    yield put(SocialActions.googleSignInSuccess(userInfo));
  } catch (err) {
    yield put(SocialActions.googleSignInFailure(handleError(err, 'googleSignInError')));
  }
}

export function* facebookSignIn() {
  try {
    const userInfo = yield Social.Facebook.signIn();
    yield put(SocialActions.facebookSignInSuccess(userInfo));
  } catch (err) {
    yield put(SocialActions.facebookSignInFailure(handleError(err, 'facebookSignInError')));
  }
}
