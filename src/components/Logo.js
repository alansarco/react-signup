import React from 'react';
import styled from 'styled-components';
import img from '../assets/images/logo.svg';

const LogoStyles = styled.div`
  max-width: 50px;
  img {
    border-radius: 25px;
    box-shadow: 0 3px 7px 0 black;
    width: 100%;
    height: 100%;
  }
`;

export default function Logo() {
  return (
    <LogoStyles>
      <img src={img} alt="logo" />
    </LogoStyles>
  );
}
