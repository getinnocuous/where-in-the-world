import React from 'react';
import styled from 'styled-components';
import ToggleThemeButton from './ToggleThemeButton';

const StyledNavbar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--navbarHeight);
  background: var(--elements);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);
`;

const StyledNavbarInner = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 100%; */
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 40px;
  padding-right: 40px;
`;

const StyledNavbarHeading = styled.h1`
  font-size: 2.4rem;
  line-height: 3.2rem;
  font-weight: 800;
  color: var(--text);
  margin: 0;
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledNavbarInner>
        <StyledNavbarHeading>Where in the world?</StyledNavbarHeading>
        <ToggleThemeButton />
      </StyledNavbarInner>
    </StyledNavbar>
  );
};
export default Navbar;
