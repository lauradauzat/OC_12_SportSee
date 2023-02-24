//import logo from './logo.svg';
//import './App.css';
import React, { useEffect, useState } from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';

import './style.css';




function App() {


    const [data, setData] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const response = await fetch('http://localhost:3001/user/18');
        const json = await response.json();
        setData(json);
      }
      fetchData();
    }, []);


  return (
    <>
      <Navbar></Navbar>
      <Main ></Main>
    </>
    
  );
}



export default App;
