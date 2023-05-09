import React from 'react'
import CommonPicSide from '../utils/CommonPicSide'
import CommonSide from '../utils/CommonSide'

const ProjectFour = () => {
  return (
    <>
    <div className="ProjectFour">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 project-four-r">
                    <CommonPicSide image="assets/portfolio-4-img.jpg" />
                </div>
                <div className="col-md-6 d-flex  align-items-center project-four-r">
                    <CommonSide
                    title="Project 4"
                    heading="Essential UI Icon Pack"
                    paragraph="The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can."
                    />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProjectFour