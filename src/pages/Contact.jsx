import React from "react";
import ContactLeft from "../components/elements/ContactLeft";
import Form from "../components/elements/Form";


const Contact = () => {
  return (
    <>
      <div className="Contact">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <ContactLeft />
            </div>
            <div className="col-md-6">
                <Form/>
               
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
