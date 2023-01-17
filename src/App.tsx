import React, { useEffect, useRef, useState } from "react"
import Navbar from "./components/Navbar"
// Pages
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import MainPage from './pages/MainPage'
// Styled Components
import styled, { useTheme } from "styled-components"
// Routing
import { Routes, Route, useLocation } from "react-router-dom"

import {ThemeProvider} from "styled-components";
import { GlobalStyle } from "./Utility/GlobalStyle"
import { lightTheme, darkTheme } from "./components/Themes"
import { DefaultTheme } from 'styled-components';
import { createGlobalStyle } from "styled-components"
import { DarkMode } from "styled-components"



const App = () => {
  const [theme, setTheme] = useState('DefaultTheme');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}
  return (
    <>
      <Navbar />
      <ThemeProvider theme= {theme === 'light' ? lightTheme : darkTheme}>
      <button onClick={themeToggler}>Switch Theme </button>
      <GlobalStyle text={""} body={""} />
    
      {<Routes location={location} key={location.pathname}>
        <Route path='/' element={<MainPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes> }
      </ThemeProvider>
        </>
  )
  }



export default App
