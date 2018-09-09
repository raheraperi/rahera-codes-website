import React from 'react'
import {Route} from 'react-router-dom'

import Portfoliocarousel from './Portfoliocarousel'

const Portfolio = () => {
  return (
    <div className='portfolio-container'>
      <Route path='/portfolio' component={Portfoliocarousel} />
    </div>
  )
}

export default Portfolio
