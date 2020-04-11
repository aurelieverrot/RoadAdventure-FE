import React from 'react';
import './App.css';
import NavBar from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import About from '../About/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Footer />
    </div>
  );
}

export default App;
