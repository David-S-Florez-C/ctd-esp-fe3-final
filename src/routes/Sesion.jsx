// Imports
    // React
import React from 'react'
    // Router
import { Link } from 'react-router-dom'
    // Components 

    // Styles
import './styles/sesionStyle.css'

// Sesion_Component
const Sesion = () => {
  return (
    <div className='App__div'>

        {/* Circle */}
        <div className='div__circle'></div>
        <div className='div__circle'></div>

        {/* Card */}
        <div className='div__div'>

            {/* Icon */}
            <div className='Logo__div'>
                <picture className='div__picture'>
                <img src="/logo_System-RS.png" alt="Logo dentist" />
                </picture>
                <h1>S.R.S</h1>
            </div> 

            {/* Separator */}
            <div className='Separator__div'>
                <div className='div__separator--top'></div>
                <p>All</p>
                <div className='div__separator--bottom'></div>
            </div>

            {/* Introduction */}
            <div className='Introduction__div'>
                <span>Your</span>
                <span>dentists </span>
                <span>in </span>
                <span>
                <span>one </span> 
                place.
                </span>
            </div>

            {/* Buttons */}
            <div className='Buttons__div'>
                <div className='div__div--borde'>
                    <Link to="/home"> <button>Login</button> </Link>
                </div>
                <Link className='div__Link' to="/home"> Create account </Link>
            </div>
        </div>
    </div>
  )
}

export { Sesion };