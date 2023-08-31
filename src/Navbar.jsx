import React from "react";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-transparent">
        <Link className="navbar-brand" to="home">
          Movies
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
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

          <ul className="navbar-nav ms-auto m-4 ">
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
        </div>
      </nav>
    </div>
  );
};
