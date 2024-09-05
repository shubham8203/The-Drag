import React from 'react'
import './Footer.css'
import facebook_icon from '../../assets/Facebook.png'
import instagram_icon from '../../assets/Instagram.png'
import linkedin_icon from '../../assets/linkedin.png'
import twitter_icon from '../../assets/Twiter.png'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-upper'>
             <p>DRAG</p>
             <hr />
        </div>
        <div className="query" style={{margin:'20px auto',display:'flex',justifyContent:'center'}}>
            <p style={{textAlign:'center'}}>For Queries and Contact: bodhbusiness@gmail.com</p>
        </div>
      
    </div>
  )
}

export default Footer
