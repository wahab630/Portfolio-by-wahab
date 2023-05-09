import React from 'react'

const CommonPicSide = (props) => {
  return (
    <>
    <div className="commonpicside">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 project-side">
                    <div>
                    <img src={props.image} className="project-side-img img-fluid" alt="no" />

                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CommonPicSide