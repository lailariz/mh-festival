import React, { Component } from 'react';
import NavLink from "./NavLink";
import logo from '../img/logo.svg';
import { Link } from 'react-router-dom';

class Header extends Component {
  render () {
    return (
			<nav className="navbar navbar-expand-lg navbar-light p-0 py-3 container">
        <div className="d-flex">
          <Link to="/" className="logo-container">
			      <img src={logo} className="logo" alt="logo" />
          </Link>
			    <button className="navbar-toggler hamburger" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			      <span className="navbar-toggler-icon"></span>
			    </button>
        </div>
			
			  <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
			    <ul className="navbar-nav">
            <NavLink to="/">
              <span>Home</span>
            </NavLink>
            <NavLink to="/space">
              <span>The Space</span>
            </NavLink>
            <NavLink to="/schedule">
              <span>Schedule</span>
            </NavLink>
            <NavLink to="/prebuild">
              <span>Prebuild</span>
            </NavLink>
			    </ul>
			  </div>
			</nav>
    );
  }
}
//             <NavLink to="/FAQ">
//               <span>FAQ</span>
//             </NavLink>

export default Header;
