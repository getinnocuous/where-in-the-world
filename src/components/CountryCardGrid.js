import React from 'react';
import CountryCard from './CountryCard';
import styled from 'styled-components';

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

const CountryCardGrid = props => {
  return (
    <StyledCountryCardGrid>
      {props.countriesData.map(country => (
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
