import React from 'react';
import './LoginContainer.css';
import { Segment, Grid, Divider, Form, Button } from 'semantic-ui-react';

const LoginContainer = () => {
  
  return(
    <Segment>
      <Grid columns={2} relaxed='very'>
        <Grid.Column >
          <Form>
            <Form.Group className="form-column" widths='equal'>
              <Form.Input fluid label='Username' placeholder='Username' error />
              <Form.Input fluid label='Password' placeholder='Password' />
              <Button>Log In!</Button>
            </Form.Group>
          </Form>
        </Grid.Column>
        <Grid.Column>
          <Form>
            <Form.Group className="form-column" widths='equal'>
              <Form.Input fluid label='Username' placeholder='Username' error />
              <Form.Input fluid label='Email' placeholder='ontheroad@again.com' error />
              <Form.Input fluid label='Password' placeholder='Password' />
              <Form.Input fluid label='Confirm Password' placeholder='Password' />
              <Button>Sign Up!</Button>
            </Form.Group>
          </Form>
        </Grid.Column>
      </Grid>
      <Divider vertical> OR </Divider>
    </Segment>
  )
};

export default LoginContainer;