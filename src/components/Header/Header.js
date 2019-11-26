import React from 'react';

import SearchNav from '../../containers/SearchNav/SearchNav';
import './Header.css'
import EventTabs from '../EventsTab/EventsTab';

const Header = (props) => {
    return(
        <React.Fragment>
        <header className="App-header">
            <div className="inner-header">
                <div className="brand">
                   <span className="white">book</span><span className="red">my</span><span className="white">show</span>
                </div>
                <div className="header-col">
                    <SearchNav/>
                </div>
                <div className="header-right-section">
                    <div className="login-profile">
                        <div className="inner-nav">
                            <ul>
                                <li className="loc-container">
                                    <select>
                                        <option>Bangalore</option>
                                    </select>
                                </li>
                                <li className="lang-container">
                                    <select>
                                        <option>Hindi</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                        <ul>
                            <li className="login">
                                Sign In
                            </li>
                            <li>
                                <i className="fa fa-bars bar-icon"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        <EventTabs/>
    </React.Fragment>
    )
}

export default Header;