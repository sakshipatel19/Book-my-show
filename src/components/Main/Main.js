import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../../containers/Home/Home';
import Movie from '../../containers/Movie/Movie'
import CinemaList from '../../containers/CinemaList/CinemaList';
import Selectseat from '../../containers/SeatSelect/SeatSelect';
import BookingConfirm from '../BookingConfirm/BookingConfirm';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/movie' component={Movie} />
      <Route path='/cinemalist' component={CinemaList} />
      <Route path='/seats' component={Selectseat} />
      <Route path='/confirmbooking' component={BookingConfirm} />
    </Switch>
  </main>
)

export default Main;
