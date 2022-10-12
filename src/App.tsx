import React from "react"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Process from "./pages/LearningProcess"
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
        <Route path='/learning-process' element={<Process />} />
        <Route path='/education' element={<Education />} />
      </Routes> }
    </>
  )
  }

export default App
