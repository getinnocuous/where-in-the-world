import React from 'react';
import CountryCard from './CountryCard';

const CountryCardGrid = props => {
  return (
    <section className="grid">
      {props.countriesData.map(country => (
        <CountryCard
          key={country.alpha3Code}
          countryFlag={country.flag}
          countryName={country.name}
          countryCapital={country.capital}
          countryRegion={country.region}
          countryPopulation={country.population}
        />
      ))}
    </section>
  );
};
export default CountryCardGrid;
