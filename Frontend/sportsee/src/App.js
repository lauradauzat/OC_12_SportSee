//import logo from './logo.svg';
//import './App.css';
import React, { useEffect, useState} from 'react';

import Main from './components/Main';
import Navbar from './components/Navbar';
import './style.css';


function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');


  const [dataAPI, setDataAPI] = useState(null);
  const url = `http://localhost:3001/user/${id}`; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response0 = await fetch(url);
        const mainData = await response0.json();
        const response1 = await fetch(`${url}/activity`);
        const activityData = await response1.json();
        const response2 = await fetch(`${url}/average-sessions`);
        const averageSessionsData = await response2.json();
        const response3 = await fetch(`${url}/performance`);
        const performanceData = await response3.json();

        setDataAPI(prevData => ({
          ...prevData,
          main: mainData,
          activity: activityData,
          averageSessions: averageSessionsData,
          performance: performanceData
        }));
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id, url]);


  return (
    <>
      <Navbar></Navbar>
      <Main dataAPI={dataAPI} id={id}></Main>
    </>
    
  );
}



export default App;
