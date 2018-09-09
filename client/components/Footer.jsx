import React from 'react'

const Footer = () => {
  return (
    <div className='footer columns'>
      <div className='contact column'>
        <h4>Contact</h4>
        <a href='mailto:rachael.peri@gmail.com'>rachael.peri@gmail.com</a>
        <p>© Copyright 2018 Rachael Peri. All rights reserved</p>
      </div>
      <div className='social-media column'>
        <ul>
          <li><a href='https://www.linkedin.com/in/rachael-peri-140864124/'><img src='images/linkedin.png' /></a></li>
          <li><a href='https://github.com/raheraperi'><img src='images/github-sign.png' /></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
