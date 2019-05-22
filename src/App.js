import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Global from './Global';
import CountryCardGrid from './components/CountryCardGrid';
import Navbar from './components/Navbar';
import CountryPage from './components/CountryPage';

import './styles/main.css';

function App() {
  const [countriesData, setCountriesData] = useState([]);
  useEffect(() => {
    fetch(Global.API)
      .then(resp => resp.json())
      .then(data => {
        setCountriesData(data);
        console.log('fetched country data');
      });
  }, []);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route
          exact
          path="/"
          render={routeProps => (
            <CountryCardGrid {...routeProps} countriesData={countriesData} />
          )}
        />
        <Route path="/country/:id" component={CountryPage} />
      </Router>
    </div>
  );
}

export default App;
