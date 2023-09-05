import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Navbar = () => (
  <>
    <nav>
      <div className="logoContainer">
        <img src={logo} alt="logo" className="logo" />
        <h1>Space Traveler&apos;s Hub</h1>
      </div>
      <ul className="linksContainer">
        <li><NavLink to="/rockets">Rockets</NavLink></li>
        <li><NavLink to="/missions">Missions</NavLink></li>
        {' '}
        |
        {' '}
        <li><NavLink to="/myprofile">My Profile</NavLink></li>
      </ul>
    </nav>
    <Outlet />
  </>
);

export default Navbar;
