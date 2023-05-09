import React from 'react'
import CommonPicSide from '../utils/CommonPicSide'
import CommonSide from '../utils/CommonSide'

const ProjectSeven = () => {
  return (
    <>
    <div className="ProjectSeven">

    <div className="container-fluid project-seven-uper">
            <div className="row">
                <div className="col-md-6 project-seven-l d-flex  align-items-center order-sm-1 order-2">
                    <CommonSide
                    title="Project 7"
                    heading="Flight Booking App"
                    paragraph="The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can."
                       />
                </div>
                <div className="col-md-6 project-seven-r order-sm-2 order-1 ">
                       <CommonPicSide image='assets/portfolio-7-img.jpg' />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProjectSeven