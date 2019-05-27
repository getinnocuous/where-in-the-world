import React, { useContext } from 'react';
import styled from 'styled-components';
import CountriesContext from '../context/CountriesContext';
import CountryCard from './CountryCard';

const StyledCountryCardGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;
  @media screen and (min-width: 768px) {
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 992px) {
    grid-gap: 50px;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (min-width: 1200px) {
    grid-gap: 75px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const CountryCardGrid = () => {
  const { countries, loadingData } = useContext(CountriesContext);
  return loadingData ? (
    'Loading'
  ) : (
    <StyledCountryCardGrid>
      {countries.map(country => (
        <CountryCard
          key={country.alpha3Code}
          countryCode={country.alpha3Code}
          countryFlag={country.flag}
          countryName={country.name}
          countryDetails={[
            {
              key: 'Population',
              val: country.population,
              number: true
            },
            {
              key: 'Region',
              val: country.region
            },
            {
              key: 'Capital',
              val: country.capital
            }
          ]}
        />
      ))}
    </StyledCountryCardGrid>
  );
};
export default CountryCardGrid;
