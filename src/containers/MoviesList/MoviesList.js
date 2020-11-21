import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { requestMovieList, reciveMovieData } from '../../actions';
import './MoviesList.css';
class MoviesList extends Component {
	componentDidMount() {
		this.props.requestMovieList();
	}
	createMoviesList = () => {
		return this.props.moviesList.map(movie => {
			let urlCode = movie.ChildEvents[0].EventImageCode;
			let imgUrl = `https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/${urlCode}.jpg`;
			return (
				<Link to={'/movie/' + movie.EventCode}>
					<div
						className='movies-card'
						onClick={() => this.props.reciveMovieData(movie)}
					>
						<div className='movie-img-container'>
							<img className='movie-img' src={imgUrl} />
							<div className='movie-caption'>
								<span>
									<i className='fa fa-heart heart-cls'></i>
									{` ${movie.ratings.avgRating}%`}
								</span>
								<span className='movie-title'>{movie.EventTitle}</span>
							</div>
							<div className='movie-genre'>
								{movie.ChildEvents[0].EventGenre}
							</div>
						</div>
					</div>
				</Link>
			);
		});
	};
	render() {
		return (
			<div className='movies-list-conatiners'>{this.createMoviesList()}</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		moviesList: state.movieList.moviesList
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{ requestMovieList: requestMovieList, reciveMovieData: reciveMovieData },
		dispatch
	);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(MoviesList));
