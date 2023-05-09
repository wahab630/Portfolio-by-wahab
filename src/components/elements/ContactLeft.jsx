import React from "react";

const ContactLeft = () => {
  return (
    <>
      <div className="ContactLeft">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div>
                <span className="CL-before"></span>
                <span className="CL-title">Contact Me</span>
              </div>
              <div className="mb-4 mt-2">
                <h2 className="CL-h2">Get In Touch With Me</h2>
                <p className="CL-right-p">
                  The technological revolution is changing aspect of our lives,
                  and the fabric of society itself. it's also changing the way
                  we learn and what we learn. Factual knowledge is less prized
                  when everything you ever need to know can be found on your
                  phone. There's no imperative to be an expert Factual knowledge
                  is less prized when everything you ever need to know can be
                  found at doing everything.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4  d-sm-flex d-flex-none align-items-center justify-content-center">
                    <img
                      src="assets/phone.svg"
                      className="img-fluid rounded-start  CL-left-image "
                      alt="no"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Phone</h5>
                      <p className="card-text">
                        +99 (0) 101 0000 888 <br></br> +99 (0) 101 0000 777
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
            <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4  d-sm-flex d-flex-none align-items-center justify-content-center">
                    <img
                      src="assets/mail.svg"
                      className="img-fluid rounded-start  CL-left-image "
                      alt="no"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Email</h5>
                      <p className="card-text">
                      Info@yourdomain.com <br></br> Info@yourdomain.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactLeft;
