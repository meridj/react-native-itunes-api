"use strict";

/**
 * Local imports
 */
import { ApiActions } from "../Action/API";

const INITIAL_STATE = {
  offset: 0
};

const ApiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // ------------------------------------------------
    // - Increment Offset

    case ApiActions.INCREMENT_API_OFFSET:
      return {
        ...state,
        offset: state.offset + action.payload
      };
    default:
      return state;
  }
};

export default ApiReducer;
