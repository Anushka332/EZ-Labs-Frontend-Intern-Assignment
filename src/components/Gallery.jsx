import React from 'react'
import { getAssetPath } from '../utils/assetPath'

const imgs = [
  'images/beach.jpg',
  'images/mountain.jpg',
  'images/forest.jpg',
  'images/city.jpg'
].map(img => getAssetPath(img))

export default function Gallery(){
  return (
    <div className="gallery">
      <h1 className="section-heading">Gallery</h1>
      <div className="gallery-container">
        {imgs.map((s,i) => <img key={i} src={s} alt={`gallery-${i}`} />)}
      </div>
    </div>
  )
}
