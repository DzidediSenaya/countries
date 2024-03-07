import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Aboutpage from './pages/aboutpage';
import Homepage from './pages/homepage';
import Countriespage from './pages/countriespage';
import Gallery from './pages/gallery';
import Country from './pages/country';
import './App.css';



function App() {

  return (

    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/about' element={<Aboutpage />}></Route>
          <Route path='/countries' element={<Countriespage />}></Route>
          <Route path='/gallery' element={<Gallery />}></Route>
          <Route path='/country/:countryName' element={<Country/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;