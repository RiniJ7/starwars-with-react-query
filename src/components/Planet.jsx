import React from 'react'

const Planet = ({ planet }) => {
  return (
    <div className="card">
        <h3>{ planet.name }</h3>
        <p> Climate : { planet.climate }</p>
        <p> Population : { planet.population } </p>
    </div>
  )
}

export default Planet