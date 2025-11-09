import React from 'react'

const cards = [
  { img: '/images/paris.jpg', title: 'Paris', desc: 'Experience the romance of the City of Light.' },
  { img: '/images/newyork.jpg', title: 'New York', desc: 'Explore the vibrant culture of the Big Apple.' },
  { img: '/images/tokyo.jpg', title: 'Tokyo', desc: 'Immerse yourself in the dynamic energy of Tokyo.' }
]

export default function Destinations() {
  return (
    <div className="destinations">
      <h1 className="section-heading">Top Destinations</h1>
      <div className="destination-container">
        {cards.map((c) => (
          <div key={c.title} className="destination-card">
            <img src={c.img} alt={c.title} />
            <h2>{c.title}</h2>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
