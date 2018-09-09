import React from 'react'
import {Route} from 'react-router-dom'

import Portfoliocarousel from './Portfoliocarousel'

const Portfolio = () => {
  return (
    <div>
      <div className='portfolio-container'>
        <Route path='/portfolio' component={Portfoliocarousel} />
      </div>
      <div className='technology-stack'>
        <ul>
          <li><img src='images/es6js.png' className='tech'/></li>
          <li><img src='images/expressjs.png' className='tech'/></li>
          <li><img src='images/nodejs.png' className='tech' /></li>
          <li><img src='images/React_logo_wordmark.png' className='tech'/></li>
          <li><img src='images/redux.png' className='tech'/></li>
        </ul>
      </div>
    </div>
  )
}

export default Portfolio
