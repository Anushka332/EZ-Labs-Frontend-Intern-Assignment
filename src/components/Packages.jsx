import React from 'react'

import { getAssetPath } from '../utils/assetPath'

const packs = [
  { img: getAssetPath('images/europe_tour.jpg'), title: 'Europe Tour', desc: 'Explore the wonders of Europe with our comprehensive tour package.' },
  { img: getAssetPath('images/asian_adventure.jpg'), title: 'Asian Adventure', desc: 'Embark on an exciting adventure across Asia.' },
  { img: getAssetPath('images/cruise_getaway.jpg'), title: 'Cruise Getaway', desc: 'Relax on a luxury cruise with breathtaking ocean views.' }
]

export default function Packages() {
  return (
    <div className="packages">
      <h1 className="section-heading">Travel Packages</h1>
      <div className="package-container">
        {packs.map((p) => (
          <div key={p.title} className="package-card">
            <img src={p.img} alt={p.title} />
            <h2>{p.title}</h2>
            <p>{p.desc}</p>
            <button className="btn-secondary">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  )
}
