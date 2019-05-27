import React from 'react';
import styled from 'styled-components';

const StyledCountryCardDetails = styled.dl`
  font-size: ${props => (props.fontSize ? props.fontSize : '1.4rem')};
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
  const { details } = props;
  return (
    <StyledCountryCardDetails {...props}>
      {details.map(detail => {
        return (
          <StyledCountryCardDetail key={detail.key}>
            <StyledCountryCardDetailsItemKey>
              {detail.key}
              {': '}
            </StyledCountryCardDetailsItemKey>
            <StyledCountryCardDetailsItemValue>
              {detail.number ? detail.val.toLocaleString('en-GB') : detail.val}
            </StyledCountryCardDetailsItemValue>
          </StyledCountryCardDetail>
        );
      })}
    </StyledCountryCardDetails>
  );
};

export default CountryCard;
