import React from 'react'

const ContactBtn = (props) => {
  return (
    <>
    <button className='btn contact-btn'>
    {props.name}
    </button>
    </>
  )
}

export default ContactBtn