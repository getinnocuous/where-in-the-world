import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Global from './Global';
import CountryCardGrid from './components/CountryCardGrid';
import Navbar from './components/Navbar';
import CountryPage from './components/CountryPage';
import Page from './components/Page';

import './styles/main.css';

function App() {
  const [countriesData, setCountriesData] = useState([]);
  useEffect(() => {
    fetch(`${Global.API}/all`)
      .then(resp => resp.json())
      .then(data => {
        setCountriesData(data);
        console.log(`Fetched endpoint: ${Global.API}`);
      });
  }, []);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Page>
          <Route
            exact
            path="/"
            render={routeProps => (
              <CountryCardGrid {...routeProps} countriesData={countriesData} />
            )}
          />
          <Route path="/country/:id" component={CountryPage} />
        </Page>
      </Router>
    </div>
  );
}

export default App;
