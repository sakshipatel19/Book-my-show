
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 
import { Link } from 'react-router-dom';

import { reciveCinemaMovieData } from '../../actions';
import './Movie.css';
class Movie extends Component {

    createMovieComponent = () =>{
        const { movie } = this.props;
        let urlCode = movie.ChildEvents ? movie.ChildEvents[0].EventImageCode : localStorage.getItem('movieImg');
        localStorage.setItem('movieImg', urlCode);
        let imgUrl = `https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/${urlCode}.jpg`;
        return (
            <div className="container">
                <div className="event-cover">
                    <h1 className="event-title">{movie.EventTitle}</h1>
                    <div className="cmn languages">{movie.ChildEvents[0].EventLanguage}</div>
                    <div className="cmn event-type">
                        {movie.ChildEvents ? movie.ChildEvents[0].Genre.map(genre =><span className="types">{genre}</span>):null}
                    </div>
                    <div className="cmn time-zone">
                        <span className="date">{movie.ChildEvents? movie.ChildEvents[0].ShowDate:null}</span>
                        <span className="time">{movie.ChildEvents? movie.ChildEvents[0].Duration:null}</span>
                    </div>
                </div>
                <div className="event-actions">
                    <div className="actions">
                        <div>
                            <span><i className="fa fa-heart votes"></i></span>
                            <span className="votes-per">{`${movie.ratings.avgRating}%`}</span>
                        </div>
                        <div className="action-label">
                            {`${movie.ratings.totalVotes} votes`}
                        </div>
                    </div>
                    <div className="actions">
                        <div>
                            <span className="cri-rating">3.5</span>
                            <span><i className="fa fa-heart-o"></i></span>
                        </div>
                        <div className="action-label">
                            Critics ratings
                        </div>
                    </div>
                    <div className="actions">
                        <div>
                            <span className="cri-rating">3.5</span>
                            <span><i className="fa fa-heart-o"></i></span>
                        </div>
                        <div className="action-label">
                            users ratings
                        </div>
                    </div>
                    <div className="actions">
                        <div>
                            <span><i className="fa fa-heart-o"></i></span>
                            <span className="user-rating">0.0</span>
                        </div>
                        <div className="action-label">
                            rate it
                        </div>
                    </div>
                    <Link to='/cinemalist'><div className="book-ticket-btn" onClick={()=>this.props.reciveCinemaMovieData}>Book Ticktes</div></Link>
                </div>
                <div className="event-preview">
                    <img style={{ height: '310px',width: '230px',position: 'absolute',top: '70px',left: '10px'}} alt={urlCode} src={imgUrl}/>
                </div>
                <div className="summary">
                    <ul className="summary-tab-container">
                        <li className="summary-tabs active-tab">Summary</li>
                        <li className="summary-tabs">User Reviews (835)</li>
                        <li className="summary-tabs">Critic Reviews (4)</li>
                    </ul>
                    <h3 className="synopsis">Synopsis</h3>
                    <p className="para">
                        Three years after the events of Frozen, Elsa begins to hear strange voices calling to her from the forest and all of a sudden Arendelle finds itself in danger. Elsa, Anna, Kristoff, Olaf and Sven must go beyond Arendelle to find the origin of Elsa`s powers and save their kingdom.
                    </p>
                </div>
            </div>
        );
    }
    render() { 
        return ( 
            <div className="movie-conatiner">{this.createMovieComponent()}</div>
        );
    }
}
 
function mapStateToProps(state){
    return {
        movie : state.movie,
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({reciveCinemaMovieData:reciveCinemaMovieData},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Movie);
 