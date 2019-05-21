import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledToggleThemeButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.6rem;
  color: var(--text);

  svg {
    position: absolute;
    right: calc(100% + 0.75rem);
  }
`;

const ToggleThemeButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    darkMode
      ? (document.body.dataset.theme = 'dark')
      : (document.body.dataset.theme = 'light');
  });

  return (
    <StyledToggleThemeButton onClick={() => setDarkMode(!darkMode)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17">
        <path
          fillRule="evenodd"
          strokeWidth="1.25"
          fill={darkMode ? '#FFFFFF' : 'none'}
          stroke={darkMode ? '' : '#000000'}
          d="M12.5532143 11.815c-3.88464287 0-7.03392859-2.88717262-7.03392859-6.44678571 0-1.34291667.4475-2.58663691 1.21214286-3.61821429C3.69035714 2.69514881 1.5 5.33122024 1.5 8.43806548 1.5 12.3384821 4.94928571 15.5 9.20357143 15.5 12.5928571 15.5 15.4696429 13.4931548 16.5 10.70452381 15.375 11.4047917 14.0160714 11.815 12.5532143 11.815z"
        />
      </svg>
      {darkMode ? 'Light' : 'Dark'} Mode
    </StyledToggleThemeButton>
  );
};
export default ToggleThemeButton;
