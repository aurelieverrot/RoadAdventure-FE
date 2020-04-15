// import React from 'react';
// import { Form, Button } from 'semantic-ui-react';
// import UserApi from '../../api/UserApi';
// import jwt_decode from 'jwt-decode';

// class Signup extends React.Component {

//   state = {
//     username: '',
//     email: '',
//     password: '',
//     // password2: ''
// }
  
//   // register = () => {
//   //   // console.log("state:", this.state) => state is updated with input
//   //   UserApi.signup(this.state)
//   //   .then(res => {
//   //       // this.props.loggedIn(res.data.user);
//   //       if (res.status === 200) {
//   //         const token = res.data.token;
//   //         localStorage.setItem('jwtToken', token);
//   //         const decoded = jwt_decode(token);
//   //         this.setState({
//   //           user: decoded.username,
//   //           id: decoded._id
//   //         })
//   //       }
//   //   })
//   //   .catch(err => console.log(err));
//   // }

//   // validateFields = () => {
//   //   let keys = []
//   //   Object.keys(this.state).map(key => keys.push(key));
//   //   let valid = true
//   //   keys.map(key => {
//   //     console.log('keys:', keys)
//   //       let field = document.getElementById(key);
//   //       field.classList.remove('error');
//   //       if (this.state[key] === '') {
//   //           valid = false;
//   //           // add class error to fields
//   //           field.classList.add('error');
//   //           // add label
//   //       }
//   //   })
//   //   return valid;
//   // }

//   updateState = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value
//     })
//   }

//   onSubmit = (e) => {
//     e.preventDefault()
//     // if (this.validateFields()) {
//       console.log('clicked')
//       this.register()
//     // }
//   }

//   render() {
//     return(
//       // <Form onSubmit={this.onSubmit}>
//       //   <h1>Don't have an account? Register!</h1>
//       //   <Form.Group className="form-column" widths='equal'>
//       //     <Form.Input onInput={this.updateState} name="username" fluid label='Username' placeholder='Username' />
//       //     <Form.Input onInput={this.updateState} name="email" fluid label='Email' placeholder='ontheroad@again.com' />
//       //     <Form.Input onInput={this.updateState} name="password" fluid label='Password' placeholder='Password' />
//       //     {/* <Form.Input onInput={this.updateState} name="password2" fluid label='Confirm Password' placeholder='Password' /> */}
//       //     <Button>Sign Up!</Button>
//       //   </Form.Group>
//       // </Form>
//     )
//   }
// }

// export default Signup;