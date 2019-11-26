
const initialState={
    seats :{
        leftRow:[
            [1,2,3,4,5,6],
            [1,2,3,4,5,6,7,8,9,10],
            [1,2,3,4,5,6,7,8,9,10],
            [1,2,3,4,5,6,7,8,9,10],
            [1,2,3,4,5,6,7,8,9,10],
            [1,2,3,4,5,6,7,8,9,10],
            [1,2,3,4,5,6,7,8,9,10],
            [1,2,3,4,5,6,7,8,9,10],
        ],
        rightRow:[
            [1,2,3,4,5,6],
            [1,2,3,4,5,6,7,8,9,10],
            [1,2,3,4,5,6,7,8,9,10],
            [1,2,3,4,5,6,7,8,9,10],
            [1,2,3,4,5,6,7,8,9,10],
            [1,2,3,4,5,6,7,8,9,10],
            [1,2,3,4,5,6,7,8,9,10],
            [1,2,3,4,5,6,7,8,9,10],
        ]
    } 
}
export default function(state = initialState, action) {
    switch (action.type) {
      case "RECIVE_TICKET_DATA":
        return {...state, movieDetail : action.response};
      default:
        return state;
    }
  }
  