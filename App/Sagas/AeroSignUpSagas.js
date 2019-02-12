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

import { call, put } from 'redux-saga/effects';
import AeroSignUpActions from '../Redux/AeroSignUpRedux';
// import { AeroSignUpSelectors } from '../Redux/AeroSignUpRedux'

export function* signUpWithAero(api, { data }) {
  const response = yield call(api.signUpWithAero, data);
  // success?
  if (response.ok) {
    yield put(AeroSignUpActions.aeroSignUpSuccess(response.data));
  } else {
    yield put(AeroSignUpActions.aeroSignUpFailure(response.data));
  }
}
