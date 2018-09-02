import React from 'react'
import {Route} from 'react-router-dom'

import Quote from './Quote'
import Aboutblurb from './Aboutblurb'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='quote-section'>
        <Route path='/about' component={Quote} />
        <div className='about-container columns'>
          <div className='aboutme column'>
            <img src='images/rp-img.jpg' />
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
