import React from 'react';
import './App.css';
import './input.css';

import Homepage from './elements/Homepage';
import Navbar from './elements/Navbar';
import DetailPage from './elements/DetailPage';
import FiturPage from './elements/FiturPage';
import HargaPage from './elements/HargaPage';
import AddPage from './elements/AddPage';
import FaqPage from './elements/FaqPage';
import FooterPage from './elements/FooterPage';

function App() {
  return (
    <div className="App relative bg-blue-700">
      <Navbar/>
      <Homepage/>
      <DetailPage/>
      <FiturPage/>
      <HargaPage/>
      <AddPage/>
      <FaqPage/>
      <FooterPage/>
    </div>
  );
}

export default App;
