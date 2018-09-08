"use strict";

/**
 * Npm imports
 */
import { combineReducers } from "redux";

/**
 * Local imports
 */
import SongsReducer from "./Songs";

const reducers = combineReducers({
  songs: SongsReducer
});

export default reducers;
