import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Trip from '../components/Trip/Trip';
// import Register from '../components/auth/Register/Register';
import LoginContainer from '../containers/LoginContainer';
import TripsContainer from '../containers/TripsContainer';
import ProfileContainer from '../containers/ProfileContainer';

const Routes = (props) => {
  console.log("routes", props)
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
        render={() => 
          ((props.loggedIn()) ? 
            (<Redirect to="/profile"/>) :
            (<LoginContainer 
              login={props.login}
              register={props.register}
              loggedIn={props.loggedIn()}/>))}/>
      <Route
        exact path='/trips'
        component={ TripsContainer }/>     
      <Route
        exact path='/trips/:tripId'
        component={ Trip }/>
      <Route
        exact path='/profile'
        render={() =>
          <ProfileContainer
            loggedIn={props.loggedIn()} 
            user={props.user}
            id={props.id}/>}/>
        {/* render={() => */}
        {/* //     (props.loggedIn ?
        //       (<ProfileContainer
        //         user={props.state.user}
        //         id={props.state.id}/>) :
        //         (<Redirect to="/login"/>))}/>   */}
    </Switch>
  )
}

export default Routes;