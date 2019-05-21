import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Global from './Global';
import CountryCardGrid from './components/CountryCardGrid';
import Navbar from './components/Navbar';

import './styles/main.css';

function App() {
  const [countriesData, setCountriesData] = useState([]);
  useEffect(() => {
    fetch(Global.API)
      .then(resp => resp.json())
      .then(data => {
        setCountriesData(data);
        // console.log(data);
      });
  }, []);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <CountryCardGrid countriesData={countriesData} />
      </Router>
    </div>
  );
}

export default App;
