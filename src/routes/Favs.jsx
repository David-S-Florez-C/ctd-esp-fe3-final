// Imports
  //React
import React from 'react'
  // Components
import { Cards } from '../components/Cards';
  // CSS
import './styles/favsStyle.css'

// Component
const Favs = () => {
  let favs = JSON.parse(localStorage.getItem("favs"));
    
  return (
      <div className = 'Favs__div'>
        <div className="card-grid">
            {favs.map(favs => {return <Cards key={favs.id} id={favs.id} name={favs.name} username={favs.username} />})}
        </div>
      </div>
      
  );
}

export {Favs};