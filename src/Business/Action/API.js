"use strict";

const ApiActions = {
  // ------------------------------------------------
  // - Api action

  API_REQUEST: "API_REQUEST",
  INCREMENT_API_OFFSET: "INCREMENT_API_OFFSET"
};

const apiRequest = () => ({
  type: ApiActions.API_REQUEST
});

const incrementApiOffset = () => ({
  type: ApiActions.INCREMENT_API_OFFSET,
  payload: 10
});

export { ApiActions, apiRequest, incrementApiOffset };
