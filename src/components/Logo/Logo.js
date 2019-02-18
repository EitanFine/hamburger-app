import React from 'react'
import burgerLogo from '../../assets/images/burger-logo.png'
import './Logo.css'

const logo = (props) => (
  <div className='Logo'>
    <img src={burgerLogo} alt="burger-loog"/>
  </div>
)

export default logo