import React from "react";
import ContactBtn from "../utils/ContactBtn";

const Form = () => {
  return (
    <>
      <div className="Form">
        <div className="container-fluid mb-4">
          <div className="row">
            <div className="col-md-12  ">
              <form
                action="https://formspree.io/f/xdovvgbw"
                method="POST"
                className="contact-inputs"
              >
                <div className="d-sm-flex justify-content-between mb-4 ">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="fullName"
                    className="form-input text-white mb-3 mb-sm-0 "
                    autoComplete="off"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="form-input text-white"
                    autoComplete="off"
                    required
                  />
                </div>
                <textarea
                  className="textareastyle mb-4"
                  name="textMessage"// ye required elements lazmi likhna he just
                  autoComplete="off"// bus 
                  required
                  // maxlength="200"
                ></textarea>               
                <ContactBtn name="Send To Me" type="submit" />
              </form>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Form;
