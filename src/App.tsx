import React from "react"
import Navbar from "./components/Navbar"
import About from "./pages/About"
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
        <Route path='/about' element={<About />} />
      </Routes> }
    </>
  )
}

export default App
