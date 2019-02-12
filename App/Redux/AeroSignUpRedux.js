import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  aeroSignUpRequest: ['data'],
  aeroSignUpSuccess: ['payload'],
  aeroSignUpFailure: ['error']
});

export const AeroSignUpTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  email: null,
  username: null,
  password: null,
  fetching: null,
  payload: null,
  error: null
});

/* ------------- Selectors ------------- */

export const AeroSignUpSelectors = {
  getEmail: state => state.email,
  getUsername: state => state.username,
  getPassword: state => state.password,
  getFetching: state => state.fetching,
  getPayload: state => state.payload,
  getError: state => state.error
};

/* ------------- Reducers ------------- */

// Make the request to signup the user
export const request = (state, { email, username, password }) =>
  state.merge({
    email,
    username,
    password,
    fetching: true,
    payload: null
  });

// Successful signup
export const success = (state, { payload }) =>
  state.merge({ fetching: false, error: null, payload });

// Error during signing up
export const failure = (state, { error }) => state.merge({ fetching: false, error, payload: null });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.AERO_SIGN_UP_REQUEST]: request,
  [Types.AERO_SIGN_UP_SUCCESS]: success,
  [Types.AERO_SIGN_UP_FAILURE]: failure
});
