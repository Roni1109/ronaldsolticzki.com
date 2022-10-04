import React from "react"
import Navbar from "./components/Navbar"
import GlobalStyle from "./Utility/GlobalStyle"

// Routing
import { Routes, Route, useLocation } from "react-router-dom"

const App = () => {
  const location = useLocation()
  return (
    <>
      <Navbar />
      <GlobalStyle />
      {/* <Routes location={location} key={location.pathname}>
        <Route path='/about' exact element={
        // Component comes here
        }></Route>
      </Routes> */}
    </>
  )
}

export default App
