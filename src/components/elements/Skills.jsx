import React from "react";
import ContactBtn from "../utils/ContactBtn";

const Skills = () => {
  return (
    <>
      <div className="skills">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 order-sm-1 order-2 mt-sm-0 mt-5">
              <div className="d-flex gap-4 flex-wrap flex-sm-nowrap">
                <div className="card mb-4">
                  <img
                    src="assets/product.svg"
                    className="skill-card-img "
                    alt="no"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Product Design</h5>
                    <p className="card-text">
                      The technological revolution is changing aspect
                    </p>
                  </div>
                </div>
                <div className="card mt-sm-4 mt-0 mb-5 mb-sm-0">
                  <img
                    src="assets/logo.svg"
                    className="skill-card-img"
                    alt="no"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Logo Design</h5>
                    <p className="card-text">
                      The technological revolution is changing aspect
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex gap-sm-4 gap-0 mt-sm-2 mt-0 flex-wrap flex-sm-nowrap">
                <div className="card mb-4">
                  <img
                    src="assets/UI.svg"
                    className="skill-card-img"
                    alt="no"
                  />
                  <div className="card-body">
                    <h5 className="card-title">UI Design</h5>
                    <p className="card-text">
                      The technological revolution is changing aspect
                    </p>
                  </div>
                </div>
                <div className="card mt-4">
                  <img
                    src="assets/icon.svg"
                    className="skill-card-img"
                    alt="no"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Icon Design</h5>
                    <p className="card-text">
                      The technological revolution is changing aspect
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 skill-r order-sm-2 order-1 ">
            <div>
             <span className="skills-before"></span>
            <span className='skills-title'>My Skills</span>
            </div>
              <div className="mb-4 mt-2">
              <h2 className="skills-h2">Why Hire me for next Project?</h2>
              <p className="skills-right-p">
                The technological revolution is changing aspect of our lives,
                and the fabric of society itself. it's also changing the way we
                learn and what we learn. Factual knowledge is less prized when
                everything you ever need to know can be found on your phone.
                There's no imperative to be an expert at doing everything when
                you can.
              </p>
              </div>
              <ContactBtn name="Scammer"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
