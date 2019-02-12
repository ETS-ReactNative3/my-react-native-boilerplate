import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  googleSignInRequest: null,
  googleSignInSuccess: ['google'],
  googleSignInFailure: { code: null, message: null, error: null },
  facebookSignInRequest: null,
  facebookSignInSuccess: ['facebook'],
  facebookSignInFailure: { code: null, message: null, error: null }
});

export const SocialTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
  code: null,
  message: null,
  google: null,
  facebook: null
});

/* ------------- Selectors ------------- */

export const SocialSelectors = {
  getGoogle: state => state.social.google,
  getFacebook: state => state.social.facebook,
  getError: state => state.social.error
};

/* ------------- Reducers ------------- */

export const googleRequest = state => state.merge({ fetching: true, google: null });

export const googleSuccess = (state, { code, message, google }) =>
  state.merge({
    fetching: false,
    error: null,
    code,
    message,
    google
  });

export const googleFailure = (state, { code, message, error }) =>
  state.merge({
    fetching: false,
    google: null,
    code,
    message,
    error
  });

export const facebookRequest = state => state.merge({ fetching: true, facebook: null });

export const facebookSuccess = (state, { code, message, facebook }) =>
  state.merge({
    fetching: false,
    error: null,
    code,
    message,
    facebook
  });

export const facebookFailure = (state, { code, message, error }) =>
  state.merge({
    fetching: false,
    facebook: null,
    code,
    message,
    error
  });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GOOGLE_SIGN_IN_REQUEST]: googleRequest,
  [Types.GOOGLE_SIGN_IN_SUCCESS]: googleSuccess,
  [Types.GOOGLE_SIGN_IN_FAILURE]: googleFailure,
  [Types.FACEBOOK_SIGN_IN_REQUEST]: facebookRequest,
  [Types.FACEBOOK_SIGN_IN_SUCCESS]: facebookSuccess,
  [Types.FACEBOOK_SIGN_IN_FAILURE]: facebookFailure
});
