import React from "react"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Process from "./pages/Learning_Process"
import Education from "./pages/Education"
import Main_Page from './pages/Main_Page'
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
        <Route path='/' element={<Main_Page />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/learning_process' element={<Process />} />
        <Route path='/education' element={<Education />} />
      </Routes> }
    </>
  )
  }

export default App
