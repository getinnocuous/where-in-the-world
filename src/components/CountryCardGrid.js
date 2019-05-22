import React from 'react';
import CountryCard from './CountryCard';

const CountryCardGrid = props => {
  return (
    <section className="grid">
      {props.countriesData.map(country => (
        <CountryCard
          key={country.alpha3Code}
          countryCode={country.alpha3Code}
          countryFlag={country.flag}
          countryName={country.name}
          countryDetails={[
            {
              key: 'Population',
              val: country.capital
            },
            {
              key: 'Region',
              val: country.region
            },
            {
              key: 'Capital',
              val: country.population,
              number: true
            }
          ]}
        />
      ))}
    </section>
  );
};
export default CountryCardGrid;
