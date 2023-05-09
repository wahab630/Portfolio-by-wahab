import React from "react";
import ContactBtn from "../utils/ContactBtn";

const Form = () => {
  return (
    <>
      <div className="Form">
        <div className="container-fluid mb-4">
          <div className="row">
            <div className="col-md-6 mb-3 mb-sm-0 ">
              <input
                type="text"
                placeholder="Full Name"
                className="form-input text-white"
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                placeholder="Email"
                className="form-input text-white"
              />
            </div>
          </div>
        </div>
        <div className="container-fluid mb-4">
          <div className="row">
            <div className="col-md-12 ">
              <textarea
                className="textareastyle "
                // maxlength="200"
              >
                A nice day is a nice day. Lao Tseu
              </textarea>
            </div>
          </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                <ContactBtn name="Send To Me"/>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Form;
