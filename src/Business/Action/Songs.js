"use strict";

const SongsActions = {
  // ------------------------------------------------
  // - Songs action

  SET_NEXT_SONGS: "SET_NEXT_SONGS"
};

const setNextSongs = newSongs => ({
  type: SongsActions.SET_NEXT_SONGS,
  payload: newSongs
});

export { SongsActions, setNextSongs };
