import React, { Component } from 'react';
import {connect} from 'react-redux';

import './BookingConfirm.css';
class BookingConfirm extends Component {
    render() { 
        console.log(this.props.booking);
        const {movieDetail, seats} = this.props.booking;
        return (  
            <div className="booking-details-container">
                <h1>Movie Details</h1>
                <h4>{movieDetail.movie}</h4>
                <h4>{movieDetail.cinema}</h4>
                <h4>{movieDetail.time}</h4>
                <h4>Seats: {seats.join(' ')}</h4>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        booking : state.booking
    };
}

export default connect(mapStateToProps,null)(BookingConfirm);
 