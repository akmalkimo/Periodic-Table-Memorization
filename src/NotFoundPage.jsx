import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className='notFoundWrapper'>
        <p>Page not found...</p>
        <Link to="/">Back to start?</Link>
    </div>
  )
}

export default NotFoundPage