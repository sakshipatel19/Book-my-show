import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 

import './SearchNav.css';
import {requestMovieList} from '../../actions'
class SearchNav extends React.Component {
    state = { 
        searchText:''
    }
    componentDidMount(){
        this.props.requestMovieList();
    }
    handleChange =(event)=>{
        this.setState({
            searchText : event.target.value
        })
    }
    render() { 
        return ( 
            <div>
                <span className="search-icon">
                    <i className="fa fa-search errspan"></i>
                </span>
                <input type="text" placeholder="Search for Movies, Events, Plays, Sports and Activities" className="search-input" value ={this.state.searchText} onChange={(event)=>this.handleChange(event)}/>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({requestMovieList:requestMovieList},dispatch);
}
  
export default connect(null,mapDispatchToProps)(SearchNav);
 