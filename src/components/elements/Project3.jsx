import React from 'react'
import CommonPicSide from '../utils/CommonPicSide'
import CommonSide from '../utils/CommonSide'

const Project3 = () => {
  return (
    <>
    <div className="Project3">
    <div className="container-fluid project3-uper">
            <div className="row">
                <div className="col-md-6 project3-l d-flex  align-items-center order-sm-1 order-2">
                    <CommonSide
                    title="Project 3"
                    heading="Resturant Landing Page"
                    paragraph="The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can."
                    />
                </div>
                <div className="col-md-6 project3-r order-sm-2 order-1 ">
                       <CommonPicSide image='assets/portfolio-3-img.jpg' />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Project3