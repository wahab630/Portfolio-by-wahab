import React from "react";
import ContactBtn from "../utils/ContactBtn";
const Bottom = () => {
  return (
    <>
      <div className="bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto  ">
                  <img src="assets/intersection-1.svg" className="bottom-top-img" alt="no" />
                  <img src="assets/intersection-2.svg" className="bottom-bottom-img" alt="no" />
              <div>
                <div className="bottom-mid">
                  <span className="bottom-before"></span>
                  <h2 className="bottom-h2">Lets Work Together</h2>
                  <p className="bottom-p">
                    The technological revolution is changing aspect of our
                    lives, and the fabric of society itself. it's also changing
                    the way we learn and what we learn
                  </p>
                </div>
                <ContactBtn name="Contact Me" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bottom;
