import React from 'react'
import './Create.css'
// import rock from '../../assets/rock_2.png'

const Create = () => {
  return (
    <div className='create'>
        <div className='create-option'>
            {/* <img src={rock} alt='' className='rock-img' /> */}
            <button className='btn dark-btn big-btn left-option-btn'>Play with a friend</button>
            <p className='description-text'>Challenge a Friend to a Chess Duel! Dive into the thrill of chess battles 
                by creating a game and inviting your friend for an exhilarating match. 
                Explore different time controls and game styles, practice specific openings, 
                or simply enjoy a friendly competition with someone you know.</p>
        </div>
        <div className='create-option'>
            <button className='btn dark-btn big-btn right-option-btn'>Start a tournament</button>
            <p className='description-text'>Take the lead and organize your very own chess tournament. Customize rules and oversee 
                the entire event. Whether it's a casual gathering or a competitive showdown, 
                unleash your inner strategist and bring chess enthusiasts together for an 
                unforgettable experience.</p>
        </div>
        
    </div>
  )
}

export default Create