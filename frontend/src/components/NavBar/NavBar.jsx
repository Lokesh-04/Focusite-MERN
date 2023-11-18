import React from 'react'

const NavBar = () => {
  return (
      <div id="nav" className="bar">
        <Link to="/" style={{margin: '10px' }} >Home</Link>
      <Link to="/notes" style={{margin: '10px' }} >Notes</Link>
      <Link to="/minddeck" style={{margin: '10px' }} >Mind Deck</Link>

        </div>
  )
}

export default NavBar
