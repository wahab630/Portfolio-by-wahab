import React from "react";
import CommonSide from "../utils/CommonSide";

const ProjectOne = () => {
  return (
    <>
      <div className="projectOne">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 d-flex  align-items-center project-one-l order-sm-1 order-2">
              <CommonSide
                title="Project 1"
                heading="Branding Nice Studio"
                paragraph="The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can."
             />
                
              
            </div>
            <div className="col-md-6 project-r order-sm-2 order-1 ">
              <img src="assets/portfolio-1-img.jpg" className="project-one-img img-fluid" alt="no" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectOne;
