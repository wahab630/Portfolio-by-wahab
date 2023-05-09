import React from 'react'
import CommonSide from '../utils/CommonSide'
import CommonPicSide from '../utils/CommonPicSide'

const ProjectTwo = () => {
  return (
    <>
    <div className="projectTwo">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 project-two-l ">
                <CommonPicSide image="assets/portfolio-2-img.jpg"/>
                </div>
                <div className="col-md-6 d-flex  align-items-center project-two-r">
                    <CommonSide title="Project 2" heading="Mobile Card App" paragraph="The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can." />

                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProjectTwo