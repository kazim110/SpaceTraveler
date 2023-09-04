import React from 'react';
import logo from '../assets/logo.svg';

const Navbar = () => (
  <nav>
    <div className="logoContainer">
      <img src={logo} alt="logo" className="logo" />
      <h1>Space Traveler&apos;s Hub</h1>
    </div>
    <ul className="linksContainer">
      <li><a href="/">Rockets</a></li>
      <li><a href="/">Missions</a></li>
      {' '}
      |
      {' '}
      <li><a href="/">My Profile</a></li>
    </ul>
  </nav>
);

export default Navbar;
