import React from "react";
import ContactBtn from "../utils/ContactBtn";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 hero-left ">
              <div>
                <span className="hero-before"></span>
                <span className="hero-title">Introducing</span>
              </div>
              <h1 className="hero-h1">Hello</h1>
              <h3 className="hero-h3">I'm Jessy Walter</h3>
              <p className="hero-para my-4">
                Since beginning my journey as a freelance designer nearby 7
                years ago, I 've done remote work for agencies, consulted for
                startup, and collaborated with talented people to create digital
                products.
              </p>
              <ContactBtn name="Contact Me" />
            </div>
            <div className="col-md-7 mt-5 mt-sm-0">
              <div className="hero-img">
                <img
                  src="assets/hero-img.png"
                  className="img-fluid"
                  alt="no img"
                />
                <img src="assets/black.svg" alt="no" className="black-TR d-sm-block d-none" />
                <img src="assets/ps.svg" alt="no" className="ps d-sm-block d-none" />
                <img src="assets/black.svg" alt="no" className="black-BR d-sm-block d-none" />
                <img src="assets/xd.svg" alt="no" className="xd d-sm-block d-none" />
                <img src="assets/black.svg" alt="no" className="black-TL d-sm-block d-none" />
                <img src="assets/id.svg" alt="no" className="id d-sm-block d-none" />
                <img src="assets/black.svg" alt="no" className="black-BL d-sm-block d-none" />
                <img src="assets/ai.svg" alt="no" className="ai d-sm-block d-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
