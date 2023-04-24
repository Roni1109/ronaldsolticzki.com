import React, { useState } from "react"
import Navbar from "./components/Navbar"
// Pages
import MainPage from './pages/MainPage'
// Routing
import { Routes, Route } from "react-router-dom"

import {ThemeProvider} from "styled-components";
import { GlobalStyle } from "./Utility/GlobalStyle"
import { lightTheme, darkTheme } from "./components/Themes"
import Layout from "./layout/Layout"
import Footer from "./components/Footer"


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
      <Footer />
        </>
  )
  }



export default App
