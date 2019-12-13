export const GET_SMURF_START = "GET_SMURF_START";
export const GET_SMURF_SUCCESS = "GET_SMURF_SUCCESS";
export const GET_SMURF_FAIL = "GET_SMURF_FAIL";

export const getSmurfStart = () => ({ type: GET_SMURF_START });
export const getSmurfSuccess = data => ({
  type: GET_SMURF_SUCCESS,
  payload: data
});
export const getSmurfFail = data => ({
  type: GET_SMURF_FAIL,
  payload: data
});

export const POST_SMURF_START = "POST_SMURF_START";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_FAIL = "POST_SMURF_FAIL";

export const postSmurfStart = () => ({ type: POST_SMURF_START });
export const postSmurfSuccess = data => ({
  type: POST_SMURF_SUCCESS,
  payload: data
});
export const postSmurfFail = data => ({
  type: POST_SMURF_FAIL,
  payload: data
});
