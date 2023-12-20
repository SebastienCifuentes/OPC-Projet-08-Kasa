import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
    return (
        <nav className='navbar'>
            <Link to="/" className='navbar_button-home'>Accueil</Link>
            <Link to="/about" className='navbar_button-about'>A propos</Link>
        </nav>
    )
}