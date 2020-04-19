import React from 'react';
import './App.css';
import Routes from '../../config/routes';
import NavBar from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import UserApi from '../../api/UserApi';
import jwt_decode from 'jwt-decode';
import setAuthHeader from '../../utils/setAuthHeader';

class App extends React.Component {
  
  login = (user) => {
    console.log("App: state at login:", this.state) //=> state is updated with input
    UserApi.login(user)
    .then(res => {
        // this.props.loggedIn(res.data.user);
        if (res.status === 200) {
          const token = res.data.token;
          localStorage.setItem('jwtToken', token);
          setAuthHeader(token);
          const decoded = jwt_decode(token);
          this.setState({
            user: decoded.username,
            id: decoded._id
          })
        }
    })
    .catch(err => console.log(err));
  }

  register = (user) => {
    UserApi.signup(user)
    .then(res => {
        if (res.status === 200) {
          const token = res.data.token;
          localStorage.setItem('jwtToken', token);
          setAuthHeader(token);
          const decoded = jwt_decode(token);
          this.setState({
            user: decoded.username,
            id: decoded._id
          })
        }
    })
    .catch(err => console.log(err));
  }

  logout = () => {
    localStorage.removeItem('jwtToken');
    setAuthHeader();
    this.setState({
      user: null,
      id: null, 
      loggedIn: false 
    })
  }

  componentWillMount() {
    // if a token exists, decode it and set it to our state
    let newState = {
      user: '',
      id: ''
    }
    if (localStorage.jwtToken) {
      setAuthHeader(localStorage.jwtToken);
      const decoded = jwt_decode(localStorage.getItem('jwtToken'));
      newState = {
        user: decoded.username,
        id: decoded._id
      }
    }
    this.setState(newState)
  }
  
  loggedIn = () => {
    return localStorage.getItem('jwtToken') !== null;
  }

  render () {
    return (
      <div className="App">
        <NavBar 
          user={this.state.user}
          loggedIn={this.loggedIn} 
          logout={this.logout}
          />
        <Routes     
          login={this.login} 
          register={this.register}       
          user={this.state.user}
          id={this.state.id}
          loggedIn={this.loggedIn}
          />
        <Footer />
      </div>
    )};
}

export default App;
