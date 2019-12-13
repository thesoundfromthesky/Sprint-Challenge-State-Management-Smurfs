import {
  GET_SMURF_START,
  GET_SMURF_SUCCESS,
  GET_SMURF_FAIL,
  POST_SMURF_START,
  POST_SMURF_SUCCESS,
  POST_SMURF_FAIL
} from "./smurf.actions";

const initialState = {
  smurfs: [],
  isFetching: false,
  error: ""
};

export function smurfReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_SMURF_START:
      return { ...state, isFetching: true };
    case GET_SMURF_SUCCESS:
      return { ...state, smurfs: [...payload], isFetching: false };
    case GET_SMURF_FAIL:
      return { ...state, error: payload };
    case POST_SMURF_START:
      return { ...state, isFetching: true };
    case POST_SMURF_SUCCESS:
      return { ...state, smurfs: [...payload], isFetching: false };
    case POST_SMURF_FAIL:
      return { ...state, error: payload, isFetching: false };
    default:
      return state;
  }
}
