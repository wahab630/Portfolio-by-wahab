import React from 'react'
import {FaArrowRight} from "react-icons/fa";

const CommonSide = (props) => {
  return (
    <>
    <div className="commonSide">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div>
                        <span className='cs-before'></span>
                        <span className='cs-title'>
                            {props.title}
                        </span>
                    </div>
                    <div className="mb-4 mt-3">
                        <h2 className="commonSide-h2 mb-4">
                            {props.heading}
                        </h2>
                        <p className="commonside-p">
                            {props.paragraph}
                        </p>
                        <div>
                            <FaArrowRight color='#fecd1a' size={25} className='commonside-arrow'/>
                            <span className='commonside-base'>Read More</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CommonSide