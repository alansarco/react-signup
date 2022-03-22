import { createGlobalStyle } from 'styled-components';
import themeList from '../components/themeList';

// Typography
import '@fontsource/poppins';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';

const GlobalStyles = createGlobalStyle`
/* Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 10px;
    
    &:hover {
      background: var(--orange);
    }
  }
:root{
  /* colors */
  --dark1: #757479;
  --dark2: #111111;
  --dark3: #1d1c1c;
  --orange: #f06848;
  --orange2: #e9927e;
  --orange3: #f0b2a4;
  --mediumSlateBlue: #6C62E2;
  --light1: #F3F1FE;
  --light2: #ADBDE3;
  --white: #EEEEEE;
  --white2: #CCCCCC;
  --white3: #DDDDDD;
  --black: #000000;

  /* others */
    --header-height: 70px;
}
html{
  font-size: 10px;
}
body{
  background-color: ${({ theme: { theme } }) =>
    theme === themeList.light ? 'var(--white)' : 'var(--dark3)'};
  font-family: 'Poppins', sans-serif;
}
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
  cursor: pointer;
}
.container{
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
}
img, svg{
  width: 100%;
  height: 100%;
}
`;

export default GlobalStyles;
