import React from 'react'
import {Route, Link} from 'react-router-dom'

import Homesummary from './Homesummary'

const About = () => {
  return (
    <div>
      <div className='about-container columns'>
        <div className='image column'>
          <img src='images/raheracodes.png' />
        </div>
        <div className='homesummary column'>
          <Route path='/' component={Homesummary} />
          <Link to='/portfolio'>View my work →</Link>
        </div>
      </div>
    </div>
  )
}

export default About
