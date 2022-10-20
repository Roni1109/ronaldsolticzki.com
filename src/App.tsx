import React from "react"
import { useRef } from "react"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import MainPage from './pages/MainPage'
import GlobalStyle from "./Utility/GlobalStyle"
// Routing
import { Routes, Route, useLocation } from "react-router-dom"

const App = () => {
 function Scroll () {
  const ref = useRef<null | HTMLDivElement>(null); 

  const handleClick = () =>{
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
 }
  return (
    <>
      <Navbar />
      <GlobalStyle />
      {<Routes location={location} key={location.pathname}>
        <Route path='/' element={<MainPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes> }
    </>
  )
  }

export default App
