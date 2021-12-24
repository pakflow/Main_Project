import React, { useState } from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ModalAuth from './Components/ModalAuth/ModalAuth';
import Home from './Components/pages/Home';
import './index.css';

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
     
    </div>
  );
};

export default App;