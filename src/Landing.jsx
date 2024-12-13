import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className='landingWrapper'>
      <button className='start'><Link to="/Element/1">START</Link></button>
    </div>
  )
}

export default Landing