import React from 'react'
import {Route} from 'react-router-dom'

import Homesummary from './Homesummary'

const About = () => {
  return (
    <div>
      <div className='about-container columns'>
        <div className='column'>
          <img src='images/raheracodes.png' />
        </div>
        <div className='column'>
          <Route path='/' component={Homesummary} />
        </div>
      </div>
    </div>
  )
}

export default About
