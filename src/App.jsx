// Imports
  // React 

  // Router 
  import { Route, Routes } from 'react-router-dom'
  // Components
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './routes/Home'
import { Contact } from './routes/Contact'
  // Style
import './App.css'
import React from 'react'
import { Favs } from './routes/Favs'
import { Detail } from './routes/Detail'

// App_Component
function App() {
  
  // Return-Render
  return (
    <React.Fragment>
      <Navbar />
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/Contact' element = {<Contact />} />
          <Route path = '/Favs' element = {<Favs />} />
          <Route path = '/:id' element = {<Detail />} />
        </Routes>
        <div className='div__div--card card-1'></div>
        <div className='div__div--card card-2'></div>
      <Footer />
    </React.Fragment>
  )
}

export default App
