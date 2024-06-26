import React from 'react'
import './LoginForm.css'
import { FaUser, FaLock } from 'react-icons/fa'

const LoginForm = () => {
  return (
    <div className='login-form'>
        <div className='wrapper'>
            <form action=''>
                <h1>Chess Society</h1>
                <div className='input-box'>
                    <input type='text' placeholder='Username' required />
                    <FaUser className='login-icon' />
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='Password' required />
                    <FaLock className='login-icon' />
                </div>
                <button className='btn dark-btn' type='submit'>Sign in</button>
                <div className='register-link'>
                    <p>Don't have an account? <a href='#'>Register</a></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginForm