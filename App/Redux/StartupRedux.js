import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startup: null,
  startupSuccess: null,
  startupFailure: null
});

export const StartupTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  ready: false,
  error: null
});

/* ------------- Selectors ------------- */

export const StartupSelectors = {
  getReady: state => state.ready,
  getError: state => state.error
};

/* ------------- Reducers ------------- */

export const startup = state =>
  state.merge({
    ready: false,
    error: null
  });

export const success = state =>
  state.merge({
    ready: true,
    error: null
  });

export const failure = (state, error) =>
  state.merge({
    ready: false,
    error
  });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.STARTUP]: success,
  [Types.STARTUP_SUCCESS]: success,
  [Types.STARTUP_FAILURE]: failure
});
