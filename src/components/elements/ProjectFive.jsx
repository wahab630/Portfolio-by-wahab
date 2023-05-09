import React from 'react'
import CommonPicSide from '../utils/CommonPicSide'
import CommonSide from '../utils/CommonSide'

const ProjectFive = () => {
  return (
    <>
    <div className="ProjectFive">
    <div className="container-fluid project-five-uper">
            <div className="row">
                <div className="col-md-6 project-five-l d-flex  align-items-center order-sm-1 order-2">
                    <CommonSide
                    title="Project 5"
                    heading="Financial App Design"
                    paragraph="The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can."
                     />
                </div>
                <div className="col-md-6 project-five-r order-sm-2 order-1 ">
                       <CommonPicSide image='assets/portfolio-5-img.jpg' />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProjectFive