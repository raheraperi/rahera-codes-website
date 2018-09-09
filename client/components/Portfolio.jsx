import React from 'react'
import {Route} from 'react-router-dom'

import Portfoliocarousel from './Portfoliocarousel'

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <div className='portfolio-hero'>
        <img src='images/work.png' className='work-img'/>
      </div>
      <div className='portfolio-intro'>
        <img src='images/rp.jpeg' className='rclogo' />
        <h3>What I&#8217;ve been up to.</h3>
        <p>Here is a selection of work I have created during my time at Enspiral Dev Academy
          and projects I am currently working on.
        </p>
        <p>For more up to date work you can visit my github.</p>
      </div>
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
      <div className='portfolio-contact'>
        <h2>Want to talk?</h2>
        <p>Send me a message and we can chat.</p>
        <a href='mailto:rachael.peri@gmail.com' className='main-btn'>message me</a>
      </div>
    </div>
  )
}

export default Portfolio
