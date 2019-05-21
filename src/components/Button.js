import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled(Link)`
  display: inline-block;
  background: var(--elements);
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1);
  font-weight: 300;
  font-size: 1.4rem;
  color: var(--text);
  letter-spacing: 0;
  padding: 5px 27px;
  border-radius: 2px;
  transition: box-shadow var(--easing);
  &:hover {
    box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);
  }
`;

const Button = props => {
  return <StyledButton to={props.to}>{props.text}</StyledButton>;
};

export default Button;
