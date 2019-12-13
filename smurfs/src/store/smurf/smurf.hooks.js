import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSmurf, postSmurf } from "./smurf.thunk";

export function useGetSmurfOnce() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.smurfReducer);

  useEffect(() => {
    dispatch(getSmurf());
  }, [dispatch]);

  return data;
}

export function usePostSmurf() {
  const dispatch = useDispatch();

  function dispatchPostSmurf(smurf) {
    dispatch(postSmurf(smurf));
  }

  return dispatchPostSmurf;
}
