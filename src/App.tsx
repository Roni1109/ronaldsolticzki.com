import React from "react"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import Education from "./pages/Education"
import MainPage from './pages/MainPage'
import GlobalStyle from "./Utility/GlobalStyle"
// Routing
import { Routes, Route, useLocation } from "react-router-dom"


const App = () => {
  const location = useLocation()
  return (
    <>
      <Navbar />
      <GlobalStyle />
      {<Routes location={location} key={location.pathname}>
        <Route path='/' element={<MainPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/education' element={<Education />} />
      </Routes> }
    </>
  )
  }

export default App
