import axios from 'axios';

export const fetchMovieList = async () => {
	const response = await axios.get(
		'http://burger-app-99f67.firebaseio.com/moviesData.json'
	);
	return response;
};
