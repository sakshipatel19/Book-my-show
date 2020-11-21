import jsondata from '../reducers/data.json';
const data = jsondata;
const initialState = {
	moviesList: data.moviesData.BookMyShow.arrEvents
};
export default function(state = initialState, action) {
	switch (action.type) {
		case 'RECIVE_MOVIELIST_DATA':
			return { ...state, moviesList: action.response.BookMyShow.arrEvents };
		default:
			return state;
	}
}
