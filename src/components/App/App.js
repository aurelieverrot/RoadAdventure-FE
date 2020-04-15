import React from 'react';
import './App.css';
import Routes from '../../config/routes';
import NavBar from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
// import About from '../About/About';
// import Home from '../../components/Home/Home';
import UserApi from '../../api/UserApi';
import jwt_decode from 'jwt-decode';
import setAuthHeader from '../../utils/setAuthHeader';
// import LoginContainer from '../../containers/LoginContainer';
// import TripsContainer from '../../containers/TripsContainer';

class App extends React.Component {

  state = {
    username: '',
    password: '',
    email: '',
    
  }

  login = () => {
    console.log("state:", this.state) //=> state is updated with input
    UserApi.login(this.state)
    .then(res => {
        // this.props.loggedIn(res.data.user);
        if (res.status === 200) {
          const token = res.data.token;
          localStorage.setItem('jwtToken', token);
          setAuthHeader(token);
          const decoded = jwt_decode(token);
          this.setState({
            username: decoded.username,
            password: decoded.password
          })
        }
    })
    .catch(err => console.log(err));
  }

  register = () => {
    // console.log("state:", this.state) => state is updated with input
    UserApi.signup(this.state)
    .then(res => {
        // this.props.loggedIn(res.data.user);
        if (res.status === 200) {
          const token = res.data.token;
          localStorage.setItem('jwtToken', token);
          setAuthHeader(token);
          const decoded = jwt_decode(token);
          this.setState({
            username: decoded.username,
            password: decoded.password,
            // email: email,
          })
        }
    })
    .catch(err => console.log(err));
  }

  logout = () => {
    localStorage.removeItem('jwtToken');
    setAuthHeader();
    this.setState({
      username: '',
      password: '',
      email: ''
    })
  }

  componentDidMount() {
    // if a token exists, decode it and set it to our state
    if (localStorage.jwtToken) {
      setAuthHeader(localStorage.jwtToken);
      const decoded = jwt_decode(localStorage.getItem('jwtToken'));
      this.setState({
        username: decoded.username,
        password: decoded.password
      })
    }
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

  // updateState = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  //   console.log(this.state)
  // }

  // onLoginSubmit = (e) => {
  //   e.preventDefault()
  //   // if (this.validateFields()) {
  //     this.login()
  //   // }
  // }

  // onSignupSubmit = (e) => {
  //   e.preventDefault()
  //   // if (this.validateFields()) {
  //     this.register()
  //   // }
  // }

  render () {
    return (
      <div className="App">
        <NavBar onClick={this.logout}/>
        <Routes     
          login={this.login} 
          register={this.register}       
          // onLoginSubmit={this.onLoginSubmit} 
          // onSignupSubmit={this.onSignupSubmit}
          // onInput={this.updateState}
        />
        <Footer />
      </div>
    )};
}

export default App;
