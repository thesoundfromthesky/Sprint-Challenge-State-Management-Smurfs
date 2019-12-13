import { combineReducers } from "redux";
import { smurfReducer } from "./smurf";

export const rootReducer = combineReducers({ smurfReducer });
