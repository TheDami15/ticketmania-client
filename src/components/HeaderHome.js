import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/HeaderHome.css'
import logo from "../img/logo2.png";
import { isLoggedIn } from '../utils/auth';
const HeaderHome = () => {

  return (

    <header>
      <Link to="/" className="logo">
        <img className='imglogo' src={logo}></img>
      </Link>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      <div className="bx bx-menu" id="menu-icon"></div>

      <ul className="navbar">
        <li><Link to="/">HOME</Link></li>
        <li><a href="#">SHOWS</a></li>
        <li><a href="#">MYTICKET</a></li>
        {isLoggedIn() ? (
          <li><Link to="/user">USER</Link></li> // Show this if logged in
        ) : (
          <li><Link to="/form">LOG IN</Link></li> // Show this if not logged in
        )}
      </ul>

    </header>


  )
}

export default HeaderHome
