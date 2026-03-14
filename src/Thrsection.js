import React from 'react'
import img from './images/secpro.png'

export default function Secsection() {
  return (
   <>
    <div className='secondSection container row justify-content-between m-auto my-5'>
      <div className='secLeftSide col-lg-6 col-sm-12'>
        <img src={img} alt='Second Page'className='img-fluid'/>
      </div>
      <div className='secRightSide col-lg-6 col-sm-12'>
        <h1 className='secTitle'>Get In Touch</h1>
        <div className='secparentDiv'>
          <input type='text' className='secchildInp' placeholder = 'First Name' autoFocus />
          <input type='text' className='secchildInp' placeholder = 'Last Name'/>
          <input type='email' className='secchildInp' placeholder = 'Email Address'/>
          <input type='text' className='secchildInp' placeholder = 'Phone No.'/>
          <textarea placeholder='Message'/>
        </div>
        <button className='secchildBtn'>Send</button>
      </div>
    </div>

   </>
  )
}
