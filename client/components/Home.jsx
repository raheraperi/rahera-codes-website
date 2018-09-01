import React from 'react'
import {Route} from 'react-router-dom'

import Quote from './Quote'
import Aboutblurb from './Aboutblurb'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='quote-section'>
        <Route path='/about' component={Quote} />
        <div className='aboutme'>
          <img src='images/rp-img.jpeg' />
          <Route path='/about' component={Aboutblurb} />
        </div>
      </div>
    </div>
  )
}

export default Home
