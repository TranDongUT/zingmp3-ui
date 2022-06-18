export const initialState = {
  playlist: [],
  currentSong: 0,
  playing: true,
  duration: "",
  random: false,
  repeat: false,
};

export const musicReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case "LOAD_PLAYLIST":
      return {
        ...state,
        playlist: action.payload,
      };
    case "RANDOM_SONG":
      return {
        ...state,
        random: action.payload,
      };
    case "PREV_SONG":
      if (state.random) {
        let newRandom = Math.floor(Math.random() * state.playlist.length);
        while (newRandom == state.currentSong) {
          newRandom = Math.floor(Math.random() * state.playlist.length);
        }
        return {
          ...state,
          // eslint-disable-next-line eqeqeq
          currentSong: newRandom,
        };
      } else {
        let current = state.currentSong;
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
        let newRandom = Math.floor(Math.random() * state.playlist.length);
        while (newRandom == state.currentSong) {
          newRandom = Math.floor(Math.random() * state.playlist.length);
        }
        return {
          ...state,
          // eslint-disable-next-line eqeqeq
          currentSong: newRandom,
        };
      } else {
        let current = state.currentSong;

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
        repeat: action.payload,
      };
    default:
      return state;
  }
};
