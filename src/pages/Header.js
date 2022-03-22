import React from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import themeList from '../components/themeList';
import ThemeSwitcher from '../components/ThemeSwitcher';

const HeaderStyles = styled.header`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  background-color: ${({ theme: { theme } }) =>
    theme === themeList.light ? 'var(--white)' : 'var(--dark3)'};
  .header_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  @media only screen and (max-width: 768px) {
    box-shadow: 0 0 7px 0 black;
  }
`;
export default function Header() {
  return (
    <HeaderStyles>
      <div className="container">
        <div className="header_container">
          <div>
            <Logo />
          </div>
          <div className="wrapper">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
}
