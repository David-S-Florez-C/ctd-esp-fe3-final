// Imports
  // React
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Context } from './context/Context'
  // Dependencies
import { BrowserRouter } from 'react-router-dom'
  // Components
import App from './App'
  // Style
import './index.css'

// Root
ReactDOM.createRoot(document.getElementById('root')).render(
  <Context>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context>
)