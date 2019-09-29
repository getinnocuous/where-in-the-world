import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CountriesContext from './context/CountriesContext';
import Global from './Global';
import UseFetch from './hooks/UseFetch';
import CountryCardGrid from './components/CountryCardGrid';
import Navbar from './components/Navbar';
import CountryPage from './components/CountryPage';
import Page from './components/Page';

import './styles/main.css';

function App() {
  const [countriesData, loadingData] = UseFetch(`${Global.API}/all`);

  return (
    <div className="App">
      <Router>
        <CountriesContext.Provider
          value={{
            loadingData: loadingData,
            countries: countriesData,
            countryNames: countriesData.map(country => {
              return {
                alpha3Code: country.alpha3Code,
                name: country.name
              };
            })
          }}
        >
          <Navbar />
          <Page>
            <Route exact path="/" component={CountryCardGrid} />
            <Route path="/country/:id" component={CountryPage} />
          </Page>
        </CountriesContext.Provider>
      </Router>
    </div>
  );
}

export default App;
