// Imports
  //React
import React from 'react'
  // Components
import { Cards } from '../components/Cards';
  // Hooks
import { useState } from 'react';
import { useGlobalState } from '../context/Context';
  // CSS
import './styles/homeStyle.css'

// Component
const Home = () => {

  const [stateSearchValue, setSearchValue] = useState("");
  const {dentist} = useGlobalState()

  let searchShifts = dentist;

  if(!stateSearchValue.length >= 1){
    searchShifts = dentist;
  }else{
    searchShifts = searchShifts.filter(results => {
      const shiftDentist = results.name.toLowerCase();
      const searchDentist = stateSearchValue.toLowerCase();
      return shiftDentist.includes(searchDentist);
    });
  } 

  const searchValue = (e) => {
    setSearchValue(e.target.value);
  }; 

  const totalDentist = searchShifts?.length;

  return (
    <React.Fragment>

      <div></div>

      <main>
        <section className = 'main__section'>
        
          <div className = 'section__div--topContainer'>

            <div className = 'div__div--input'>
              <div className='div__div--search'>
                  <img src="/icons8-search-24.png" alt="" />
              </div>
              <input type="text" name="" id="" placeholder='Search' value = {stateSearchValue} onChange = {searchValue}/>
            </div>

            <div className = 'div__div--counter'>
              <div>
                <picture>
                  <img src="/icons8-dentist-64.png" alt="" />
                </picture>
              </div>
              <p>/ {totalDentist}</p>
            </div>

          </div>

          <div className = 'section__div--midContainer'>
            {searchShifts?.map(dentist => <Cards 
              key = {dentist.id}
              id = {dentist.id}
              name = {dentist.name}
              userName = {dentist.username}
            />)}
          </div>
          
        </section>
        
      </main>

    </React.Fragment>
  )
  
}

export {Home};