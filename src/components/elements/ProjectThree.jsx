import React from 'react'
import CommonSide from '../utils/CommonSide'
import CommonPicSide from '../utils/CommonPicSide'

const ProjectThree = () => {
  return (
    <>
    <div className="projectThree">
        <div className="container-fluid project-three-uper">
            <div className="row">
                <div className="col-md-6 project-three-l d-flex  align-items-center order-sm-1 order-2">
                    <CommonSide
                    title="Project 3"
                    heading="Resturant Landing Page"
                    paragraph="The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can."
                    />
                </div>
                <div className="col-md-6 project-three-r order-sm-2 order-1 ">
                       <CommonPicSide image='assets/portfolio-3-img.jpg' />
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12  text-center  project-three-lower">
                    <button className='btn project-three-btn  '>View All</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProjectThree