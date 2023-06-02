import React from 'react'
import './footer.css';
import linkedin from './images/linkedinLogo.png';
import insta from './images/instagramlogo.png';
const Footer = () => {
  return (
    <div className='footer'>
        <h5>Contact me !</h5>
        <a target='_blank' rel="noreferrer" href='https://www.instagram.com/nothing_nowhere_media/'>
            <img className='insta' src={insta} alt='Instagram Logo'/>
        </a>
        <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/dominic-dueno-258306271/'>
            <img className='Linkedin' src={linkedin} alt='Linkedin Logo'/>
        </a>
        
    </div>
  )
}

export default Footer