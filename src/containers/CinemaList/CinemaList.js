import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 
import { Link } from 'react-router-dom';

import { reciveTicketDetail } from '../../actions';
import './CinemaList.css';
class CinemaList extends Component {
    
    showSeats = (venue, time) =>{
        const ticketObj ={};
        ticketObj.movie = this.props.movie.EventTitle;
        ticketObj.cinema = venue;
        ticketObj.time = time;
        this.props.reciveTicketDetail(ticketObj);
    }
    //Creating Movie Description
    createCinemaMovieDetail = () =>{
        const { movie } = this.props;
        return Object.keys(movie).length > 0 ? (
            <div className="movie-desc-container">
                <div className="movie-title-cl">{movie.EventTitle}</div>
                <div className="movie-desc">
                    <ul className="movie-desc-ul">
                        <li>{movie.EventGrpCensor}</li>
                        <li><span><i class="fa fa-heart heartcls" aria-hidden="true"></i></span>{`${movie.ratings.avgRating}%`}</li>
                        { movie.ChildEvents[0].Genre.map(i=><li className="movie-genre-cl">{i}</li>) }
                        <li>{movie.ChildEvents[0].ShowDate}</li>
                        <li><span><i class="fa fa-clock-o" aria-hidden="true"></i></span>{movie.ChildEvents[0].Duration}</li>
                    </ul>
                </div>
            </div>
        ):null;
    }
    // Creating List of Cinema Halls
    createCinemasList = () =>{
        const { cinemas, showTime, movie } = this.props;
      
        const cinemaList = [];
        for(let i=0;i<10;i++){
            let cinema = <div className="cinema-list-item">{}
                <div className="cinema-name"><span><i class="fa fa-heart-o heartcl" aria-hidden="true"></i></span>{cinemas[i].VenueName}</div>
                    <div>
                        <ul>
                            {           
                            showTime[i].map(time =>
                                {      
                                    return <Link to="/seats">
                                        <li className="show-time" onClick={()=>this.showSeats(cinemas[i].VenueName, time)}>{time}</li>
                                    </Link>
                                }) 
                            }
                        </ul>
                </div>
            </div>
            cinemaList.push(cinema);
        }
        return(
            <div className="cinema-list">
                {cinemaList}
            </div>
        )
    }

    render() {
        return (
            <div>
                <div className="cinema-movie-detail">{this.createCinemaMovieDetail()}</div>
                <div className="cinema-list-conatiner">{this.createCinemasList()}</div>
                
            </div>
        );
    }
}
 
function mapStateToProps(state){
    return {
        cinemas: state.cinemas.cinemas,
        showTime: state.cinemas.showTime,
        movie: state.movie
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({reciveTicketDetail:reciveTicketDetail},dispatch);
}
  
export default connect(mapStateToProps,mapDispatchToProps)(CinemaList);
 