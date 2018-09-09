"use strict";

/**
 * Npm imports
 */
import { combineReducers } from "redux";

/**
 * Local imports
 */
import SongsReducer from "./Songs";
import ApiReducer from "./API";

const reducers = combineReducers({
  songs: SongsReducer,
  api: ApiReducer
});

export default reducers;
