import React from 'react';
import './LoginContainer.css';
import { Segment, Grid, Divider, Form, Button } from 'semantic-ui-react';

// import Login from '../components/Login-Signup/Login';
// import Signup from '../components/Login-Signup/Signup';


const LoginContainer = (props) => {
  return(
    <>
    <div className="logo">Put logo here</div>
    <Segment>
      <Grid columns={2} relaxed='very'>
        <Grid.Column >
          {/* <Login 
            onSubmit={props.onSubmit} 
            onInput={props.updateState}
            /> */}
            <Form onSubmit={props.onLoginSubmit}>
              <h1>Already have an account? Log In!</h1>
              <Form.Group className="form-column" widths='equal'>
                <Form.Input onInput={props.onInput} name="username" fluid label='Username' placeholder='Username' />
                <Form.Input onInput={props.onInput} name="password" fluid label='Password' placeholder='Password' />
                <Button>Log In!</Button>
              </Form.Group>
            </Form>
        </Grid.Column>
        <Grid.Column>
          <Form onSubmit={props.onSignupSubmit}>
            <h1>Don't have an account? Register!</h1>
            <Form.Group className="form-column" widths='equal'>
              <Form.Input onInput={props.onInput} name="username" fluid label='Username' placeholder='Username' />
              <Form.Input onInput={props.onInput} name="email" fluid label='Email' placeholder='ontheroad@again.com' />
              <Form.Input onInput={props.onInput} name="password" fluid label='Password' placeholder='Password' />
              {/* <Form.Input onInput={this.updateState} name="password2" fluid label='Confirm Password' placeholder='Password' /> */}
              <Button>Sign Up!</Button>
            </Form.Group>
          </Form>
        </Grid.Column>
      </Grid>
      <Divider vertical> OR </Divider>
    </Segment>
    </>
  )
};

export default LoginContainer;