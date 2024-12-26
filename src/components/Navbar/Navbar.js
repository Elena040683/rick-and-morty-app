import React from 'react';
import s from "../../App.css";
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
        >
          <i className="fas fa-bars open fw-bold text-dark"></i>
          <i className="fas fa-times close fw-bold text-dark"></i>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav fs-5">
            <NavLink to="/" className="nav-link">
              Characters
            </NavLink>
            {/* <NavLink to="/details" className="nav-link">
              Details
            </NavLink> */}
            <NavLink to="/settings" className="nav-link">
              Settings
            </NavLink>
          </div>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;
