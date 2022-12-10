// Import 
    // React - Hooks
import React, { useEffect } from 'react'
    // CSS
import './styles/themeStyle.css'

// Component
const ThemeToggle = () => {
    
    const handleToggled = () => {
        document.body.classList.toggle("dark");
        localStorage.setItem("dark", document.body.className);
    };

    useEffect(() => {
        if(localStorage.getItem("dark")) {
            document.body.classList.add("dark");
        }
    }, []);

    return (
        <label>
            <input type = "checkbox" onClick = {handleToggled} />
            <span className = 'input__span'>
                    <span className = 'span__span'/>
            </span>
        </label>
    )
} 

export {ThemeToggle};