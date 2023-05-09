import React from "react";

const Cards = () => {
  return (
    <>
      <div className="cards">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 px-1 ">
              <div className="card card-one">
                <div className="card-body">
                  <h5 className="card-title">56</h5>
                  <p className="card-text">Happy Clients</p>
                </div>
              </div>    
            </div>
            <div className="col-md-3 px-1">
            <div className="card card-mid">
                <div className="card-body">
                  <h5 className="card-title">87</h5>
                  <p className="card-text">Projects Done</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 px-1">
            <div className="card card-mid">
                <div className="card-body">
                  <h5 className="card-title">16</h5>
                  <p className="card-text">Awards Winning</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 px-1">
            <div className="card card-four">
                <div className="card-body">
                  <h5 className="card-title">7</h5>
                  <p className="card-text">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
