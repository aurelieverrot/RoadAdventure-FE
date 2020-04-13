import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import userApi from '../../api/UserApi';
import { withRouter } from 'react-router-dom'

class Signup extends React.Component {

  state = {
    username: '',
    email: '',
    password: ''
}
  

  render() {
    return(
      <Form>
        <h1>Don't have an account? Register!</h1>
        <Form.Group className="form-column" widths='equal'>
          <Form.Input fluid label='Username' placeholder='Username' />
          <Form.Input fluid label='Email' placeholder='ontheroad@again.com' />
          <Form.Input fluid label='Password' placeholder='Password' />
          <Form.Input fluid label='Confirm Password' placeholder='Password' />
          <Button>Sign Up!</Button>
        </Form.Group>
      </Form>
    )
  }
}

export default Signup;