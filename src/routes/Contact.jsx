// Imports 
  // React
import React from 'react'
  // Components
import { Form } from '../components/Form';
  // CSS
import './styles/contactStyle.css'

// Component
const Contact = () => {
  return (
    <div className = 'Contact__div'>
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
        <Form />
    </div>
  )
}

export {Contact};