import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import * as SharedRedux from 'Services/SharedRedux';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  dismissError: null,
  signUpRequest: ['provider', 'payload'],
  signUpSuccess: SharedRedux.requestSuccessParams,
  signUpFailure: SharedRedux.requestFailureParams,
  protectedEndpointRequest: null,
  protectedEndpointSuccess: SharedRedux.requestSuccessParams,
  protectedEndpointFailure: SharedRedux.requestFailureParams
});

export const UserTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  ...SharedRedux.initialState,
  accessToken: null,
  signedUp: false
});

/* ------------- Selectors ------------- */

export const UserSelectors = {
  ...state => SharedRedux.selectors(state.user),
  getUser: state => state.user.user,
  getAccessToken: state => state.user.accessToken
};

/* ------------- Reducers ------------- */

export const signUpRequest = state =>
  state.merge({
    ...SharedRedux.requestState,
    user: null,
    accessToken: null
  });

export const signUpSuccess = (state, { code, message, payload }) =>
  state.merge({
    ...SharedRedux.successState,
    code,
    message,
    user: payload.user,
    accessToken: payload.accessToken
  });

// export const signUpFailure = (state, { code, message, error }) => {
//   console.tron.log('in failure', code, message, error)
//   return state.merge({
//     ...SharedRedux.failureState,
//     user: null,
//     accessToken: null,
//     code,
//     message,
//     error,
//   });
// };
export const signUpFailure = (state, { code, message, error, payload }) =>
  state.merge({
    ...SharedRedux.failureState,
    user: null,
    accessToken: null,
    code,
    message,
    error,
    payload
  });

export const protectedEndpointRequest = state =>
  state.merge({
    ...SharedRedux.requestState
  });

export const protectedEndpointSuccess = (state, { code, message, payload }) =>
  state.merge({
    ...SharedRedux.successState,
    signedUp: true,
    code,
    message,
    payload
  });

export const protectedEndpointFailure = (state, { code, message, error }) =>
  state.merge({
    ...SharedRedux.failureState,
    code,
    message,
    error
  });
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_UP_REQUEST]: signUpRequest,
  [Types.SIGN_UP_SUCCESS]: signUpSuccess,
  [Types.SIGN_UP_FAILURE]: signUpFailure,
  [Types.PROTECTED_ENDPOINT_REQUEST]: protectedEndpointRequest,
  [Types.PROTECTED_ENDPOINT_SUCCESS]: protectedEndpointSuccess,
  [Types.PROTECTED_ENDPOINT_FAILURE]: protectedEndpointFailure,
  [Types.DISMISS_ERROR]: SharedRedux.dismissError
});
