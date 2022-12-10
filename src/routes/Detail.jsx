// Imports 
    // React
import React from 'react'
    // Hooks
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
    // Axios
import axios from 'axios'
    // CSS  
import './styles/detailStyle.css'

// Component 
const Detail = () => {
    const params = useParams()

    const [odontologo, setOdontologo] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            axios(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then(res => setOdontologo(res.data))
        }
        fetchData()
    })

    return (
        <div className='Detail__div'>
            <div className = 'div__div-table'>
                <h1>Dentist {odontologo.id} </h1>
                <div> <p>Name:</p> <span>{odontologo.name}</span> </div>
                <div> <p>Email:</p> <span>{odontologo.email}</span> </div>
                <div> <p>Phone:</p> <span>{odontologo.phone}</span> </div>
                <div> <p>Website:</p> <span>{odontologo.website}</span> </div>
            </div>
        </div>
    )
}

export {Detail};