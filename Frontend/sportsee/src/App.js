
import React, { useEffect, useState} from 'react';

import Main from './components/Main';
import Navbar from './components/Navbar';
import './style.css';
import { fetchData } from './service';
/**
 * The main application component.
 *
 * @component
 */

function App() {
   /**
   * The ID parameter obtained from the URL query string.
   *
   * @type {string|null}
   */
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');


  /**
   * The data retrieved from the API.
   *
   * @type {object|null}
   * @property {object} main - The user's main data.
   * @property {object[]} activity - The user's activity data.
   * @property {object[]} averageSessions - The user's average session data.
   * @property {object[]} performance - The user's performance data.
   */
  const [dataAPI, setDataAPI] = useState(null);
  const url = `http://localhost:3001/user/${id}`; 

  useEffect(() => {
    // Check if id is not null before fetching data
    if (id !== null) {
      const fetchDataFromAPI = async () => {
        const data = await fetchData(url, id); // Call the fetchData function from api.js
        setDataAPI(data);
      };
      fetchDataFromAPI();
    }
  }, [id, url]);

  return (
    <>
      <Navbar></Navbar>
      <Main dataAPI={dataAPI} id={id}></Main>
    </>
    
  );
}


export default App;
