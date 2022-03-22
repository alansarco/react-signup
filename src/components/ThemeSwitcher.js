import React, { useContext } from 'react';
import styled from 'styled-components';
import { FiSun, FiMoon } from 'react-icons/fi';
import ThemeContext from './ThemeReducer';
import themeList from './themeList';

const ThemeSwitcherStyles = styled.div`
  label {
    --gap: 5px;
    --size: 20px;
    height: 30px;
    width: 65px;
    padding: 0 var(--gap);
    position: relative;
    cursor: pointer;
    box-shadow: 0 3px 7px 0 black;
    border-radius: 50px;
    background: var(--orange2);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon {
      height: var(--size);
      width: var(--size);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    svg {
      width: 75%;
      color: var(--white);
    }
  }
  input {
    width: 0;
    height: 0;
    display: none;
    visibility: hidden;
  }
  label::after {
    position: absolute;
    content: '';
    border-radius: 50%;
    transform: translateY(-50%);
    top: 50%;
    left: var(--gap);
    height: var(--size);
    width: var(--size);
    background-color: var(--orange);
    transition: 0.5s ease left;
    z-index: -1;
  }
  input:checked + label::after {
    left: calc(100% - var(--size) - var(--gap));
  }
`;

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <ThemeSwitcherStyles>
      <input
        type="checkbox"
        id="switcher"
        onChange={toggleTheme}
        checked={theme === themeList.dark}
      />
      <label htmlFor="switcher">
        <div className="icon">
          <FiSun />
        </div>
        <div className="icon">
          <FiMoon />
        </div>
      </label>
    </ThemeSwitcherStyles>
  );
}
