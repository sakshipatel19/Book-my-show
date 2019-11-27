
// MovieList ActionTypes
export const REQUESTMOVIELIST = 'REQUEST_FETCH_MOVIELIST_DATA';
export const RECIVEMOVIELIST = 'RECIVE_MOVIELIST_DATA';

// Movie ActionTypes
export const RECIVEMOVIEDATA = 'RECIVE_MOVIE_DATA';

//Movie in Cinema ActionType
export const RECIVECINEMAMOVIEDATA = 'RECIVE_CINEMA_MOVIE_DATA';
export const RECIVETICKETDATA = 'RECIVE_TICKET_DATA';
export const RECIVEBOOKINGDATA = 'RECIVE_BOOKING_DATA';


// MovieList ActionCreators
export const requestMovieList= () =>({type: REQUESTMOVIELIST});

export const reciveMovieList = response =>({type: RECIVEMOVIELIST, response});

// Movie ActionCreators
export const reciveMovieData = response =>({type: RECIVEMOVIEDATA, response});

// Movie in Cinema ActionCreators
export const reciveCinemaMovieData = response =>({type: RECIVECINEMAMOVIEDATA, response});

export const reciveTicketDetail = response =>({type: RECIVETICKETDATA, response});

export const reciveBookingDetail = response =>({type: RECIVEBOOKINGDATA, response});
//Movie from SearchBar Action Creator
export const fetchtMovie= response =>({
    //axios.get(`https://www.omdbapi.com/?apikey=9c22ae49&s=${movie}`)
    type: 'FETCH_MOVIE_DATA',
    response
});
