// Imports
    // React
import React, { useState } from 'react'
    // Components
import { NavbarItem } from './NavbarItem'
import { ThemeToggle } from './ThemeToggle'
    // Styles
import './styles/navbarStyle.css'

// Component
const Navbar = () => {
    // States
    const [stateNavBar, setStateNavBar] = useState("div")
    const [stateOpen, setStateOpen] = useState("")

    // Methods
    const a = () => {
        if(stateNavBar == "div"){
            setStateNavBar("diiv")
            setStateOpen("open")
        }else{
            setStateNavBar("div")
            setStateOpen("");
        }
    }

    const b = () => {
        if(document.body.classList.values("dark")){
            console.log("Hola");
        }
    }

    const navbarListTop = ["Home", "Contact", "Favs"];
    const navbarListMid = ["Developers of S.R.S"];

    // Render-Return
    return (
        <header className = "Navbar__div">
            <div className = 'header__div'>
                {/* Greeting */ }
                <div onClick={b} className = 'div__div-icon'>
                    <picture>
                        <img src = "/icons8-j-67.png" alt = 'Icon Demo'/>
                    </picture>
                    <h1>Hi <span>Julian D</span>.</h1>
                </div>

                <div className = 'div__div-td'>
                    <ul className = 'ul__li-top'>
                            {navbarListTop.map((text, index) => <NavbarItem key = {index} text = {text} /> )}
                    </ul>
                    <ul className = 'ul__li-mid'>
                            {navbarListMid.map((text, index) => <NavbarItem key = {index} text = {text} /> )}
                    </ul>
                    <ul className = 'ul__li-bottom'>
                        <ThemeToggle />
                    </ul>
                </div>

                <div className = 'div__div-navBar'>
                    <div onClick = {a} className = "div__div">
                        <span className = {stateNavBar + "__span-line1"}></span>
                        <span className = {stateNavBar + "__span-line2"}></span>
                        <span className = {stateNavBar + "__span-line3"}></span>
                    </div>
                </div>
            </div>

            <div className = {`div__div-dropdown ${stateOpen}`}>
                <div className = 'div__div'>
                    <ul className = 'ul__li-top'>
                            {navbarListTop.map((text, index) => <NavbarItem key = {index} text = {text} /> )}
                    </ul>
                    <ul className = 'ul__li-mid'>
                            {navbarListMid.map((text, index) => <NavbarItem key = {index} text = {text} /> )}
                    </ul>
                    <ul>
                        <ThemeToggle />
                    </ul>
                </div>
            </div>
        </header>
    )
}

// Exports
export {Navbar};