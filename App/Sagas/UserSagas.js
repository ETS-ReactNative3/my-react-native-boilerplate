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

import { call, put, select } from 'redux-saga/effects';
import handleError from 'Transforms/handleError';
import handleResponse from 'Transforms/handleResponse';
import UserActions, { UserSelectors } from 'Redux/UserRedux';
import { SocialSelectors } from 'Redux/SocialRedux';
import { googleSignIn, facebookSignIn } from 'Sagas/SocialSagas';

export function* signUp(
  api,
  { provider, payload: { email = null, username = null, password = null } }
) {
  let signUpCall = null;
  let payload = {};

  try {
    if (provider === 'google') {
      signUpCall = api.signUpWithGoogle;
      yield call(googleSignIn);
      const googleUser = yield select(SocialSelectors.getGoogle);
      payload.accessToken = googleUser.accessToken;
    } else if (provider === 'facebook') {
      signUpCall = api.signUpWithFacebook;
      yield call(facebookSignIn);
      const facebookUser = yield select(SocialSelectors.getFacebook);
      payload.accessToken = facebookUser.accessToken;
    } else {
      signUpCall = api.signUpWithAero;
      payload = { email, username, password };
    }
    const response = yield call(signUpCall, payload);
    const data = handleResponse(response);
    yield put(UserActions.signUpSuccess(data));
  } catch (err) {
    console.log(err);
    yield put(UserActions.signUpFailure(handleError(err)));
  }
}

export function* protectedEndpointTest(api) {
  try {
    const accessToken = yield select(UserSelectors.getAccessToken);
    const response = yield call(api.protectedEndpoint, { accessToken });
    const data = handleResponse(response);
    yield put(UserActions.protectedEndpointSuccess(data));
  } catch (err) {
    yield put(UserActions.protectedEndpointFailure(handleError(err)));
  }
}
