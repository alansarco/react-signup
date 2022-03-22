import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import ThemeContext from './components/ThemeReducer';
import GlobalStyles from './styles/GlobalStyles';
import ContactSection from './pages/ContactSection';
import Header from './pages/Header';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <ThemeProvider theme={{ theme }}>
        <GlobalStyles />
        <Header />
        <ContactSection />
      </ThemeProvider>
    </>
  );
}

export default App;
