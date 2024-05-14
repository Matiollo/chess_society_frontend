import React from 'react'
import './AccountEditForm.css'
import { FaUser, FaLock } from 'react-icons/fa'
import { BsCapslockFill } from "react-icons/bs"
import { IoArrowBackCircle } from "react-icons/io5"

const AccountEditForm = () => {
  return (
    <div className='account-edit-form'>
        <div className='account-edit-wrapper'>
            <form action=''>
                <div className='account-edit-header'>
                    <button><IoArrowBackCircle className='back-icon' /></button>
                    <h1>kudos</h1>
                </div>
                <div className='change-section'>
                    <div className='input-box'>
                        <input type='text' placeholder='New username' required />
                        <FaUser className='input-icon' />
                    </div>
                    <button className='btn dark-btn' type='submit'>Save username</button>
                </div>
                <div className='change-section'>
                    <div className='input-box'>
                        <input type='password' placeholder='New password' required />
                        <FaLock className='input-icon' />
                    </div>
                    <div className='input-box'>
                        <input type='password' placeholder='Confirm password' required />
                        <BsCapslockFill className='input-icon' />
                    </div>
                    <button className='btn dark-btn' type='submit'>Save password</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AccountEditForm