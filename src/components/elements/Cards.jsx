import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger';

const Cards = () => {
  const [counterStart, setCounterStart] = useState(false)

  return (
    <>
      <div className="cards">
      <ScrollTrigger onEnter={()=> setCounterStart(true)} onExit={()=> setCounterStart(false)} >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 px-1 ">              
              <div className="card card-one">
                <div className="card-body">
                  <h5 className="card-title"> {counterStart && <CountUp start={0} end={56} duration={1} delay={0}  />}</h5>
                  <p className="card-text">Happy Clients</p>
                </div>
              </div>    
            </div>
            <div className="col-md-3 px-1">
            <div className="card card-mid">
                <div className="card-body">
                  <h5 className="card-title"> {counterStart && <CountUp start={0} end={87} duration={1} delay={0}  />}</h5>
                  <p className="card-text">Projects Done</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 px-1">
            <div className="card card-mid">
                <div className="card-body">
                  <h5 className="card-title"> {counterStart && <CountUp start={0} end={16} duration={2} delay={0}  />}</h5>
                  <p className="card-text">Awards Winning</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 px-1">
            <div className="card card-four">
                <div className="card-body">
                  <h5 className="card-title"> {counterStart && <CountUp start={0} end={7} duration={2} delay={0}  />}</h5>
                  <p className="card-text">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </ScrollTrigger>
      </div>
    </>
  );
};

export default Cards;
