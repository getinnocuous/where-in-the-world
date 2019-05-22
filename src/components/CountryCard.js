import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledCountryCard = styled.article`
  border-radius: 5px;
  overflow: hidden;
  background: var(--elements);
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.03);
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

const StyledCountryCardDetails = styled.ul`
  font-size: 1.4rem;
  list-style: none;
  padding: 0;
  margin: 0;
  color: var(--text);
`;

const StyledCountryCardDetailsItem = styled.li`
  margin-bottom: 0.8rem;
  font-weight: 300;
  b {
    font-weight: 600;
  }
`;

const CountryCard = props => {
  const { countryDetails } = props;
  console.log(countryDetails);
  return (
    <Link to={`/country/${props.countryCode}`}>
      <StyledCountryCard>
        <StyledCountryCardImagery>
          <img src={props.countryFlag} alt={`Flag of ${props.countryName}`} />
        </StyledCountryCardImagery>
        <StyledCountryCardInner>
          <StyledCountryCardTitle>{props.countryName}</StyledCountryCardTitle>
          <StyledCountryCardDetails>
            {countryDetails.map(detail => {
              return (
                <StyledCountryCardDetailsItem>
                  <b>{detail.key}:</b>{' '}
                  {detail.number
                    ? detail.val.toLocaleString('en-GB')
                    : detail.val}
                </StyledCountryCardDetailsItem>
              );
            })}
          </StyledCountryCardDetails>
        </StyledCountryCardInner>
      </StyledCountryCard>
    </Link>
  );
};

export default CountryCard;
