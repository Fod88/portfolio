import React from 'react'

function Email() {
  return (
    <div className='Email container py-5'>
      <div className='row align-items-center'>

        {/* TEXT */}
        <div className='col-lg-6 col-12 mb-3 mb-lg-0 text-center text-lg-start'>
          <h2>
            See my Projects At once & Leave
            <br />
            Here Your Email Address
          </h2>
        </div>

        {/* INPUT + BUTTON */}
        <div className='col-lg-6 col-12'>
          <div className='d-flex flex-column flex-sm-row gap-2'>

            <input
              type='text'
              placeholder='Email Address'
              className='form-control'
            />

            <button className='btn EmailSub px-4'>
              Submit
            </button>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Email
