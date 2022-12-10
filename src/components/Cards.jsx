// Imports
  // React
import React from 'react'
  // Hooks
import { useEffect } from 'react';
import { useGlobalState } from '../context/Context';
  // Components
import { Link } from 'react-router-dom'
  // CSS
import './styles/cardsStyle.css'

// Component
const Cards = ({id, name, userName}) => {

  const {fav, setFav} = useGlobalState()

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(fav))
  }, [fav])

  const addFav = (id, name, userName) => {
      let dentistFav = {
        "id":id,
        "name":name,
        "userName":userName
      }
      setFav([...fav, dentistFav])
  }

  return (
    <div className = 'Card__div'>
      <div className = 'div__div-picture'>
        <p>{name}</p>
        <picture>
          <img src="/doctor.jpg" alt="" />
        </picture>
      </div>
      <div className = 'div__div-text'>
        <p>{userName}</p>
      </div>
      
      <div className = 'div__div-button'>
        <Link to = {`/${id}`}> <button> <img src = "/icons8-information-50.png" alt = "Information about dentist" /> </button> </Link>
        <button className = 'div__button-like' onClick={() => addFav(id, name, userName)} >
          <div>
            <picture>
              <img src = "/icons8-chevron-right-50.png" alt = "Like" />
            </picture>
          </div>
          <span>Like</span>
        </button>
      </div>
    </div>
  )
}

export {Cards}