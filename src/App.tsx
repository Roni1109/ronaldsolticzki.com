import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MainPage from './pages/MainPage';
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Utility/GlobalStyle";
import { lightTheme, darkTheme } from "./components/Themes";
import Layout from "./layout/Layout";
import Footer from "./components/Footer";
import Project from "./components/Project"; 

const App: React.FC = () => {
  const [theme, setTheme] = useState('DefaultTheme');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const location = useLocation();

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Navbar />
        <button onClick={themeToggler}>Test</button>
        <GlobalStyle text={""} body={""} />
        <Layout>
          {location && (
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<MainPage />} />
              <Route path="/project" element={<Project />} /> 
            </Routes>
          )}
        </Layout>
      </ThemeProvider>
      <Footer />
    </>
  );
};

export default App;
