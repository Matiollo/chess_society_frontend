import React from 'react'
import './Create.css'

const Create = () => {
  return (
    <div className='create'>
        <div className='create-option'>
            <button className='btn dark-btn big-btn'>Play with a friend</button>
            <p>Here will be a description of this option. Here will be a description 
                of this option. Here will be a description of this option. Here will 
                be a description of this option.</p>
        </div>
        <div className='create-option'>
            <button className='btn dark-btn big-btn'>Organize a tournament</button>
            <p>Here will be a description of this option. Here will be a description 
                of this option. Here will be a description of this option. Here will 
                be a description of this option.</p>
        </div>
    </div>
  )
}

export default Create