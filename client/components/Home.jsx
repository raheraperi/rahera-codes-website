import React from 'react'
import {Route} from 'react-router-dom'

import Aboutblurb from './Aboutblurb'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='quote-section'>
        <div className='about-container columns'>
          <div className='aboutme column'>
            <img src='images/placeholder.jpeg' />
          </div>
          <div className='aboutme column'>
            <Route path='/about' component={Aboutblurb} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
