export default function(state = {}, action) {
    switch (action.type) {
      case "RECIVE_BOOKING_DATA":
        return {...state, movieDetail : action.response.movieDetail, seats: action.response.seats};
      default:
        return state;
    }
  }