"use strict";

/**
 * Npm imports
 */
import { applyMiddleware, createStore } from "redux";

/**
 * Local imports
 */
import Songs from "./Middle/Songs";
import Reducers from "./Reducer";

const middlewares = applyMiddleware(Songs);
const store = createStore(Reducers, middlewares);

export default store;
