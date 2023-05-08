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

import Swaglab from "./components/Cards/Swaglab";
import TheSinners from "./pages/Projects/TheSinners";
import Skibikecentre from "./components/Cards/Skibikecentre";
import Ronaldsolticzki from "./components/Cards/Ronaldsolticzki";
import Geluhorotan from "./components/Cards/Geluhorotan";
import Bluehouse from "./components/Cards/Bluehouse";


const App: React.FC = () => {
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
        <Route path="/swaglabs" Component={Swaglab} />
        <Route path="/thesinners" Component={TheSinners} />
        <Route path="/skibikecentre" Component={Skibikecentre} />
        <Route path="/ronaldsolticzki" Component={Ronaldsolticzki} />
        <Route path="/geluhorotan" Component={Geluhorotan} />
        <Route path="/bluehouse" Component={Bluehouse} />
      </Routes> }
      </Layout>
      </ThemeProvider>
      <Footer />
        </>
  )
  }



export default App
