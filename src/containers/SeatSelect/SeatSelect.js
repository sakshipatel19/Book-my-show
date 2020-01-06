import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 
import { Link } from 'react-router-dom';

import {reciveBookingDetail} from '../../actions';
import './SeatSelect.css';
class SelectSeact extends Component {

    state = {
        selectedSeats: []
    }
    
    handleConfirmBooking = () =>{
        const { movieDetail } =this.props;
        this.props.reciveBookingDetail({movieDetail, seats: this.state.selectedSeats});
    }
    handleSeatSelect = (event, seatNum) =>{
        event.currentTarget.style.backgroundColor = event.currentTarget.style.backgroundColor === 'green' ? 'white' : 'green';
        event.currentTarget.style.color = event.currentTarget.style.backgroundColor === 'green' ? '#fff' : '#aaa';
        this.setState({
            selectedSeats: [...this.state.selectedSeats, seatNum]
        })
    }
    createSeats = () =>{
        const {seats} = this.props;
        return Object.keys(seats).map(seat =>{
            return <div className={seat}>
                {
                    seats[seat].map((row,i) =>{
                        return (
                            <div className="seat-row">
                                {row.map((col,j) =><div className="seat-column" key={j} onClick={(e)=>this.handleSeatSelect(e,col)}>{col}</div>)}
                            </div>
                        )
                    })
                }
            </div>
           
        })
    }
    render() { 
        return ( 
            <div className="select-seat-container">
                <div className="select-seat-heading"><h1>Select Seats</h1></div>
                {this.createSeats()}
                <Link to="/confirmbooking"><div className="confirn-btn" onClick={()=>this.handleConfirmBooking()}> Confim Booking</div></Link>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        seats: state.seats.seats,
        movieDetail : state.seats.movieDetail
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({reciveBookingDetail:reciveBookingDetail},dispatch);
}
  

export default connect(mapStateToProps,mapDispatchToProps)(SelectSeact);