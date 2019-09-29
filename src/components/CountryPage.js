import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Global from '../Global';
import UseFetch from '../hooks/UseFetch';
import CountriesContext from '../context/CountriesContext';
import Button from './Button';


const StyledCountryPage = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;
  margin-top: 5rem;
  @media screen and (min-width: 992px) {
    grid-gap: 75px;
    grid-template-columns: 1fr 1fr;
  }
`;

const StyledCountryPageHeading = styled.h1`
  font-size: 3.2rem;
  line-height: 4.3rem;
  color: var(--text);
  margin: 0 0 2.4rem;
`;

const StyledCountryPageFlag = styled.div`
  height: 230px;
  width: 100%;
  @media screen and (min-width: 768px) {
    height: 400px;
  }
  @media screen and (min-width: 992px) {
    max-width: 560px;
  }
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
  flex-wrap: wrap;
  @media screen and (min-width: 992px) {
    flex-wrap: nowrap;
  }
`;

const StyledCountryPageBordersList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: -1rem;
  padding: 0;
  list-style: none;
`;

const StyledCountryPageBordersListItem = styled.li`
  padding: 0.5rem;
`;

const StyledCountryPageBordersLabel = styled.p`
  font-size: 1.6rem;
  color: var(--text);
  margin: 0 2rem 0 0;
  align-self: flex-start;
  flex-shrink: 0;
  width: 100%;
  margin-bottom: 2rem;
  @media screen and (min-width: 992px) {
    width: auto;
    margin-bottom: 0;
  }
`;

const CountryPage = ({ match }) => {
  const countryID = match.params.id.toUpperCase();
  const [country, loadingCountryData] = UseFetch(`${Global.API}/alpha/${countryID}`, countryID);
  const { countryNames, loadingData } = useContext(CountriesContext);

  const getCountryName = name => {
    const selectedCountry = countryNames.findIndex(
      targetCountry => targetCountry.alpha3Code === name
    );
    return countryNames[selectedCountry].name;
  };

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
            <StyledCountryPageHeading>
              {country.name}
            </StyledCountryPageHeading>
            {country.borders ? (
              <StyledCountryPageBorders>
                <StyledCountryPageBordersLabel>
                  Border countries:{' '}
                </StyledCountryPageBordersLabel>
                <StyledCountryPageBordersList>
                  {country.borders.map(border => (
                    <StyledCountryPageBordersListItem key={border}>
                      <Button
                        to={`/country/${border}`}
                        text={getCountryName(border)}
                      />
                    </StyledCountryPageBordersListItem>
                  ))}
                </StyledCountryPageBordersList>
              </StyledCountryPageBorders>
            ) : null}
          </StyledCountryPageDetails>
        </StyledCountryPage>
      )}
    </React.Fragment>
  );
};

export default CountryPage;
