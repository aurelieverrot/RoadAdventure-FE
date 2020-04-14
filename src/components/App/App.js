import React from 'react';
import './App.css';
import Routes from '../../config/routes';
import NavBar from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import About from '../About/About';
import Home from '../../components/Home/Home';
import LoginContainer from '../../containers/LoginContainer';
import TripsContainer from '../../containers/TripsContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Home />
        <About />
        <LoginContainer />
        <TripsContainer />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
