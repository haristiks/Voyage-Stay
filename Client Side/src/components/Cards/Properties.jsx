import React from 'react'
import "./Cards.css"
import PropertyCard from './PropertyCard'

function Properties() {
  return (
    <div className='card-flex'>
        <PropertyCard/>
        <PropertyCard/>
        <PropertyCard/>
        <PropertyCard/>
    </div>
  )
}

export default Properties