import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook,FaLinkedinIn,FaInstagram,FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <div className='Allfoot container-fluid '>
    <div className='footer row'>
        <div className='fooLeftSide col-lg-5 col-sm-12 text-center mt-5'>
            <Link to = {'/main'}>Portfolio</Link>
        </div>
        <div className='fooRightSide col-lg-3 ps-2 col-sm-12 text-center my-5'>
        <div className='nav1_icons d-flex justify-content-around gap-xxl-3 mt-3' style = {{fontSize : '24px'}}>
                <a href = 'https://www.linkedin.com/in/fady-atef-2a0522379/' target='blank' rel='noreferrer' className='nav-link hoverLinks'><FaLinkedinIn className='faIcon'/></a>
                <a href = 'https://www.facebook.com/fady.alparns.7/' target='blank' rel='nonreferrer' className='nav-link hoverLinks'><FaFacebook className='faIcon'/></a>
                <a href = 'https://www.instagram.com/fady67247?igsh=OHRsam5wdTBmOWZo' target='blank' rel='nonreferrer' className='nav-link hoverLinks' ><FaInstagram className='faIcon'/></a>
                <a href = 'https://github.com/Fod88' target='blank' rel='noreferrer' className='nav-link hoverLinks'><FaGithub className='faIcon'/></a>
                </div>
        </div>
    </div>
    <p>© 2026 — All Rights Reserved | Fady Atef</p>
    </div>
  )
}

export default Footer