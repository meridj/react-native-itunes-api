"use strict";

/**
 * Local imports
 */
import { ApiActions } from "../Action/API";
import { setNextSongs } from "../Action/Songs";
import HttpClient from "../../Layer/Network/HTTPClient";
import NetworkUrls from "../../Layer/Network/NetworkUrls";

const SongsMidExecuteNextSongsApiRequestMid = store => next => action => {
  const { dispatch } = store;

  // Pour gerer la pagination =>> &offset=3&
  switch (action.type) {
    case ApiActions.API_REQUEST:
      HttpClient.get(
        `/${NetworkUrls.action}${NetworkUrls.nekfeuSongs}${
          NetworkUrls.resultLimit
        }`
      )
        .then(res => {
          const { results } = res.data;

          dispatch(setNextSongs(results));
        })
        .catch(res => console.log(res));
      break;
  }
  next(action);
};

export default SongsMidExecuteNextSongsApiRequestMid;
