import React from "react";
import { Link } from "react-router-dom";
import ContactBtn from "../utils/ContactBtn";
import { FaGlobe } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid ">
          <div>
            <Link className="navbar-brand" to="/">
              <img src="assets/logo-header.svg" alt="img" />
            </Link>
          </div>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse  "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0   pt-2">
              <li className="nav-item">
                <Link to="/" className="nav-link ">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/portfolio" className="nav-link mx-sm-4 mx-0">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link ">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="ms-auto">
              <FaGlobe size={55} className="icon me-4 d-sm-inline d-block mb-sm-0 mb-2" />
              <Link to="" className="">
                <ContactBtn name="Contact Me" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
