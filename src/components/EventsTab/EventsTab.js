import React from 'react';

import './EventsTab.css';

const EventTabs = () =>{
  return (
    <div className="tab-container">
      <ul className="left-tabs">
        <li className="tabs">Movies</li>
        <li className="tabs">Events</li>
        <li className="tabs">Plays</li>
        <li className="tabs">Sports</li>
        <li className="tabs">Activities</li>
        <li className="tabs">Monuments</li>
        <li className="tabs">Fanhood</li>
        <li className="tabs">Buzz</li>
      </ul>
      <ul className="right-tabs">
        <li className="tabs">Corporates</li>
        <li className="tabs">Offers</li>
        <li className="tabs">Gift Cards</li>
      </ul>
    </div>
  );
}

export default EventTabs;
