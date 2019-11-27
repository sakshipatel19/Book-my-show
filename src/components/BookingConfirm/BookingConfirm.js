import React, { Component } from 'react';
import {connect} from 'react-redux';

import './BookingConfirm.css';
class BookingConfirm extends Component {
    render() { 
        console.log(this.props.booking);
        const {movieDetail} = this.props.booking
        return (  
            <div className="booking-details-container">
                <div>Movie Details</div>
                <div>{movieDetail.movie}</div>
                <div>{movieDetail.cinema}</div>
                <div>{movieDetail.time}</div>
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
 