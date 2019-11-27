import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 
import { Link } from 'react-router-dom';

import {reciveBookingDetail} from '../../actions';
import './SeatSelect.css';
class SelectSeact extends Component {
    state ={
        isSelected : false,
        color : 'white'
    }
    handleConfirmBooking =() =>{
        const { movieDetail } =this.props;
        console.log(movieDetail);
        
        this.props.reciveBookingDetail(movieDetail);
    }
    handleSeatSelect = (row,col) =>{
        this.setState({
            isSelected: !this.state.isSelected,
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
                                {row.map((col,j) =><div style={{backgroundColor: this.state.isSelected ? "green" : this.state.color}}className="seat-column" onClick={()=>this.handleSeatSelect(i,j)}></div>)}
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