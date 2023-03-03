//import logo from './logo.svg';
//import './App.css';
import React, { useEffect, useState } from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';

import './style.css';

import mockData from './assets/mockdata';



function App() {

 

  return (
    <>
      <Navbar></Navbar>
      <Main ></Main>
    </>
    
  );
}



export default App;
