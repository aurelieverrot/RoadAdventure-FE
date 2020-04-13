import React from 'react';
import './App.css';
import Routes from '../../config/routes';
import NavBar from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import About from '../About/About';
import Home from '../../components/Home/Home';
import LoginContainer from '../../containers/LoginContainer';
import TripContainer from '../../containers/TripContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Home />
        <About />
        <LoginContainer />
        <TripContainer />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
