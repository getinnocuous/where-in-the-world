import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const StyledCountryCardDetails = styled.dl`
  font-size: 1.4rem;
  list-style: none;
  padding: 0;
  margin: 0;
  color: var(--text);
`;

const StyledCountryCardDetail = styled.div`
  margin-bottom: 0.8rem;
`;

const StyledCountryCardDetailsItemKey = styled.dt`
  font-weight: 600;
  display: inline;
`;

const StyledCountryCardDetailsItemValue = styled.dd`
  font-weight: 300;
  margin: 0;
  display: inline;
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
          <StyledCountryCardDetails>
            {countryDetails.map(detail => {
              return (
                <StyledCountryCardDetail key={detail.key}>
                  <StyledCountryCardDetailsItemKey>
                    {detail.key}
                    {': '}
                  </StyledCountryCardDetailsItemKey>
                  <StyledCountryCardDetailsItemValue>
                    {detail.number
                      ? detail.val.toLocaleString('en-GB')
                      : detail.val}
                  </StyledCountryCardDetailsItemValue>
                </StyledCountryCardDetail>
              );
            })}
          </StyledCountryCardDetails>
        </StyledCountryCardInner>
      </StyledCountryCard>
    </Link>
  );
};

export default CountryCard;
