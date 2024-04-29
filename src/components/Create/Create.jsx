import React from 'react'
import './Create.css'
// import rock from '../../assets/rock_2.png'

const Create = () => {
  return (
    <div className='create'>
        <div className='create-option'>
            {/* <img src={rock} alt='' className='rock-img' /> */}
            <button className='btn dark-btn big-btn left-option-btn'>Play with a friend</button>
            <p className='description-text'>Create a game and invite your friend for an exhilarating match!                 
                Explore different time controls and game styles, practice specific openings, 
                or simply enjoy a friendly competition with someone you know.</p>
        </div>
        <div className='create-option'>
            <button className='btn dark-btn big-btn right-option-btn'>Start a tournament</button>
            <p className='description-text'>Take the lead and organize your very own chess tournament! 
                From a casual gathering or a competitive showdown, customize rules to bring your ideas 
                to life and oversee the entire event. </p>
        </div>
        
    </div>
  )
}

export default Create