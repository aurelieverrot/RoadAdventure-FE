import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Trip from '../components/Trip/Trip';
// import Register from '../components/auth/Register/Register';
import LoginContainer from '../containers/LoginContainer';
import TripsContainer from '../containers/TripsContainer';

const Routes = (props) => {
  return (
    <Switch>
      <Route
        exact path='/'
        component={ Home }
      />
       <Route
        exact path='/about'
        component={ About }
      />
      <Route
        exact path='/login'
        component={ LoginContainer }
      />
      <Route
        exact path='/trips'
        component={ TripsContainer }
      />     
      <Route
      exact path='/trips/:tripId'
      component={ Trip }
      />
    </Switch>
  )
}

export default Routes;