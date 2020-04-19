import React from 'react';
import { Form, Button } from 'semantic-ui-react';

class Signup extends React.Component {

  state = {
    username: '',
    email: '',
    password: '',
}

  updateState = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    let newUser = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.register(newUser)
  }

  render() {
    return(
      <Form onSubmit={this.onSubmit}>
        <h1>Don't have an account? Register!</h1>
        <Form.Group className="form-column" widths='equal'>
          <Form.Input onInput={this.updateState} name="username" fluid label='Username' placeholder='Username' />
          <Form.Input onInput={this.updateState} name="email" fluid label='Email' placeholder='ontheroad@again.com' />
          <Form.Input onInput={this.updateState} name="password" fluid label='Password' placeholder='Password' />
          {/* <Form.Input onInput={this.updateState} name="password2" fluid label='Confirm Password' placeholder='Password' /> */}
          <Button>Sign Up!</Button>
        </Form.Group>
      </Form>
    )
  }
}

export default Signup;