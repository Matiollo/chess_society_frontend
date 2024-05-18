import React from 'react'
import './Footer.css'

const Footer = ({additional_style}='') => {
  return (
    <div className={`footer ${additional_style}`}>
        <p>© 2024 Chess Society</p>
        <a href="">Help</a>
    </div> 
  )
}

export default Footer


// Contact information: email - krasnoshapka.anastasiia@gmail.com
//                      instagram - ?
//                      telegram - ?
// About 
// FAQ
// © 2024 Chess Society 
