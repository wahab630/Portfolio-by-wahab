import React from "react";
import {
  FaLinkedinIn,
  FaBehance,
  FaInstagram,
  FaFoursquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 col-12  d-flex align-items-center  justify-content-center">
              <div>
                <img src="assets/logo-header.svg" alt="no" />
              </div>
            </div>
            <div className="col-md-7 col-12 my-2 my-sm-0 footer-mid  text-center  d-flex align-items-center justify-content-center">
              © 2023 Freelancer - Phlox Elementor WordPress Theme. All rights
              reserved.
            </div>
            <div className="col-md-3 col-12 footer-icon ">
              <FaFoursquare size={55} className="icon" />
              <FaLinkedinIn size={55} className="icon" />
              <FaInstagram size={55} className="icon" />
              <FaBehance size={55} className="icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
