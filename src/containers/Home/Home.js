import React, { Component } from 'react';

import './Home.css';
import MoviesList from '../MoviesList/MoviesList';
class Home extends Component {

    render() { 
        return (  
            <div className="home-container">
                <div className="movies-container">
                    <h2>Movies</h2>
                    <MoviesList />
                </div>
            </div>
        );
    }
}
 
export default Home;