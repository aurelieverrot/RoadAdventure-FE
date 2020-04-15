import React from 'react';
import './LoginContainer.css';
import { Segment, Grid, Divider } from 'semantic-ui-react';

import Login from '../components/Login-Signup/Login';
import Signup from '../components/Login-Signup/Signup';


const LoginContainer = (props) => {
  return(
    <>
    <div className="logo">Put logo here</div>
    <Segment>
      <Grid columns={2} relaxed='very'>
        <Grid.Column >
          <Login 
            login={props.login}
            />
        </Grid.Column>
        <Grid.Column>
          <Signup 
              register={props.register}
              />
        </Grid.Column>
      </Grid>
      <Divider vertical> OR </Divider>
    </Segment>
    </>
  )
};

export default LoginContainer;