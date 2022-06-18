export const loadPlaylist = (payload) => ({
  type: "LOAD_PLAYLIST",
  payload,
});

export const randomSong = (payload) => ({
  type: "RANDOM_SONG",
  payload,
});

export const prevSong = (payload) => ({
  type: "PREV_SONG",
  payload,
});

export const playSong = (payload) => ({
  type: "PLAY_SONG",
  payload,
});

export const stopSong = (payload) => ({
  type: "STOP_SONG",
  payload,
});

export const nextSong = (payload) => ({
  type: "NEXT_SONG",
  payload,
});

export const repeatSong = (payload) => ({
  type: "PREAT_SONG",
  payload,
});
