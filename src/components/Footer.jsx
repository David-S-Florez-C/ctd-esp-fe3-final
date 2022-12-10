// Imports
  // React
import React from 'react'
  // CSS
import './styles/footerStyle.css'

// Component
const Footer = () => {
  return (
    <footer className = "Footer__div">
        <p>© 2022 Digital House - David S Florez C.</p>
        <div>
          <picture>
            <img src="/icons8-facebook-24.png" alt="" />
          </picture>

          <picture>
            <img src="/icons8-instagram-24.png" alt="" />
          </picture>

          <picture>
            <img src="/icons8-whatsapp-24.png" alt="" />
          </picture>
        </div>
    </footer>
  )
}

export {Footer};