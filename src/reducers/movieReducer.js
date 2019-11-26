
export default function(state = {}, action) {
    switch (action.type) {
      case "RECIVE_MOVIE_DATA":
        return action.response;
      default:
        return state;
    }
  }
  