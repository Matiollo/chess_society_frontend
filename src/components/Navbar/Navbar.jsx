import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/grid_icon_2.png'

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 200 ? setSticky(true) : setSticky(false);
        })
    }, [])

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo' />
        <ul>
            <li>Create</li>
            <li>Tournaments</li>
            <li>Watch</li>
            <li><button className='btn'>Sign in</button></li>
        </ul>
    </nav>
  )
}

export default Navbar