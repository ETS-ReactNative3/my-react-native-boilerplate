export const actions = {
  dismissError: null
};

export const requestSuccessParams = {
  code: null,
  message: null,
  payload: null
};

export const requestFailureParams = {
  code: null,
  message: null,
  error: null,
  payload: null
};

export const initialState = {
  payload: null,
  fetching: null,
  code: null,
  message: null,
  error: null,
  showError: null
};

// pass in the value for your redux state key (e.g. state.user)
export function selectors(innerState) {
  return {
    getPayload: () => innerState.payload,
    getFetching: () => innerState.fetching,
    getCode: () => innerState.code,
    getMessage: () => innerState.message,
    getError: () => innerState.error,
    getShowError: () => innerState.showError
  };
}

export const requestState = {
  fetching: true,
  code: null,
  message: null,
  error: null
};

export const successState = {
  fetching: false,
  error: null
};

export const failureState = {
  fetching: false,
  showError: true
};

export const dismissError = state =>
  state.merge({
    showError: false
  });
