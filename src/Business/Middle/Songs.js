"use strict";

/**
 * Local imports
 */
import { ApiActions } from "../Action/API";
import { setNextSongs } from "../Action/Songs";
import { incrementApiOffset } from "../Action/API";
import HttpClient from "../../Layer/Network/HTTPClient";
import NetworkUrls from "../../Layer/Network/NetworkUrls";

const MidExecuteNextSongsApiRequest = store => next => action => {
  const { getState, dispatch } = store;

  // Pour gerer la pagination =>> &offset=3&
  switch (action.type) {
    case ApiActions.API_REQUEST:
      const { offset } = getState().api;

      HttpClient.get(
        `/${NetworkUrls.action}${NetworkUrls.nekfeuSongs}&offset=${offset}&${
          NetworkUrls.resultLimit
        }`
      )
        .then(res => {
          const { results } = res.data;

          dispatch(setNextSongs(results));
          dispatch(incrementApiOffset());
        })
        .catch(res => console.log(res));
      break;
  }
  next(action);
};

export default MidExecuteNextSongsApiRequest;
