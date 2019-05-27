import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Details from './Details';

const StyledCountryCard = styled.article`
  border-radius: 5px;
  overflow: hidden;
  background: var(--elements);
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.03);
  height: 100%;
`;

const StyledCountryCardImagery = styled.div`
  height: 160px;
  background: red;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledCountryCardInner = styled.div`
  padding: 1.4rem;
`;

const StyledCountryCardTitle = styled.h3`
  margin: 0 0 1rem;
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--text);
`;

const CountryCard = props => {
  const { countryCode, countryName, countryFlag, countryDetails } = props;
  return (
    <Link to={`/country/${countryCode}`}>
      <StyledCountryCard>
        <StyledCountryCardImagery>
          <img src={countryFlag} alt={`Flag of ${countryName}`} />
        </StyledCountryCardImagery>
        <StyledCountryCardInner>
          <StyledCountryCardTitle>{countryName}</StyledCountryCardTitle>
          <Details details={countryDetails} />
        </StyledCountryCardInner>
      </StyledCountryCard>
    </Link>
  );
};

export default CountryCard;
