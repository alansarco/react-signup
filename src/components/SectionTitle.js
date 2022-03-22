import React from 'react';
import styled from 'styled-components';
import themeList from './themeList';

const SectionStyles = styled.h3`
  font-size: 2.7rem;
  font-weight: 600;
  letter-spacing: 5px;
  color: ${({ theme: { theme } }) =>
    theme === themeList.light ? 'var(--dark3)' : 'var(--white)'};
  @media only screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

function SectionTitle({ children, ...rest }) {
  return <SectionStyles {...rest}>{children}</SectionStyles>;
}

export default SectionTitle;
