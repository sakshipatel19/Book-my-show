import jsondata from '../reducers/data.json';
const data = jsondata;
const showTime = [
    ['11:30 AM','02:30 PM','05:30 PM','08:30 PM'],
    ['02:30 PM','09:45 PM'],
    ['01:30 PM','04:30 PM','07:30 PM'],
    ['11:00 AM','02:00 PM','06:00 PM','09:00 PM'],
    ['10:30 AM','01:30 PM','04:30 PM'],
    ['10:00 PM'],
    ['04:10 PM','07:10 PM'],
    ['10:15 AM','01:15 PM','04:15 PM','07:15 PM'],
    ['10:30 AM'],
    ['10:30 AM','01:30 PM','04:30 PM','07:30 PM']
];
        
const initialState={
    cinemas : data.cinemas.BookMyShow.aiVN,
    showTime,
}
export default function(state = initialState, action) {
    switch (action.type) {
      case "RECIVE_CINEMA_MOVIE_DATA":
        return {...state, movie: action.response};
      default:
        return state;
    }
  }
  