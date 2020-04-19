import React from 'react';
import { Form, Button } from 'semantic-ui-react';

class Login extends React.Component {

  state = {
    username: '',
    password: ''
  }

  updateState = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    let user = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.login(user)
  }

  render() {
    return(
      <Form onSubmit={this.onSubmit}>
        <h1>Already have an account? Log In!</h1>
        <Form.Group className="form-column" widths='equal'>
          <Form.Input onInput={this.updateState} name="username"  label='Username' placeholder='Username' />
          <Form.Input onInput={this.updateState} name="password"  label='Password' placeholder='Password' />
          <Button>Log In!</Button>
        </Form.Group>
      </Form>
    )
  }
}

export default Login;