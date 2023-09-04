import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

export const Navbaar = (props) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary m-2 navbar-light">
      <Navbar.Brand href="#home"> MOVIES </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <ul className="navbar-nav mr-auto bg-transparent">
          <li className="nav-item">
            <Link className="nav-link" to="home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="movies">
              Movies
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="people">
              People
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="tv">
              Tv
            </Link>
          </li>
        </ul>

        <ul className="navbar-nav ms-auto m-2 ">
          <li className="nav-item">
            <i className="fab fa-facebook"></i>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="register">
              Register
            </Link>
          </li>

          <li className="nav-item">
            <span onClick={props.Logout} className="nav-link">
              LogOut
            </span>
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
};
