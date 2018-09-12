import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className='navbar'>
      <div className='navbar-brand'>
      </div>
      <div className='navbarmenu'>
        <Link to='/'>home</Link>
        <Link to='/about'>about</Link>
        {/* <Link to='/blog'>blog</Link> */}
        <Link to='/portfolio'>work</Link>
      </div>
    </div>
  )
}
export default Nav

import React from 'react'
const ExecutionEnvironment = require('react/lib/ExecutionEnvironment')
const cx = require('classnames')

 const Nav = React.createClass({
  componentDidMount: function() {
    if (ExecutionEnvironment.canUseDOM) {
      window.addEventListener('scroll', this.handleScroll, false)
    }
  },
  componentWillUnmount: function() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  getInitialState: function() {
    return {
      hidden: true
    }
  },
  render: function() {
    let navClasses = cx({
      'nav': true,
      'hidden': this.state.hidden
    });
    return (
      <div className={navClasses} ref="navRef">
        <div className="nav-inner">
        </div>
      </div>
    );
  },
  handleScroll: function() {
    // Navbar is 60px in height. Could also get height of DOM node here using
    // findDOMNode(this.refs.navRef) and subtract that.
    
    let heightToShow = window.innerHeight - 60;
     if (window.pageYOffset > heightToShow) {
      this.setState({ hidden: false })
    }
     if (window.pageYOffset < heightToShow) {
      this.setState({ hidden: true })
    }
  }
});
 module.exports = Nav;