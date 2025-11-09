import React from 'react'

export default function About() {
  return (
    <div className="about-us">
      <h1 className="section-heading">About Us</h1>
      <div className="about-content">
        <div className="about-left">
          <img src="/images/about_us_image.jpg" alt="About Us" />
        </div>
        <div className="about-right">
          <p>
            TravelDreams is dedicated to providing unforgettable travel experiences. Our team of passionate travel experts works tirelessly to curate unique and personalized travel packages.
          </p>
          <p>
            Our mission is to inspire and facilitate travel, creating memories that will last a lifetime. Join us on your next journey, and let us help you discover the world in a whole new way.
          </p>
        </div>
      </div>
    </div>
  )
}
