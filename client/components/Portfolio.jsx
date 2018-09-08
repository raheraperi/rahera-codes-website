import React from 'react'
import {Route} from 'react-router-dom'

import Portfoliocarousel from './Portfoliocarousel'

const Portfolio = () => {
  return (
    <div className='portfolio-container'>
      <h1>Portfolio section</h1>
      <Route path='/portfolio' component={Portfoliocarousel} />
    </div>
  )
}

export default Portfolio
