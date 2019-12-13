import axios from "axios";
import {
  getSmurfStart,
  getSmurfSuccess,
  getSmurfFail,
  postSmurfStart,
  postSmurfSuccess,
  postSmurfFail
} from "./smurf.actions";

export const getSmurf = () => async dispatch => {
  dispatch(getSmurfStart());

  try {
    const res = await axios.get("http://localhost:3333/smurfs");
    dispatch(getSmurfSuccess(res.data));
  } catch (err) {
    console.error(`Fetch Error ${err}`);
    dispatch(getSmurfFail(err));
  }
};

export const postSmurf = smurf => async dispatch => {
  dispatch(postSmurfStart());

  try {
    const res = await axios.post("http://localhost:3333/smurfs", smurf);
    dispatch(postSmurfSuccess(res.data));
  } catch (err) {
    console.error(err.response.data.Error);
    dispatch(postSmurfFail(err));
  }
};
