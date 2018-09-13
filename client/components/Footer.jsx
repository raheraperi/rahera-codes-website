import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='social-media'>
        <ul>
          <li><a href='https://www.linkedin.com/in/rachael-peri-140864124/'><i className='fab fa-linkedin'></i></a></li>
          <li><a href='https://github.com/raheraperi'><i className='fab fa-github-square'></i></a></li>
          <li><a href='mailto:rachael.peri@gmail.com'>hire me</a></li>
          <li><a href='https://drive.google.com/file/d/1_7LcFxxM2JbzvCe7WTGq9iEcvheLmF2o/view?usp=sharing'>resume pdf</a></li>
        </ul>
      </div>
      <div className='contact'>
        <p>© Copyright 2018 Rachael Peri. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
