import React from 'react'
import './RegistrationForm.css'
import { FaUser, FaLock } from 'react-icons/fa'
import { BsCapslockFill } from "react-icons/bs"

const RegistrationForm = () => {
  return (
    <div className='registration-form'>
        <div className='wrapper'>
            <form action=''>
                <h1>Chess Society</h1>
                <div className='input-box'>
                    <input type='text' placeholder='Username' required />
                    <FaUser className='registration-icon' />
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='Password' required />
                    <FaLock className='registration-icon' />
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='Confirm password' required />
                    <BsCapslockFill className='login-icon' />
                </div>
                <button className='btn dark-btn' type='submit'>Sign up</button>
                <div className='login-link'>
                    <p>Already have an account? <a href='#'>Sign in</a></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default RegistrationForm