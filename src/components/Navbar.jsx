import React from "react";
import polyphiaLogo from '../assets/img/logo1.png';
import "../style/Navbar.css"
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="relative navbar fixed top-0 p-0 flex justify-between ">
      <div className="navbar-start lg:hidden w-auto">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <Link to="/"><li className="p-2">HOME</li></Link>
            <Link to="/discography"><li className="p-2">DISCOGRAPHY</li></Link>
            <li><a className="p-2">TOUR</a></li>
            <li><a className="p-2">ALFA</a></li>
            <li><a className="p-2">BRAVO</a></li>
            <li><a className="p-2">CHARLIE</a></li>
            <li><a className="p-2">PAGES</a></li>
            <li><a className="p-2">ELEMENTS</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center lg:hidden w-auto">
        <a className="btn btn-ghost lg:hidden btn-polyphia-hidden"><img className="h-14" src={polyphiaLogo} alt="" /></a>
      </div>
      <div className="navbar-end lg:hidden w-auto">
        <div style={{ width: "54px", height: "40px" }}></div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 inset-y-0 right-0">
          <Link to="/"><li className="p-2">HOME</li></Link>
          <Link to="/discography"><li className="p-2">DISCOGRAPHY</li></Link>
          <li className="p-2">TOUR</li>
          <li className="p-2">ALFA</li>
        </ul>
      </div>
      <div className="navbar-center hidden lg:flex">
        <a className="btn btn-ghost h-14"><img className="h-14" src={polyphiaLogo} alt="" /></a>
      </div>
      <div className="navbar-start hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a className="p-2">BRAVO</a></li>
          <li><a className="p-2">CHARLIE</a></li>
          <li><a className="p-2">PAGES</a></li>
          <li><a className="p-2">ELEMENTS</a></li>
        </ul>
      </div>
    </div>
  );
}