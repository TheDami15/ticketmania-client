import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeaderHome.css';
import logo from "../img/logo2.png";
import { isLoggedIn } from '../utils/auth';

const HeaderHome = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <Link to="/" className="logo">
        <img className='imglogo' src={logo} alt="Logo" />
      </Link>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      <div className="bx bx-menu" id="menu-icon" onClick={toggleMenu}></div>

      <ul className={`navbar ${menuOpen ? 'show' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>HOME</Link></li>
        {isLoggedIn() && (
          <li><Link to="/shows" onClick={toggleMenu}>SHOWS</Link></li>
        )}
        {isLoggedIn() ? (
          <li><Link to="/myticket" onClick={toggleMenu}>MYTICKET</Link></li>
        ) : (
          <li><Link to="/form" onClick={toggleMenu}>LOG IN</Link></li>
        )}
      </ul>
    </header>
  );
};

export default HeaderHome;
