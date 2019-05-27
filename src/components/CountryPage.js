import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import CountriesContext from '../context/CountriesContext';
import Button from './Button';

const StyledCountryPage = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 75px;
  margin-top: 5rem;
`;

const StyledCountryPageHeading = styled.h1`
  font-size: 3.2rem;
  line-height: 4.3rem;
  color: var(--text);
  margin: 0 0 2.4rem;
`;

const StyledCountryPageFlag = styled.div`
  width: 100%;
  height: 400px;
  max-width: 560px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledCountryPageDetails = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledCountryPageBorders = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
`;

const CountryPage = ({ match }) => {
  const [country, setCountry] = useState({});
  const countryID = match.params.id.toUpperCase();
  const { countries, loadingData } = useContext(CountriesContext);
  useEffect(() => {
    const selectedCountry = countries.findIndex(
      country => country.alpha3Code === countryID
    );
    setCountry(countries[selectedCountry]);
  }, [countries, countryID]);
  return (
    <React.Fragment>
      <Button to={'/'} text={'Home'} />
      {loadingData ? (
        'Loading'
      ) : (
        <StyledCountryPage>
          <StyledCountryPageFlag>
            <img src={country.flag} alt={`Flag of ${country.name}`} />
          </StyledCountryPageFlag>
          <StyledCountryPageDetails>
            <StyledCountryPageHeading>{country.name}</StyledCountryPageHeading>
            {country.borders ? (
              <StyledCountryPageBorders>
                <p>Border countries:</p>
                {country.borders.map(border => (
                  <Button
                    key={border}
                    to={`/country/${border}`}
                    text={border}
                  />
                ))}
              </StyledCountryPageBorders>
            ) : null}
          </StyledCountryPageDetails>
        </StyledCountryPage>
      )}
    </React.Fragment>
  );
};

export default CountryPage;
