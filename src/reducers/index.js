import { combineReducers } from 'redux'
import movieList from './movieListReducer';
import movie from './movieReducer';
import cinemas from './cinemasReducer';
import seats from './seatsReducer'
import booking from './bookingReducer';
const movieApp = combineReducers({
    movieList,
    movie,
    cinemas,
    seats,
    booking,
});

export default movieApp