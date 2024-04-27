import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>Chess Society</h1>
            <p className='description-text'>Our goal is to help you bring your chess events to life, allowing you 
                to tailor every detail to match your vision. From hosting tournaments 
                to organizing individual games, our customizable features ensure an 
                experience that's uniquely yours.</p>
            <button className='btn'>Sign up</button>
        </div>
    </div>
  )
}

export default Hero