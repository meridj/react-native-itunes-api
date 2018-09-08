"use strict";

const ApiActions = {
  // ------------------------------------------------
  // - Api action

  API_REQUEST: "API_REQUEST"
};

const apiRequest = () => ({
  type: ApiActions.API_REQUEST
});

export { ApiActions, apiRequest };
