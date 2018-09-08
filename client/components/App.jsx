import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import About from './About'
import Footer from './Footer'
import Portfolio from './Portfolio'
import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <ErrorMessage />
        <WaitIndicator />
        <div className='container-main'>
          <Route exact path='/' component={About} />
          <Route exact path='/about' component={Home} />
          <Route exact path='/portfolio' component={Portfolio} />
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
