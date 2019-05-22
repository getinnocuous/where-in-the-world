import React, { useState, useEffect } from 'react';
import Global from '../Global';
import styled from 'styled-components';
import Button from './Button';

const StyledCountryPage = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 75px;
`;

const CountryPage = ({ match }) => {
  const countryID = match.params.id;
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch(`${Global.API}/alpha/${countryID}`)
      .then(resp => resp.json())
      .then(data => {
        setCountry(data);
      });
  }, [countryID]);
  return (
    <React.Fragment>
      <Button to={'/'} text={'Home'} />
      <StyledCountryPage>
        <img src={country.flag} width="540" alt={`Flag of ${country.name}`} />
        <article>
          <h1>I am a country page for {country.name}</h1>
          <p>
            {country.borders
              ? country.borders.map(border => (
                  <Button
                    key={border}
                    to={`/country/${border}`}
                    text={border}
                  />
                ))
              : null}
          </p>
        </article>
      </StyledCountryPage>
    </React.Fragment>
  );
};

export default CountryPage;
