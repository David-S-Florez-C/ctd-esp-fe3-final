// Imports
  // React
import React from 'react'
  // Hooks
import { useState } from 'react'
  // CSS
import './styles/formStyle.css'

// Component
const Form = () => {

  const [state_1, setState_1] = useState("");
  const [state_2, setState_2] = useState("");

  const [stateMessage, setMessage] = useState("");

  const handleChange_1 = (e) => {
    setState_1(e.target.value);
  };

  const handleChange_2 = (e) => {
    setState_2(e.target.value);
  };


  const handleSubmit = (e) => {

    e.preventDefault()

    let nameValidation = /^.{5,}$/.test(state_1)
  
    let emailValidation = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(state_2)

    if (nameValidation && emailValidation) {
      setMessage(`Thank you ${state_1}, We will be contacting you by mail: ${state_2}`)
      console.log("Succesful");
    } else {
      setMessage("Please check your information again")
      console.error("Unsuccesful");
    }
  }

  return (
    <div className = 'Form__div'>
      <form className = 'div__form'>
        <div>
          <input onChange = {handleChange_1} className = {`${state_1 ? "has-value" : ""}`} id = "name" type="text" value={state_1}/>
          <label htmlFor = "name" >Your name</label>
        </div>

        <div>
          <input onChange = {handleChange_2} className = {`${state_2 ? "has-value" : ""}`} id = "email" type="email" />
          <label htmlFor = "email" >Your email</label>
        </div>
        
        <button onClick = {handleSubmit} typeof = 'submit'>
          <div className = 'button__div' >
            <picture>
              <img src="/icons8-paper-plane-50.png" alt = "Submit" />
            </picture>
          </div>
        </button>

        <p>{stateMessage}</p>
      </form>

    </div>
  )

  

}

export {Form};