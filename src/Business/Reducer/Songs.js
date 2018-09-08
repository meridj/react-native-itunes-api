"use strict";

/**
 * Local imports
 */
import { SongsActions } from "../Action/Songs";

const INITIAL_STATE = {
  songs: {
    list: [],
    isFetching: false
  }
};

const SongsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // ------------------------------------------------
    // - Get next songs

    case SongsActions.SET_NEXT_SONGS:
      return {
        ...state,
        songs: {
          ...state.songs,
          list: [...state.songs.list, ...action.payload]
        }
      };
    default:
      return state;
  }
};

export default SongsReducer;
