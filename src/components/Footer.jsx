import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-left">
          <img src="/images/logo.png" alt="TravelDreams" className="footer-logo" />
          <p>© {new Date().getFullYear()} TravelDreams. All rights reserved.</p>
          <p className="footer-email">Contact: <a href="mailto:info@traveldreams.com">info@traveldreams.com</a></p>
        </div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#destinations">Destinations</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}
