import React from 'react';
import './App.css';
import Routes from '../../config/routes';
import NavBar from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import UserApi from '../../api/UserApi';
import jwt_decode from 'jwt-decode';
import setAuthHeader from '../../utils/setAuthHeader';

class App extends React.Component {

  state = {
    user: '',
    id: '',
    
  }

  login = (user) => {
    console.log("state:", this.state) //=> state is updated with input
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
    // console.log("state:", this.state) => state is updated with input
    UserApi.signup(user)
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

  logout = () => {
    localStorage.removeItem('jwtToken');
    setAuthHeader();
    this.setState({
      username: '',
      id: '',
      
    })
  }

  componentDidMount() {
    // if a token exists, decode it and set it to our state
    if (localStorage.jwtToken) {
      setAuthHeader(localStorage.jwtToken);
      const decoded = jwt_decode(localStorage.getItem('jwtToken'));
      this.setState({
        user: decoded.username,
        id: decoded._id
      })
    }
  }
  
  render () {
    return (
      <div className="App">
        <NavBar onClick={this.logout}/>
        <Routes     
          login={this.login} 
          register={this.register}       
          
        />
        <Footer />
      </div>
    )};
}

export default App;
