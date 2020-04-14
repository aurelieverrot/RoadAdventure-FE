import React from 'react';
import userApi from '../../api/UserApi';
import { Form, Button } from 'semantic-ui-react';

class Login extends React.Component {

  state = {
    username: '',
    password: ''
  }

  login = () => {
    // console.log("state:", this.state) => state is updated with input
    userApi.login(this.state)
    .then(res => {
        this.props.loggedIn(res.data.user);
    });
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
      console.log('clicked')
      this.login()
    // }
  }


  render () {
    return(
      <Form onSubmit={this.onSubmit}>
        <h1>Already have an account? Log In!</h1>
        <Form.Group className="form-column" widths='equal'>
          <Form.Input onInput={this.updateState} name="username" fluid label='Username' placeholder='Username' />
          <Form.Input onInput={this.updateState} name="password" fluid label='Password' placeholder='Password' />
          <Button>Log In!</Button>
        </Form.Group>
      </Form>
    )
  }
}

export default Login;