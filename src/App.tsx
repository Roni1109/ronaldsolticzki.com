import React, { useEffect, useRef, useState } from "react"
import Navbar from "./components/Navbar"
// Pages
import MySkills from "./components/MySkills"
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
import Layout from "./layout/Layout"


const App = () => {
  const [theme, setTheme] = useState('DefaultTheme');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}
  return (
    <>
      <ThemeProvider theme= {theme === 'light' ? lightTheme : darkTheme}>
      <Navbar />
      <button onClick={themeToggler}>Test </button>
      <GlobalStyle text={""} body={""} />
      <Layout>
      {<Routes location={location} key={location.pathname}>
        <Route path='/' element={<MainPage />} />
      </Routes> }
      </Layout>
      </ThemeProvider>
        </>
  )
  }



export default App
