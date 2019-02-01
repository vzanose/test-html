import React from 'react'
import Link from 'gatsby-link'

import './header.css'
import Btn from './btn-main'

const Header = ({ siteTitle }) => (
  <header className="page-header">
    <div className="page-header__group wrapper">
      <Link className="page-header__logo-link" to="#">
        <img className="page-header__logo" src={require('../img/logo.svg')} width="135" height="23" alt="Main Logo" />
      </Link>
      <ul className="page-header__menu">
        <li className="page-header__menu-item">
          <Link className="page-header__link" to="#">Locations</Link>
        </li>
        <li className="page-header__menu-item">
          <Link className="page-header__link" to="#">About</Link>
        </li>
        <li className="page-header__menu-item">
          <Link className="page-header__link" to="#">Services</Link>
        </li>
        <li className="page-header__menu-item">
          <Link className="page-header__link" to="#">Team</Link>
        </li>
        <li className="page-header__menu-item">
          <Link className="page-header__link" to="#">Contact</Link>
        </li>
      </ul>
      <Btn value="For Tenants" className="page-header__signin-button" /> 
    </div>
  </header>
)

export default Header
