import React from 'react'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="profile">
          <img className="profile-img" src="/images/logo.png" alt="Logo" />
          <span className="brand">TravelDreams</span>
        </div>
        <nav className="nav-links">
          <ul className="nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#packages">Packages</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
