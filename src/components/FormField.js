import React, { useState, useEffect } from 'react';
import { AiOutlineMail, AiFillLock } from 'react-icons/ai';
import { MdPerson, MdPersonAddAlt1 } from 'react-icons/md';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import themeList from './themeList';
import SectionTitle from './SectionTitle';
import 'react-toastify/dist/ReactToastify.css';

const FormStyle = styled.div`
  h5 {
    font-size: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 2.5rem;
    letter-spacing: 2px;
    color: var(--orange);
  }
  .form-group {
    margin-top: 1.5rem;
    text-align: left;
  }
  .input_wrapper {
    display: flex;
    align-items: center;
    background-color: ${({ theme: { theme } }) =>
      theme === themeList.light ? 'var(--white)' : 'var(--dark3)'};
    padding: 0;
    margin-top: 0.5rem;
    box-shadow: ${({ theme: { theme } }) =>
      theme === themeList.light
        ? 'inset 0 2px 5px 0 gray'
        : 'inset 0 2px 5px 0 black'};
    border-radius: 25px;
    .input_icon {
      margin-left: 0.5rem;
      border-radius: 25px;
      padding: 1rem 0.7rem;
      display: flex;
      flex: 1;
      svg {
        color: ${({ theme: { theme } }) =>
          theme === themeList.light ? 'var(--dark3)' : 'var(--orange)'};
      }
    }
    .input_text {
      flex: 14;
    }
  }
  label {
    color: ${({ theme: { theme } }) =>
      theme === themeList.light ? 'var(--dark3)' : 'var(--white2)'};
    font-weight: normal;
    font-size: 1.1rem;
    P {
      color: #ff4141;
      margin-top: 0.5rem;
      margin-bottom: 2rem;
    }
  }
  input {
    width: 100%;
    font-size: 1.1rem;
    line-height: 1.5rem;
    padding: 1rem 0.7rem;
    border-radius: 25px;

    color: ${({ theme: { theme } }) =>
      theme === themeList.light ? 'var(--dark3)' : 'var(--orange2)'};
    background-color: transparent;
    outline: none;
    border: none;
  }
  button {
    border-radius: 25px;
    width: 100%;
    background-color: var(--orange);
    margin-top: 2rem;
    color: var(--white);
    font-size: 1.5rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1.5rem 4rem;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    &:hover {
      background-color: var(--light1);
      transform: scale(1.05);
      -webkit-transform: scale(1.05);
      -moz-transform: scale(1.05);
      -ms-transform: scale(1.05);
      -o-transform: scale(1.05);
      box-shadow: 0 3px 7px 0 black;
      color: var(--dark3);
    }
  }
`;

export default function ContactForm() {
  const initialvalue = {
    name: '',
    username: '',
    email: '',
    password: '',
    confirmpass: '',
  };
  const [formValues, setFormValues] = useState(initialvalue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    console.log(formValues);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  });
  const validation = (values) => {
    const errors = {};
    const regex = /^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w{2,3})+$/;
    if (!formValues.name) {
      errors.name = 'Name is required!';
    }
    if (!formValues.username) {
      errors.username = 'Username is required!';
    }
    if (!formValues.email) {
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'Invalid Email format!';
    }
    if (!formValues.password) {
      errors.password = 'Password is required!';
    } else if (values.password.length < 6) {
      errors.password = 'Password must not less than 6 characters.';
    } else if (values.password.length > 12) {
      errors.password = 'Password must not exceed than 12 characters.';
    }
    if (!formValues.confirmpass) {
      errors.confirmpass = 'Please confirm your password!';
    } else if (formValues.confirmpass !== formValues.password) {
      errors.confirmpass = 'Password does not match!';
    }
    if (Object.keys(errors).length === 0) {
      toast.success('Registered Successfully!');
      setFormValues({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmpass: '',
      });
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validation(formValues));
    setIsSubmit(true);
  };
  return (
    <>
      <FormStyle>
        <SectionTitle>
          REGISTER
          <h5>Be part of our lucky customers!</h5>
        </SectionTitle>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              Name
              <div className="input_wrapper">
                <div className="input_icon">
                  <MdPerson />
                </div>
                <div className="input_text">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <p>{formErrors.name}</p>
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="username">
              Username
              <div className="input_wrapper">
                <div className="input_icon">
                  <MdPersonAddAlt1 />
                </div>
                <div className="input_text">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formValues.username}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <p>{formErrors.username}</p>
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email
              <div className="input_wrapper">
                <div className="input_icon">
                  <AiOutlineMail />
                </div>
                <div className="input_text">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <p>{formErrors.email}</p>
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              Password
              <div className="input_wrapper">
                <div className="input_icon">
                  <AiFillLock />
                </div>
                <div className="input_text">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <p>{formErrors.password}</p>
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="confirmpass">
              Confirm Password
              <div className="input_wrapper">
                <div className="input_icon">
                  <AiFillLock />
                </div>
                <div className="input_text">
                  <input
                    type="password"
                    id="confirmpass"
                    name="confirmpass"
                    value={formValues.confirmpass}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <p>{formErrors.confirmpass}</p>
            </label>
          </div>
          <button type="submit">CREATE ACCOUNT</button>
        </form>
      </FormStyle>
      <ToastContainer theme="dark" />
    </>
  );
}
