import React from 'react'
import FaceBook from "./icons/Facebook"
import Instagram from './icons/instagram'

import './footer.css' 
import Twitter from './icons/Twitter'
import Reddit from './icons/Reddit'

const Footer = () => {
  return (
    <div id='footer-container'>
      <div className='footer-sub-container'>
        <div className="btnContainer">
        <button className="shareBtn btn"><p>Share</p></button>
        <button className='customer-support btn'><p>Customer support</p></button>
        </div>
        <div className="footer-mini-container">

          <button className='soicalIcon FB-icon'><FaceBook/></button>
          <button className='soicalIcon FB-icon'><Instagram/></button>
          <button className='soicalIcon FB-icon'><Twitter/></button>
          <button className='soicalIcon FB-icon'><Reddit/></button>

        </div>
      </div>
     
    </div>
  )
}

export default Footer