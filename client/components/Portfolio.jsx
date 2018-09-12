import React from 'react'
import {Route} from 'react-router-dom'
import Stackbanner from './Stackbanner'

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
        <p>For more up to date work you can visit my <a href='https://github.com/raheraperi'>github</a>.</p>
      </div>
      <div className='portfolio-container'>
        <div className='project-container'>
          <img src='images/streetfeel.png' className='work-img'/>
          <div className='work-blurb'>
            <h2>Streetfeel</h2>
            <h3>Full-stack web development</h3>
            <p>
          Streetfeel is a mobile-first web app created as part of a final project at Enspiral Dev Academy.
          Streetfeel was designed using geolocation and mapping technology to allow users to share
          their emotional experiences to specific locations and spaces.
            </p>
            <p>
          I worked in a team of five to build Streetfeel in which we took part in all code
          of the project.
            </p>
          </div>
        </div>
        <hr className='portfolio' />
        <div className='project-container'>
          <img src='images/softwareness.png' className='work-img'/>
          <div className='work-blurb'>
            <h2>Softwareness</h2>
            <h3>Full-stack web development</h3>
            <p>
          Softwareness is a web app created as part of a group project at Enspiral Dev Academy.
          It was designed to facilitate self-awareness to the New Zealand software industry through data-driven
          insights.
            </p>
            <p>
          We worked as a cohort on the project and all contributed towards the code base.
            </p>
          </div>
        </div>
      </div>
      <Route path='/portfolio' component={Stackbanner} />
      <div className='portfolio-contact'>
        <h2>Want to talk?</h2>
        <p>Send me a message and we can chat.</p>
        <a href='mailto:rachael.peri@gmail.com' className='main-btn'>message me</a>
      </div>
    </div>
  )
}

export default Portfolio
