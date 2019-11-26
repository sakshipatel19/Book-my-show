import React, { Component } from 'react';

import './Home.css';
import MoviesList from '../MoviesList/MoviesList';
import LeftMenu from '../../components/LeftMenu/LeftMenu';
class Home extends Component {

    render() { 
        return (  
            <div className="home-container">
                <div className="movies-container">
                    <h2>Movies</h2>
                    <LeftMenu/>
                    <MoviesList />
                </div>
            </div>
        );
    }
}
 
export default Home;