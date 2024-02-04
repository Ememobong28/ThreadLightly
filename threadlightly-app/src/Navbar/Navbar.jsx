import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-logo">
                    thread lightly
                </a>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <a href="/" className="nav-links">Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a href="/about" className="nav-links">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a href="/services" className="nav-links">Login</a>
                    </li>
                    <li className="nav-item">
                        <a href="/contact" className="nav-links">Create account</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;