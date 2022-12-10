// Imports
    // React
import React from 'react'
    // Hooks
import { useContext } from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

// Attributes 
const GlobalState = createContext()

// Component
const Context = ({children}) => {
    // API
    const [dentist, setDentist] = useState()

    // Favs 
    const [fav, setFav] = useState([])

    // Axios
    useEffect(() => {
        try {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setDentist(data));
        } catch (error) {
            console.error(error)
        }
    }, []);

    return (
        <GlobalState.Provider value = {{dentist, fav, setFav}}>
            {children}
        </GlobalState.Provider>
    )
}

const useGlobalState = () => {
    return useContext(GlobalState)
}

export {Context, useGlobalState}; 