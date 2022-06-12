export const initialState = {
  playlist: [],
  currentSong: 0,
  playing: true,
  duration: "",
  random: false,
  repeat: false,
};

export const musicReducer = (state = initialState, action) => {
  console.log("ok");

  switch (action.type) {
    case "RANDOM_SONG":
      let random = Math.ceil(Math.random() * state.playlist.length);
      return {
        ...state,
        random: true,
      };
    case "PREV_SONG":
      if (state.random) {
        return {
          ...state,
          // eslint-disable-next-line eqeqeq
          currentSong: random,
        };
      } else {
        let current = state.playingSong;
        return {
          ...state,
          //first music in playlist
          // eslint-disable-next-line eqeqeq
          currentSong: current == 0 ? state.playlist.length - 1 : current - 1,
        };
      }
    case "PLAY_SONG":
      return {
        ...state,
        playing: true,
      };
    case "STOP_SONG":
      return {
        ...state,
        playing: false,
      };
    case "NEXT_SONG":
      if (state.random) {
        return {
          ...state,
          // eslint-disable-next-line eqeqeq
          currentSong: random,
        };
      } else {
        let current = state.playingSong;
        return {
          ...state,
          //last music in playlist
          // eslint-disable-next-line eqeqeq
          currentSong: current == state.playlist.length - 1 ? 0 : current + 1,
        };
      }
    case "REPEAT_SONG":
      return {
        ...state,
        repeat: true,
      };
    default:
      return state;
  }
};
