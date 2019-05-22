import React, { useEffect } from 'react';
import styled from 'styled-components';
import Button from './Button';

const CountryPage = ({ match }) => {
  const countryID = match.params.id;
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/alpha/${countryID}`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
      });
  });
  console.log(match);
  return (
    <div>
      <Button to={'/'} text={'Back'} />
      <h1>I am a country page for {countryID}</h1>
    </div>
  );
};

export default CountryPage;
