import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar bg-base-300 drop-shadow-md rounded-xl">
      <NavLink className="flex-1" to="/">
        <h1 className='btn btn-ghost text-xl'>E-Sanjeevani</h1>
      </NavLink>
      <ul className="flex space-x-4">
        <li className="nav-item">
          <NavLink className="nav-link hover:text-gray-300" to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link hover:text-gray-300" to="/register" activeClassName="active">
            <button className='btn'>Sign In</button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
