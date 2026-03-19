import React from 'react'

function Email() {
  return (
    <div className='Email p-5 container m-auto row justify-content-between'>
        <div className='EmailChildh2 col-lg-5 col-sm-12 mt-2'>
            <h2 className=''>
                See my Porjects At once & Leave
                Here Your E-mail Adress
            </h2>
        </div>
        <div className='EmailChildinp col-lg-5 col-sm-12 d-flex justify-content-between'>
            <input type='text' placeholder='Email Adress' />
            <button className='EmailSub w-25 w-sm-50'>Submit</button>
        </div>
    </div>
  )
}

export default Email