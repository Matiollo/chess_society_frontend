import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/grid_icon_2.png'
import menu_icon from '../../assets/menu_icon.png'

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 200 ? setSticky(true) : setSticky(false);
        })
    }, [])

    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo_pic' /> 
        <span className='logo_text'>Chess Society</span>
        <ul className={mobileMenu? '' : 'hide-mobile-menu'}>
            <li>Create</li>
            <li>Tournaments</li>
            <li>Watch</li>
            <li><button className='btn'>Sign in</button></li>
        </ul>
        <img src={menu_icon} alt='' className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar