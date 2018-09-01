import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className='navbar'>
      <div className='navbar-brand'>
      </div>
      <div className='navbarmenu'>
        <Link to='/'>home</Link>
        <Link to='/about'>about</Link>
        <Link to='/blog'>blog</Link>
        <Link to='/portfolio'>portfolio</Link>
      </div>
    </div>
  )
}
export default Nav
