import React from 'react';
import { Form, Button } from 'semantic-ui-react';

class Signup extends React.Component {

  state = {
    username: '',
    email: '',
    password: '',
}

  // validateFields = () => {
  //   let keys = []
  //   Object.keys(this.state).map(key => keys.push(key));
  //   let valid = true
  //   keys.map(key => {
  //     console.log('keys:', keys)
  //       let field = document.getElementById(key);
  //       field.classList.remove('error');
  //       if (this.state[key] === '') {
  //           valid = false;
  //           // add class error to fields
  //           field.classList.add('error');
  //           // add label
  //       }
  //   })
  //   return valid;
  // }

  updateState = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    // if (this.validateFields()) {
      let newUser = {
        username: this.state.username,
        password: this.state.password
      }
      this.props.register(newUser)
    // }
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