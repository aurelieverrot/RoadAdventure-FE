import React from 'react';
import { Form, Button } from 'semantic-ui-react';

const Login = () => {
  return(
    <Form>
      <h1>Already have an account? Log In!</h1>
      <Form.Group className="form-column" widths='equal'>
        <Form.Input fluid label='Username' placeholder='Username' />
        <Form.Input fluid label='Password' placeholder='Password' />
        <Button>Log In!</Button>
      </Form.Group>
    </Form>
  )
}

export default Login;