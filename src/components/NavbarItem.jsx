// Imports 
  // React
import React from 'react'
  // Compnent
import { Link } from 'react-router-dom'

// Componenet
const NavbarItem = ({text}) => {
  return (
    <Link to = {text == "Home" || text == "Developers of S.R.S" ? '/' : `/${text}`}>{text}</Link>
  )
}

export {NavbarItem};