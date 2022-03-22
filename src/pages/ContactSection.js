import React from 'react';
import styled from 'styled-components';
import FormField from '../components/FormField';
import themeList from '../components/themeList';
import img from '../assets/images/stars.svg';

const ContactSectionStyles = styled.div`
  padding: 9rem 0;
  padding-bottom: 5rem;
  .clip_bg {
    height: 100%;
    width: 100%;
    position: fixed;
    background-color: ${({ theme: { theme } }) =>
      theme === themeList.light ? 'var(--dark3)' : 'var(--white)'};
    clip-path: polygon(100% 0, 75% 50%, 100% 100%, 0 100%, 28% 72%, 0 30%);
    z-index: -5;
    left: 0;
    top: 0;
  }
  .contact_wrapper {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    box-shadow: 0 5px 10px 0 black;
  }
  .contact_banner {
    background: url(${img}) no-repeat;
    background-position: center;
    background-size: cover;
    background-repeat: repeat;
    background-color: ${({ theme: { theme } }) =>
      theme === themeList.light ? 'var(--white)' : 'var(--orange)'};
    padding: 3rem 6rem;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 400px;
  }
  .banner {
    border-radius: 500px;
  }
  .contact_form {
    background-color: ${({ theme: { theme } }) =>
      theme === themeList.light ? 'var(--white)' : 'var(--dark3)'};
    flex: 1;
    padding: 3rem 6rem;
  }
  @media only screen and (max-width: 768px) {
    .contact_wrapper {
      flex-direction: column;
    }
  }
`;

function ContactSection() {
  return (
    <ContactSectionStyles>
      <div className="container">
        <div className="clip_bg" />
        <div className="contact_wrapper">
          <div className="contact_banner">
            <div className="banner" />
          </div>
          <div className="contact_form">
            <FormField />
          </div>
        </div>
      </div>
    </ContactSectionStyles>
  );
}

export default ContactSection;
