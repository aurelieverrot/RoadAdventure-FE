import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from '../components/Home/Home';
import About from '../components/About/About';
// import Register from '../components/auth/Register/Register';
import LoginContainer from '../containers/LoginContainer';

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
    </Switch>
  )
}

export default Routes;